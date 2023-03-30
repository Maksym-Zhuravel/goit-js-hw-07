import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const ulItem = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
ulItem.insertAdjacentHTML("beforeend", galleryMarkup)

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}"></a></li>`).join("");
}

ulItem.addEventListener('click', event => {
    event.preventDefault()
})




// ulItem.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target.tagName !== 'IMG') {
//     return;
//   }
//   onCreateModal(event.target.dataset.source);
// });

// function onCreateModal(original) {
//   const instance = basicLightbox.create(`<div class="modal"><img src="${original}"/></div>`);
//   instance.show();

//   window.addEventListener('keydown', onEscCloseModal);
//   function onEscCloseModal(event) {
//     if (event.code === 'Escape') {
//       instance.close();
//     }
//   }

//   const modal = document.querySelector('.modal');
//   modal.addEventListener('click', onClickCloseModal);
//   function onClickCloseModal() {
//     instance.close();
//   }
// }