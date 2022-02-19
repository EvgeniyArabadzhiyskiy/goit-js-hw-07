import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMakup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);


function createImgCardsMakup(galleryImages) {
    return galleryImages.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`
    }).join('');
};

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();

    // console.log(event.currentTarget.nodeName);
    // console.log(event.target.nodeName);
    // if (event.target.nodeName !== 'IMG') {
    //     return
    // }
    // console.log(imageEl.dataset.source);

    const imageEl = event.target;
    const isChange = imageEl.classList.contains('gallery__image');

    if (!isChange) {
        return
    };

    console.log(imageEl.dataset.source);


    const instance = basicLightbox.create(`
        <img src="${imageEl.dataset.source}">`
    );

    instance.show();

};
