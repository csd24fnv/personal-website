document.addEventListener('DOMContentLoaded', function () {
  fetch('js/data.json')
    .then(response => response.json())
    .then(images => {
      // Select the first 4 projects as featured
      const featured = images.slice(0, 4);
      const carousel = document.getElementById('home-carousel');
      const wrapper = document.createElement('div');
      wrapper.className = 'home-carousel-wrapper animate-on-scroll';
      let current = 0;
      let interval;

      function renderCarousel(idx) {
        wrapper.innerHTML = `
          <div class="home-carousel-img-container">
            <img src="${featured[idx].full}" alt="${featured[idx].title}" aria-label="${featured[idx].title}" class="carousel-fade">
          </div>
          <div class="home-carousel-caption">
            <h3>${featured[idx].title}</h3>
            <div class="carousel-tags">
              ${(featured[idx].tags || []).map(tag => `<span class="tag">${tag}</span>`).join(' ')}
            </div>
            <p>${featured[idx].description}</p>
            <a href="projects.html" class="btn-accent">View Project</a>
          </div>
          <button class="home-carousel-btn prev" aria-label="Previous image">&#10094;</button>
          <button class="home-carousel-btn next" aria-label="Next image">&#10095;</button>
          <div class="home-carousel-pips">
            ${featured.map((_, i) => `<span class="pip${i === idx ? ' active' : ''}" data-index="${i}" aria-label="Go to image ${i+1}"></span>`).join('')}
          </div>
        `;
        wrapper.querySelector('.prev').onclick = () => goTo((idx - 1 + featured.length) % featured.length);
        wrapper.querySelector('.next').onclick = () => goTo((idx + 1) % featured.length);
        wrapper.querySelectorAll('.pip').forEach(pip => {
          pip.onclick = () => goTo(Number(pip.dataset.index));
        });
        // Fade-in effect
        const img = wrapper.querySelector('.carousel-fade');
        img.style.opacity = 0;
        setTimeout(() => { img.style.opacity = 1; }, 50);
      }

      function goTo(idx) {
        current = idx;
        renderCarousel(current);
        resetAutoPlay();
      }

      function autoPlay() {
        interval = setInterval(() => {
          current = (current + 1) % featured.length;
          renderCarousel(current);
        }, 5000);
      }

      function resetAutoPlay() {
        clearInterval(interval);
        autoPlay();
      }

      renderCarousel(current);
      autoPlay();
      carousel.appendChild(wrapper);
    })
    .catch(err => {
      // Optional: show a fallback message if data fails to load
      const carousel = document.getElementById('home-carousel');
      carousel.innerHTML += '<div style="color:red;text-align:center;margin:2rem;">Could not load featured projects.</div>';
      console.error('Failed to load featured projects:', err);
    });
}); 