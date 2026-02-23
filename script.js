// Phase toggles
function togglePhase(header) {
  const phase = header.parentElement;
  const wasOpen = phase.classList.contains('open');
  phase.classList.toggle('open', !wasOpen);
}

// Keyboard accessibility for phase toggles
document.querySelectorAll('.phase-header').forEach(header => {
  header.setAttribute('role', 'button');
  header.setAttribute('tabindex', '0');
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePhase(header);
    }
  });
});
