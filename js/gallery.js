document.addEventListener('DOMContentLoaded', function () {
  fetch('js/data.json')
    .then(response => response.json())
    .then(images => {
      const gallery = document.getElementById('gallery-content');
      const grid = document.createElement('div');
      grid.className = 'gallery-grid';
      images.forEach((img, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
          <img src="${img.thumbnail}" alt="${img.title}" tabindex="0" data-index="${i}">
          <div class="gallery-caption">
            <h4>${img.title}</h4>
            <p>${img.description}</p>
            <div class="gallery-tags">
              ${(img.tags || []).map(tag => `<span class='tag'>${tag}</span>`).join(' ')}
            </div>
            <button class="view-details-btn" data-index="${i}">View Details</button>
          </div>
        `;
        item.querySelector('img').addEventListener('click', () => openModal(i, images));
        item.querySelector('img').addEventListener('keypress', (e) => { if (e.key === 'Enter') openModal(i, images); });
        item.querySelector('.view-details-btn').addEventListener('click', () => openModal(i, images));
        grid.appendChild(item);
      });
      gallery.appendChild(grid);
    });

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
}); 