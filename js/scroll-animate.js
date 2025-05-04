document.addEventListener('DOMContentLoaded', function () {
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Sidebar toggle for mobile
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.sidebar-toggle');
  if (sidebar && toggle) {
    toggle.addEventListener('click', function (e) {
      sidebar.classList.toggle('open');
      e.stopPropagation();
    });
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 700 && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && e.target !== toggle) {
          sidebar.classList.remove('open');
        }
      }
    });
  }
}); 