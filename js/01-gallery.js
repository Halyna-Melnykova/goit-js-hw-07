import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Розмітка

const galleryListEl = document.querySelector('.gallery');
const galleryArr = galleryItems.map(({ preview, original, description } = {}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </div>`;
}).join('');

galleryListEl.insertAdjacentHTML('afterbegin', galleryArr);

// Делегування

galleryListEl.addEventListener('click', selectImage);

function selectImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    // console.log(event.target.dataset.source);
    // console.log(event.target);
    
    // basicLightbox 

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show();
}













