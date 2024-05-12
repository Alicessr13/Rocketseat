import state from "./state.js"

import * as el from './elements.js'

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minute
    // se minutes depois do igual for null pega o state.minutes e coloca no lugar

    seconds =seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    //padStart = preencha o começo, 2 caracteres e quando tiver só um caracter coloca o zero
    el.seconds.textContent = String(seconds).padStart(2, "0")
}