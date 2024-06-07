

import * as actions from "./actions.js"

export const controls = document.getElementById('controls')

export function registerControls(){
    controls.addEventListener('click',(event) => {
        ////obsrva os clicks dos elementos do controle (controls)
        
        console.log('clicou em controls')

        const action = event.target.dataset.action
        //essa linha de código está obtendo o valor do atributo data-action do elemento que disparou o evento e o armazenando na constante action.
        //event.target = evento alvo

        if( typeof actions[action]  != "function"){ 
            //se o data-action capturar algo que não seja uma função existente (undefined, erro) para a função
            return 
        }
       
        actions[action]()
         //action recebe o nome do click (dataset.action) que é o mesmo nome da função em actions, por isso actions executa a função correta
    })
}

