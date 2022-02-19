import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

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

// console.log("galleryEl", galleryEl);

galleryEl.addEventListener('click', onImageClick)
// console.log("galleryEl", galleryEl.classList);

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

    imageEl.dataset.source;
    console.log(imageEl.dataset.source);
    
};


