const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener('click', function() {
    const recipe = card.getAttribute('id')
    window.location.href = `/recipes/${recipe}`
    
    })
}




