import * as actions from "./actions.js"
import state from "./state.js"

export const controls = document.getElementById('controls')

export function registerControls() {
    controls.addEventListener('click', (event) => {
        ////obsrva os clicks dos elementos do controle (controls)

        console.log('clicou em controls')

        const action = event.target.dataset.action
        //essa linha de código está obtendo o valor do atributo data-action do elemento que disparou o evento e o armazenando na constante action.
        //event.target = evento alvo

        if (typeof actions[action] != "function") {
            //se o data-action capturar algo que não seja uma função existente (undefined, erro) para a função
            return
        }

        actions[action]()
        //action recebe o nome do click (dataset.action) que é o mesmo nome da função em actions, por isso actions executa a função correta
    })
}

export const minutes = document.getElementById('minutes')

export const seconds = document.getElementById('seconds')

export function countdown() {

    clearTimeout(state.countdownId)

    if (!state.isRunning) {
        //se running for falso para a função
        return
    }

    let minute = Number(minutes.textContent)
    let second = Number(seconds.textContent)
    //pega os segundos e minutos do html e transforma em números

    seconds-- //quando clica no button ele ja tira um segundo
    //e vai diminuindo conforme a função fica executando

    if (seconds < 0) {
        //quando o segundo fica menor que zero volta para 59
        seconds = 59
        minutes--
        //e diminui 1 minuto
    }

    if (minutes < 0) {
        reset()
        //pega o reset de action, que volta o button como estava antes por tirar a classe running
        return
        //para a função
    }

    updateDisplay(minute,second)

    state.countdownId = setTimeout(() => countdown(), 1000 )

}

export function updateDisplay(minute, second) {
    minute = minutes ?? state.minutes
    second = seconds ?? state.seconds
    //se depois do = for null pega state.minutes e coloca no lugar

    minutes.textContent = String(minute).padStart(2, "0")
    seconds.textContent = String(second).padStart(2, "0")
    //Atualiza o valor dos números na tela
    //padStart = preencha o começo, 2 caracteres e quando tiver só um caracter coloca o zero
}

export function setTime() {
    minutes.addEventListener('focus', () => {
        minutes.textContent = ""
    })

    seconds.addEventListener('focus', () => {
        seconds.textContent = ""
    })

    minutes.onkeypress = (event) => /\d/.test(event.key)
    //O evento keypress é disparado quando uma tecla é pressionada enquanto o elemento tem o foco.
    //Isso é uma função de seta (arrow function) que recebe um argumento chamado event. 
    //Este argumento é um objeto de evento que contém informações sobre o evento que foi disparado.
    ///\d/: É uma expressão regular que corresponde a qualquer dígito (0-9).
    //.test(event.key): O método test da expressão regular é usado para testar se a tecla pressionada (representada por event.key) é um dígito.
    //true se a tecla pressionada for um dígito (0-9) e false caso contrário.

    seconds.onkeypress = (event) => /\d/.test(event.key)

    // blur contrario do focus, desfocado
    minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        //pega o texto do minutes

        time = time > 60 ? 60 : time
        //se time for maior que 60 deixa como 60 se não deixa o time mesmo

        state.minutes = time
        //recebe o valor capturado 

        updateDisplay() //passa a função updateDisplay
        minutes.removeAttribute('contenteditable')//não vai ter mais a opção de editar
    })

    seconds.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        //pega o texto do minutes

        time = time > 60 ? 60 : time
        //se time for maior que 60 deixa como 60 se não deixa o time mesmo

        state.seconds = time
        //recebe o valor capturado 

        updateDisplay() //passa a função updateDisplay
        seconds.removeAttribute('contenteditable')//não vai ter mais a opção de editar
    })
}