import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const ulItem = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
const modal = document.querySelector('.modal')
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

  if (event.target.nodeName !== 'IMG') {
    return
  }
  
  onOpenModal(event.target.dataset.source)
})

function onOpenModal(original) {
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${original}"/>
    </div>
`)

  instance.show()
  window.addEventListener('keydown', onEscKeyPress)
  function onEscKeyPress(event) {
  if (event.code === "Escape"){
    instance.close()
  }
}
}
