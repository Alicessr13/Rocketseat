import { Modal } from './modal.js' //precisa importar o nome da constante

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

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError){
        console.log('mostrar o alerta de erro')
        return; //return em uma função para a função
    }

    const result = IMC(weight,height)

    const message = `Seu imc é de ${result}`

    Modal.message.innerText = message

    //modalWrapper.classList.add('open')
    Modal.open()
}




function IMC(weight, height){
    return (weight / ( (height / 100) **2) ).toFixed(2)
}

function notNumber(value){
    return isNaN(value) || value == ""
    //is not a number, se for um número é falso (se não colocar nada fica falso também), se for outra coisa é verdadeiro
    //por isso o value == "" se for vazio é verdadeiro
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


