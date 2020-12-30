const descriptions = document.querySelectorAll('.description');



    for (let description of descriptions) {
                const button = description.querySelector('span')
                button.addEventListener('click', function() {
            if (button.innerHTML === 'ESCONDER') {
               description.querySelector('.content').classList.add('hidden') 
               button.innerHTML = 'MOSTRAR'
            }

            else if (button.innerHTML === 'MOSTRAR') {
                description.querySelector('.content').classList.remove('hidden')
                button.innerHTML = 'ESCONDER'
            }
        
          
        })
    }
 