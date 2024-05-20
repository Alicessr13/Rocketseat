import state from "./state.js"

import * as timer from './timer.js'

import * as el from './elements.js'

import * as sounds from './sound.js'

export function toggleRunning(){ //nomes das funções são os nomes que estão no data-action no html
    //state.isRunning = !state.isRunning //toda vez que clicar ele vai receber o nãoisRunning ou seja se for true rebece o false e se for false recebe o true
    state.isRunning = document.documentElement.classList.toggle('running') //clase running  no style.css
    //toggle adiciona ou tira a classe renning (se tiver tira, se não tiver adiciona) 
    //e também returna o true ou false (se tirou vai retornar falso, se colocou vai retornar true) 

    timer.countdown();
    
    sounds.buttonPressAudio.play()
}

export function reset(){ //tira a classe running e volta como se tivesse no inicio
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function set(){
    //console.log('toggleRunning function')
    el.minutes.setAttribute('contenteditable', true) //atributo contenteditable quando fizer o click
    el.minutes.focus() //quando clicar vai aplicar o foco
}


export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()

}