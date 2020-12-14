const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')



for(let card of cards) {
    card.addEventListener('click', function() {
    let img = card.querySelector('img').src
    let h1 = card.querySelector('h1').innerHTML
    let p = card.querySelector('p').innerHTML
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('.card_image img').src = img
    modalOverlay.querySelector('.card_title h1').innerHTML = h1
    modalOverlay.querySelector('.card_author p').innerHTML = p
    

    })
}

const close = document.querySelector('.close')
close.addEventListener('click', function () {
    modalOverlay.classList.remove('active')
})



