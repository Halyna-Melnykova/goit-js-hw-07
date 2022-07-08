import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// Розмітка

const galleryListEl = document.querySelector(".gallery");
const galleryArr = galleryItems
  .map(({ preview, original, description } = {}) => {
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
  })
  .join("");

galleryListEl.insertAdjacentHTML("afterbegin", galleryArr);

// Делегування

let instance

galleryListEl.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // console.log(event.target.dataset.source);
  // console.log(event.target);

  // basicLightbox (Заміна src)

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  // console.log(instance);
}

// Закриття по Esc

const onEscBtnPush = event => {
  if (event.code !== 'Escape') {
    return;
  }

  instance.close();
  // instance.close(() => console.log('lightbox not visible anymore'));
  window.removeEventListener('keydown', onEscBtnPush);
};

window.addEventListener('keydown', onEscBtnPush);