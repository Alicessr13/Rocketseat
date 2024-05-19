import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js"
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls(){
    controls.addEventListener('click', (event)=>{//obsrva os clicks dos elementos do controle (controls que está em elements.js)
        //console.log(event.target)//event.target = evento alvo, vai apresentar o alvo quando clicar no elemento

        const action = event.target.dataset.action
        //dataset acessa o data-action no html, vai diferenciar os click pelo data-action="" conigurado no html
        if( typeof actions[action]  != "function"){ //se o data-action capturar algo que não seja uma função existente (undefined, erro) para a função
            return // quando a função encontra o return para de funcionar
        }

        //se não entrar no if entra aqui
        //console.log(action)
        //action recebe o nome do click (dataset.action) que é o mesmo nome da função em actions, por isso actions executa a função correta
        actions[action]()
    })
}

export function setMinutes(){
    //quando verificar que está em focus executa a função
    el.minutes.addEventListener('focus', () =>{
        el.minutes.textContent = ""
    })


    //ao colocar algum valor dentro das duas barras ele se torna uma expressão regular
    //a expressão regular permite observar determinado cardcter ou conjunto de caracteres, como se ela fosse lendo 1 a 1
    //dentro da expressao regular e como se fosse uma variavel
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    //event.key e a tecla que esta sendo apertada, ele testa se a tecla é o valor dentro da expressão variavel 
    //se sim retorna true e permite escrever, se não ele não deixa escrever
    // com o \d ele só vai deixar escrever números (se for número retorna true)

    //blur contrario do focus, desfocado
}

    el.minutes.addEventListener('blur', (event)=>{
        let time = event.currentTarget.textContent //pega o texto do el.minutes

        time = time > 60 ? 60 : time //se time for maior que 60 deixa como 60 se não deixa o time mesmo

        state.minutes = time
        state.seconds = 0

        updateDisplay() //passa a função updateDisplay
        el.minutes.removeAttribute('contenteditable')//não vai ter mais a opção de editar
    }) 