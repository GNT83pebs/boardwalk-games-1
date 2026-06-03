document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[name="email"]');
      if (!emailInput) return;
      // Use native validation where available
      if (!emailInput.checkValidity()) {
        if (typeof emailInput.reportValidity === 'function') {
          emailInput.reportValidity();
        } else {
          form.reportValidity();
        }
        return;
      }
      var email = emailInput.value.trim();
      // Replace this alert with real submission to an API if needed
      alert('Thanks — we will send updates to ' + email + '.');
      form.reset();
    });
  });
});
