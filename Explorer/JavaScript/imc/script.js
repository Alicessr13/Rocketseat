//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),

    message: document.querySelector('.modal .title span'),

    btnClose: document.querySelector('.modal button.close'),

    open: function(){
        Modal.wrapper.classList.add('open')
    },
    close(){
       Modal.wrapper.classList.remove('open')
    }
}


form.onsubmit = function(event) { /**função anonima */
/**função só vai ser executada ao clicar no button submit */
/**padrão de um form submit é recarregar a página ao clicar*/

    event.preventDefault() /**função que evita o padrão */

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight,height)

    const message = `Seu imc é de ${result}`

    Modal.message.innerText = message

    //modalWrapper.classList.add('open')
    Modal.open()
}

modal.btnClose.onclick = () => {
    //modalWrapper.classList.remove('open')
    Modal.close()
}


function IMC(weight, height){
    return (weight / ( (height / 100) **2) ).toFixed(2)
}

/**
 * 
 * outras formas de escrever função
 * 
form.onsubmit = () => { arrow function

}

ou

form.onsubmit = handleSubmit

function handleSubmit(){ função com nome

}

 */


