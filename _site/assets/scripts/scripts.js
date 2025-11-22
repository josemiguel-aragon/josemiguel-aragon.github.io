document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });

  // Dark Mode Toggle
  const toggleButton = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;
  const icon = toggleButton.querySelector('i');

  // Check for saved user preference, if any, on load of the website
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

  if (currentTheme) {
    htmlElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  // Function to update navbar colors based on theme and scroll position
  function updateNavbarColors() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const isScrolled = window.scrollY > 50;

    if (isScrolled) {
      navbar.classList.add('shadow-sm');
      navbar.style.background = currentTheme === 'dark'
        ? 'rgba(15, 23, 42, 0.95)'
        : 'rgba(255, 255, 255, 0.95)';
    } else {
      navbar.classList.remove('shadow-sm');
      navbar.style.background = currentTheme === 'dark'
        ? 'rgba(15, 23, 42, 0.9)'
        : 'rgba(255, 255, 255, 0.9)';
    }
  }

  toggleButton.addEventListener('click', function () {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }

    // Update navbar colors immediately when theme changes
    updateNavbarColors();
  });

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', updateNavbarColors);

  // Initialize navbar colors on page load
  updateNavbarColors();
});
