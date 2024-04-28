//variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) { /**função anonima */
/**função só vai ser executada ao clicar no button submit */
/**padrão de um form submit é recarregar a página ao clicar*/

    event.preventDefault() /**função que evita o padrão */

    const weight = inputWeight.value
    const height = inputHeight.value
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


