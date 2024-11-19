const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')
const galleryContent = galleryImageModal.querySelector('.gallery-content')
const imgs = document.querySelectorAll('.gallery img')

galleryBtClose.addEventListener('click', () => {
    galleryImageModal.close()
    galleryContent.innerHTML = ''
})

imgs.forEach(img => {
    img.addEventListener('click', () => {
        galleryContent.innerHTML = `<img src="${img.src}">`
        galleryImageModal.showModal()
    })
})