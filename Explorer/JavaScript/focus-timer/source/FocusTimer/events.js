import { controls } from "./elements.js";
import * as actions from "./actions.js"

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