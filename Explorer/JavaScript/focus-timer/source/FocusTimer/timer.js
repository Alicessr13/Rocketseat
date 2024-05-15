import state from "./state.js"

import * as el from './elements.js'

import { reset } from "./actions.js"

export function countdown(){
    if(!state.isRunning){ //se running for falso retorna
        //quando clica no botão ativa a função toggleRunning em actions, 
        //que ativa o running ou tira se clicar de novo
        //se clicar uma vez é verdadeiro e executa a função countown, e se clicar de novo entra no return e para(pq a toggleRunning tirou o running)
        return
    }

    let minutes = Number(el.minutes.textContent) //pega os minutos de elements e transforma em números
    let seconds = Number(el.seconds.textContent) //pega os segundos de elements e transforma em números

    seconds-- //quando clica no button ele ja tira um segundo

    if(seconds < 0){ //quando o segundo fica menor que zero volta para 59
        seconds = 59
        minutes--
    }
    
    if(minutes < 0){
        reset() //pega o reset de action, que volta o button como estava antes por tirar a classe running
        return
    }

    updateDisplay(minutes,seconds)

    //set timeout = função que espera executar uma função depois de determinado tempo(em milissegundos)
    setTimeout(() => countdown(), 1000 ) //recursão, quando uma função chama ela mesma (callback)
    //vai ficar rodando até parar, e essa função para quando o estado mudar (state)
    //sempre que criar um recursão tem que pensar como ela vai parar
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minute
    // se minutes depois do igual for null pega o state.minutes e coloca no lugar

    seconds =seconds ?? state.seconds
    // se seconds depois do igual for null pega o state.seconds e coloca no lugar

    
    //Atualiza o valor dos números na tela
    el.minutes.textContent = String(minutes).padStart(2, "0")
    //padStart = preencha o começo, 2 caracteres e quando tiver só um caracter coloca o zero
    el.seconds.textContent = String(seconds).padStart(2, "0")
}