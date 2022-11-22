const inputFilter = document.querySelector('#filter-input')
const cards = document.querySelectorAll('.card-box')
const h2Card = document.querySelectorAll('.h2-card')


inputFilter.addEventListener('input', FilterInput)

function FilterInput(){
    if(inputFilter.value !== ''){
        for(let card of cards){

            let title = card.querySelector('h2')
            title = title.textContent.toLocaleLowerCase()
            let FilterText = inputFilter.value.toLowerCase()
             console.log(title)
 

            if(!title.includes(FilterText)){
                card.style.display = 'none'
            }else{
                card.style.display = 'block'
            }

        }
    }else{
        for(let card of cards){
            card.style.display = 'block'
        }
    }
}