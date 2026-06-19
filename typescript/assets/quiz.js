/*
 * quiz.js — shared retrieval-practice quiz widget for the TypeScript workspace.
 *
 * Markup contract (styled by assets/course.css):
 *   <div class="quiz-q">
 *     <p class="qtext">Question?</p>
 *     <button class="quiz-opt" data-q="1" data-ok="yes|no">Answer</button>
 *     ...
 *     <p class="quiz-feedback" id="fb-1" data-explain="Why the right answer is right."></p>
 *   </div>
 *
 * Clicking an option marks it correct/wrong and reveals feedback. The per-question
 * explanation lives in the feedback element's data-explain, so this logic stays generic
 * and every lesson reuses it instead of re-inlining the script.
 */
(function () {
  function initQuiz() {
    document.querySelectorAll(".quiz-opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var q = btn.getAttribute("data-q");
        var ok = btn.getAttribute("data-ok") === "yes";
        var fb = document.getElementById("fb-" + q);
        document.querySelectorAll('.quiz-opt[data-q="' + q + '"]').forEach(function (b) {
          b.classList.remove("correct", "wrong");
        });
        btn.classList.add(ok ? "correct" : "wrong");
        if (!fb) return;
        if (ok) {
          var explain = fb.getAttribute("data-explain") || "";
          fb.textContent = "✓ Correct. " + explain;
          fb.className = "quiz-feedback good";
        } else {
          fb.textContent = "✗ Not quite — recall the lesson, then try again.";
          fb.className = "quiz-feedback bad";
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuiz);
  } else {
    initQuiz();
  }
})();
