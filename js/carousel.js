document.addEventListener('DOMContentLoaded', function () {
  fetch('js/data.json')
    .then(response => response.json())
    .then(images => {
      const carousel = document.getElementById('carousel-content');
      const wrapper = document.createElement('div');
      wrapper.className = 'carousel-wrapper';
      let current = 0;
      let interval;

      function renderCarousel(idx) {
        wrapper.innerHTML = `
          <div class="carousel-img-container">
            <img src="${images[idx].full}" alt="${images[idx].title}" aria-label="${images[idx].title}">
          </div>
          <div class="carousel-caption">
            <h4>${images[idx].title}</h4>
            <div class="carousel-tags">
              ${(images[idx].tags || []).map(tag => `<span class='tag'>${tag}</span>`).join(' ')}
            </div>
            <p>${images[idx].description}</p>
            <button class="view-project-btn" data-index="${idx}">View Project</button>
          </div>
          <button class="carousel-btn prev" aria-label="Previous image">&#10094;</button>
          <button class="carousel-btn next" aria-label="Next image">&#10095;</button>
          <div class="carousel-pips">
            ${images.map((_, i) => `<span class="pip${i === idx ? ' active' : ''}" data-index="${i}" aria-label="Go to image ${i+1}"></span>`).join('')}
          </div>
        `;
        wrapper.querySelector('.prev').onclick = () => goTo((idx - 1 + images.length) % images.length);
        wrapper.querySelector('.next').onclick = () => goTo((idx + 1) % images.length);
        wrapper.querySelectorAll('.pip').forEach(pip => {
          pip.onclick = () => goTo(Number(pip.dataset.index));
        });
        wrapper.querySelector('.view-project-btn').addEventListener('click', () => openModal(idx, images));
      }
      function goTo(idx) {
        current = idx;
        renderCarousel(current);
        resetAutoPlay();
      }
      function autoPlay() {
        interval = setInterval(() => {
          current = (current + 1) % images.length;
          renderCarousel(current);
        }, 4000);
      }
      function resetAutoPlay() {
        clearInterval(interval);
        autoPlay();
      }
      function openModal(index, images) {
        let modal = document.getElementById('gallery-modal');
        if (!modal) {
          modal = document.createElement('div');
          modal.id = 'gallery-modal';
          modal.innerHTML = `
            <div class="modal-content">
              <span class="close-modal" tabindex="0">&times;</span>
              <img id="modal-img" src="" alt="">
              <div class="modal-caption">
                <h4 id="modal-title"></h4>
                <p id="modal-desc"></p>
              </div>
            </div>
          `;
          document.body.appendChild(modal);
          modal.querySelector('.close-modal').onclick = closeModal;
          modal.querySelector('.close-modal').onkeypress = (e) => { if (e.key === 'Enter') closeModal(); };
          modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        }
        showModalImage(index, images);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        function showModalImage(idx, imgs) {
          modal.querySelector('#modal-img').src = imgs[idx].full;
          modal.querySelector('#modal-img').alt = imgs[idx].title;
          modal.querySelector('#modal-title').textContent = imgs[idx].title;
          modal.querySelector('#modal-desc').textContent = imgs[idx].description;
        }
        function closeModal() {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      }
      renderCarousel(current);
      autoPlay();
      carousel.appendChild(wrapper);
    });
}); 