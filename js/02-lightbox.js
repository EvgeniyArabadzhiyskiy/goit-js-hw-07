import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMakup(galleryItems);
galleryEl.innerHTML = cardsMarkup;


function createImgCardsMakup(galleryImages) {
    return galleryImages.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" 
            alt="${description}" />
            </a>`;
    }).join('');
};


var lightbox = new SimpleLightbox('.gallery a', {'captionsData': 'alt','captionDelay': 250 });


