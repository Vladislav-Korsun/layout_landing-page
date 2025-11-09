'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
  });
});
