let yPositions;

function setupSectionIndices() {
  const content = document.getElementById("page-contents");
  const sections = content.querySelectorAll('section');

  // Map their top Y positions relative to the document
  yPositions = Array.from(sections).map(section => {
    return section.offsetTop;
  });
}

export function initScrolling() {
  setupSectionIndices();
  const progressBar = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY - window.innerHeight;
    const docHeight = document.documentElement.scrollHeight - (2 * window.innerHeight);
    const scrollPercent = Math.max(3, (scrollTop / docHeight) * 100);
    progressBar.style.width = scrollPercent + '%';
  });
}