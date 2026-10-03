/* =====================================================================
   Spark Engine course — interactive quiz widgets (behaviour)
   Drop <script src="../assets/quiz.js"></script> into any lesson and write
   declarative markup. No per-lesson JS required. Three widgets:

   1) CLASSIFY — tag each item into one of N labelled categories.
      <div class="ex">
        <div class="qz-classify" data-options="Transform|Action">
          <div class="qz-item" data-op="filter()"
               data-answer="Transform" data-why="Lazy — builds the plan."></div>
          ...more .qz-item...
        </div>
      </div>
      • data-options : pipe-separated button labels
      • data-answer  : must equal one option exactly
      • data-why     : feedback shown after a click (✓/✗ auto-prefixed)
      A running "<n> / <total> correct" score is appended automatically.

   2) PICK — click the one correct line in a code block.
      <div class="qz-pick" data-wrong="✗ optional custom wrong-answer text">
        <span class="qz-line" data-correct="false">df = ...</span>
        <span class="qz-line" data-correct="true"
              data-feedback="✓ groupBy shuffles → new stage.">  .groupBy(...)</span>
      </div>
      A .qz-feedback line is created if absent.

   3) REVEAL — predict via multiple choice, then reveal the explanation.
      <div class="qz-reveal" data-answer="2">
        <div class="qz-choices">
          <button data-v="0">0</button><button data-v="1">1</button>
          <button data-v="2">2</button><button data-v="3">3</button>
        </div>
        <div class="qz-explain"> ...explanation, hidden until answered... </div>
      </div>
   ===================================================================== */
(function(){
  function ready(fn){
    if(document.readyState !== "loading"){ fn(); }
    else { document.addEventListener("DOMContentLoaded", fn); }
  }

  function initClassify(grid){
    var opts = (grid.getAttribute("data-options") || "A|B").split("|");
    var items = Array.prototype.slice.call(grid.querySelectorAll(".qz-item"));
    var state = {}, total = items.length;
    var score = document.createElement("div");
    score.className = "qz-score";
    function refresh(){
      var n = 0; for(var k in state){ if(state[k]) n++; }
      score.textContent = n + " / " + total + " correct";
    }
    items.forEach(function(item, i){
      var op = item.getAttribute("data-op") || "";
      var answer = item.getAttribute("data-answer");
      var why = item.getAttribute("data-why") || "";
      item.innerHTML = '<div class="op"></div><div class="btns"></div><div class="qz-fb">&nbsp;</div>';
      item.querySelector(".op").textContent = op;
      var btns = item.querySelector(".btns");
      var fb = item.querySelector(".qz-fb");
      opts.forEach(function(label){
        var b = document.createElement("button");
        b.type = "button"; b.textContent = label;
        b.addEventListener("click", function(){
          var correct = (label === answer);
          btns.querySelectorAll("button").forEach(function(x){ x.classList.remove("sel-good","sel-bad"); });
          b.classList.add(correct ? "sel-good" : "sel-bad");
          fb.textContent = (correct ? "✓ " : "✗ ") + why;
          fb.className = "qz-fb " + (correct ? "ok" : "no");
          state[i] = correct; refresh();
        });
        btns.appendChild(b);
      });
    });
    refresh();
    grid.appendChild(score);
  }

  function initPick(pick){
    var fb = pick.querySelector(".qz-feedback");
    if(!fb){ fb = document.createElement("div"); fb.className = "qz-feedback"; fb.innerHTML = "&nbsp;"; pick.appendChild(fb); }
    var wrong = pick.getAttribute("data-wrong") ||
      "✗ Not that one — no data crosses the network there, so no new stage.";
    pick.querySelectorAll(".qz-line").forEach(function(line){
      line.addEventListener("click", function(){
        var ok = line.getAttribute("data-correct") === "true";
        pick.querySelectorAll(".qz-line").forEach(function(l){ l.classList.remove("ok","no"); });
        line.classList.add(ok ? "ok" : "no");
        fb.className = "qz-feedback " + (ok ? "ok" : "no");
        fb.innerHTML = ok ? (line.getAttribute("data-feedback") || "✓ Correct.") : wrong;
      });
    });
  }

  function initReveal(rev){
    var answer = rev.getAttribute("data-answer");
    var explain = rev.querySelector(".qz-explain");
    rev.querySelectorAll(".qz-choices button").forEach(function(b){
      b.type = "button";
      b.addEventListener("click", function(){
        var ok = b.getAttribute("data-v") === answer;
        rev.querySelectorAll(".qz-choices button").forEach(function(x){ x.classList.remove("ok","no"); });
        b.classList.add(ok ? "ok" : "no");
        if(explain){ explain.classList.add("show"); }
      });
    });
  }

  ready(function(){
    document.querySelectorAll(".qz-classify").forEach(initClassify);
    document.querySelectorAll(".qz-pick").forEach(initPick);
    document.querySelectorAll(".qz-reveal").forEach(initReveal);
  });
})();
