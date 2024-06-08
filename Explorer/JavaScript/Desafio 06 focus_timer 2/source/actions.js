import state from "./state.js"

//nomes das funções são os nomes que estão no data-action no html

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    //toggle adiciona ou tira a classe renning (se tiver tira, se não tiver adiciona) 
    //pois o toggle returna true ou false
    //começa em false
}

const minutes = document.getElementById('temporizador')


export function set(){
    minutes.setAttribute('contenteditable', true)
    minutes.focus()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
}