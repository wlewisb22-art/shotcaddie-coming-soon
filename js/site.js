/* Shot Caddie — launch-list forms open the visitor's own email app
   with a ready-to-send message. No email provider or backend needed.

   ┌──────────────────────────────────────────────────────────────┐
   │  TO CHANGE WHERE THESE EMAILS GO, EDIT THIS ONE LINE:         │
   └──────────────────────────────────────────────────────────────┘ */
var CONTACT_EMAIL = "orders@flyingbindustries.com";

(function () {
  "use strict";

  function buildMailto(form) {
    var field = form.querySelector('input[type="email"]');
    var visitorEmail = field ? field.value.trim() : "";
    var source = form.getAttribute("data-source") || "Shot Caddie";

    var subject = "Shot Caddie launch list — " + source;
    var body = [
      "Please add me to the Shot Caddie launch list.",
      "",
      "Email: " + (visitorEmail || "(type your email here)"),
      "Interested via: " + source + " page",
      "",
      "I'd like updates on launch timing, preorders, and build photos."
    ].join("\r\n");

    return "mailto:" + CONTACT_EMAIL +
           "?subject=" + encodeURIComponent(subject) +
           "&body=" + encodeURIComponent(body);
  }

  function onSubmit(e) {
    e.preventDefault();
    var form = e.currentTarget;
    // Let the browser show its native "enter a valid email" prompt first.
    if (typeof form.reportValidity === "function" && !form.reportValidity()) {
      return;
    }
    window.location.href = buildMailto(form);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var forms = document.querySelectorAll("form[data-signup]");
    Array.prototype.forEach.call(forms, function (form) {
      form.addEventListener("submit", onSubmit);
    });
  });
})();
