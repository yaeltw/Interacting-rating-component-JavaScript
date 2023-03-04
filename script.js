let numbersContainer = document.querySelector(".numbers-container");
let thankYouSpan = document.querySelector(".number-selected")
let submit = document.querySelector(".submit")
let containerHowWeDo = document.querySelector(".container-how")
let containerThankYou = document.querySelector(".thankyou-container")
let getBackButton = document.querySelector('.getback_button')

numbersContainer.addEventListener('click', e=>{
    let numero = e.target.innerText;
    thankYouSpan.innerText = numero;
    if(numero > 0 || numero <= 5){
        submit.addEventListener('click', e=>{
            containerHowWeDo.style.display = 'none'
            containerThankYou.style.display = 'flex'
        })
        }
        getBackButton.addEventListener('click', e=> {
            containerHowWeDo.style.display = 'block'
            containerThankYou.style.display = 'none'
       })
})




