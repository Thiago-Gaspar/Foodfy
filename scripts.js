const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.prato1')


for(let card of cards) {
    card.addEventListener('click', function() {
    modalOverlay.classList.add('active')
    const recepiesClass = card.getAttribute('id')
    modalOverlay.querySelector('iframe').src = `${recepiesClass}`
    
    })
}

document.querySelector('.close')
modalOverlay.addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})

