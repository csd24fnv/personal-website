document.addEventListener('DOMContentLoaded', function () {
  fetch('js/data.json')
    .then(response => response.json())
    .then(images => {
      const featured = images.slice(0, 6);
      const gallery = document.getElementById('home-gallery');
      const grid = document.createElement('div');
      grid.className = 'home-gallery-grid';
      featured.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'home-gallery-item animate-on-scroll';
        item.innerHTML = `
          <img src="${img.thumbnail}" alt="${img.title}" tabindex="0" data-index="${i}">
          <div class="home-gallery-caption">
            <h4>${img.title}</h4>
            <p>${img.description}</p>
          </div>
          <div class="overlay">
            <div>${img.title}</div>
            <button type="button">View Details</button>
          </div>
        `;
        item.querySelector('img').addEventListener('click', () => openModal(i, featured));
        item.querySelector('img').addEventListener('keypress', (e) => { if (e.key === 'Enter') openModal(i, featured); });
        item.querySelector('.overlay button').addEventListener('click', () => openModal(i, featured));
        grid.appendChild(item);
      });
      gallery.appendChild(grid);
    });

  function openModal(index, images) {
    let modal = document.getElementById('home-gallery-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'home-gallery-modal';
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
}); 