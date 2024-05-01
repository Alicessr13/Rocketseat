import { Modal } from './modal.js' //precisa importar o nome da constante
import { AlertError } from './alert-error.js'
import {calculateIMC, notANumber} from './utils.js'

//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')




form.onsubmit = function(event) { /**função anonima */
/**função só vai ser executada ao clicar no button submit */
/**padrão de um form submit é recarregar a página ao clicar*/

    event.preventDefault() /**função que evita o padrão */

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){ //se algum for verdadeiro 
        AlertError.open()
        return; //return em uma função para a função
    }

    AlertError.close()

    const result = calculateIMC(weight,height)

    displayResultMessage(result)
    
}

function displayResultMessage(result){
    const message = `Seu imc é de ${result}`

    Modal.message.innerText = message

    //modalWrapper.classList.add('open')
    Modal.open()
}

//oninput = verifica se o input está sendo alterado, se estiver vai disparar o evento
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

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


