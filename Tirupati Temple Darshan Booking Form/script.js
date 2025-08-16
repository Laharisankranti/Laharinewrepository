// Enable tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el);
});

// Form validation & submission
(() => {
  'use strict';
  const form = document.getElementById('darshanForm');
  const modalEl = document.getElementById('confirmationModal');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop refresh
    event.stopPropagation();

    if (form.checkValidity()) {
      // Bounce effect
      const btn = document.getElementById('submitBtn');
      btn.classList.add('bounce');
      btn.addEventListener('animationend', () => btn.classList.remove('bounce'), { once: true });

      // Show modal
      new bootstrap.Modal(modalEl).show();

      // Reset form for next entry
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
    }
  }, false);
})();
