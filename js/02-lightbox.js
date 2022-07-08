import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");
const galleryArr = galleryItems
  .map(({ preview, original, description } = {}) => {
    return `<li class="gallery__item">
    <a href=${original}>
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    </li>`;
  })
  .join("");

galleryListEl.insertAdjacentHTML("afterbegin", galleryArr);

// simplelightbox

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });