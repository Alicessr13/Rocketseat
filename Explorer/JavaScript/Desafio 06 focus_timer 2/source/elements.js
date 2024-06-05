export const controls = document.getElementById('controls')

export function registerControls(){
    controls.addEventListener('click',(event) => {
        console.log('clicou em controls')
    })
}