import { controls } from "./elements.js";

export function registerControls(){
    controls.addEventListener('click', (event)=>{//obsrva os clicks dos elementos do controle
        console.log(event.target)//event.target = evento alvo, vai apresentar o alvo quando clicar no elemento
    })
}