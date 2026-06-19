#!/usr/bin/env node
// Sync the `teach` skill from Matt Pocock's upstream repo.
//
// Pull-only mirror of https://github.com/mattpocock/skills/tree/main/skills/productivity/teach
// Wired as a PreToolUse hook on the Skill tool (see ../settings.json): on each /teach it
// checks the upstream commit SHA, downloads only if changed, refreshes the in-repo mirror,
// and installs it into ~/.claude/skills/teach so /teach uses the current version.
//
// Designed to never block /teach: any network/parse failure just exits 0.
// Runs on Node (ships with Claude Code) so the same hook line works on Windows/macOS/Linux.

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { homedir } from "node:os";
import fs from "node:fs";

const OWNER = "mattpocock";
const REPO = "skills";
const PATH = "skills/productivity/teach";
const REF = "main";

const HOOKS_DIR = dirname(fileURLToPath(import.meta.url));
const MIRROR_DIR = join(HOOKS_DIR, "..", "skills", "teach"); // .claude/skills/teach in this repo
const LIVE_DIR = join(homedir(), ".claude", "skills", "teach"); // the installed skill /teach loads
const SHA_FILE = join(MIRROR_DIR, ".upstream-sha");

const UA = { "User-Agent": "teach-skill-sync", Accept: "application/vnd.github+json" };
const REQUEST_TIMEOUT_MS = 5000;

function log(msg) {
  // stderr only — keeps PreToolUse stdout empty so the hook is a clean no-op signal.
  process.stderr.write(`[sync-teach-skill] ${msg}\n`);
}

// Read the hook payload from stdin, with a hard fallback so a manual TTY run never hangs.
function readStdin() {
  return new Promise((resolve) => {
    if (process.stdin.isTTY) return resolve("");
    let data = "";
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        resolve(data);
      }
    };
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => (data += c));
    process.stdin.on("end", finish);
    process.stdin.on("error", finish);
    setTimeout(finish, 800);
  });
}

async function fetchWithTimeout(url, opts = {}) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), REQUEST_TIMEOUT_MS);
  try {
    return await fetch(url, { ...opts, signal: ac.signal, headers: UA });
  } finally {
    clearTimeout(t);
  }
}

async function latestUpstreamSha() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${encodeURIComponent(
    PATH
  )}&sha=${REF}&per_page=1`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`commits ${res.status}`);
  const commits = await res.json();
  if (!Array.isArray(commits) || !commits[0]?.sha) throw new Error("no commit sha");
  return commits[0].sha;
}

async function listUpstreamFiles() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}?ref=${REF}`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error(`contents ${res.status}`);
  const items = await res.json();
  if (!Array.isArray(items)) throw new Error("contents not a list");
  const files = items.filter((i) => i.type === "file" && i.download_url);
  const dirs = items.filter((i) => i.type === "dir");
  if (dirs.length) log(`note: ignoring ${dirs.length} upstream subdir(s): ${dirs.map((d) => d.name).join(", ")}`);
  return files;
}

async function downloadInto(dir, files) {
  fs.mkdirSync(dir, { recursive: true });
  for (const f of files) {
    const res = await fetchWithTimeout(f.download_url);
    if (!res.ok) throw new Error(`download ${f.name} ${res.status}`);
    fs.writeFileSync(join(dir, f.name), await res.text());
  }
}

// Copy the mirror's skill files into the live install (skips dotfiles like .upstream-sha).
function installFromMirror() {
  if (!fs.existsSync(MIRROR_DIR)) return;
  fs.mkdirSync(LIVE_DIR, { recursive: true });
  for (const name of fs.readdirSync(MIRROR_DIR)) {
    if (name.startsWith(".")) continue;
    const src = join(MIRROR_DIR, name);
    if (fs.statSync(src).isFile()) fs.copyFileSync(src, join(LIVE_DIR, name));
  }
}

function readStoredSha() {
  try {
    return fs.readFileSync(SHA_FILE, "utf8").trim();
  } catch {
    return null;
  }
}

async function main() {
  // Only act when this is a /teach invocation (or a manual run with no hook payload).
  const raw = await readStdin();
  if (raw && !raw.toLowerCase().includes("teach")) return; // some other skill — do nothing

  if (typeof fetch !== "function") {
    log("global fetch unavailable (Node <18?) — installing committed mirror only");
    installFromMirror();
    return;
  }

  try {
    const upstreamSha = await latestUpstreamSha();
    if (upstreamSha !== readStoredSha()) {
      const files = await listUpstreamFiles();
      await downloadInto(MIRROR_DIR, files);
      fs.writeFileSync(SHA_FILE, upstreamSha + "\n");
      log(`updated mirror to upstream ${upstreamSha.slice(0, 7)} (${files.length} files)`);
    }
  } catch (err) {
    // Offline / rate-limited / API hiccup — fall back to whatever is committed.
    log(`upstream check skipped: ${err.message}`);
  }

  installFromMirror();
}

main()
  .catch((err) => log(`unexpected error: ${err?.message ?? err}`))
  .finally(() => process.exit(0)); // never block /teach
