const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
const mesage = document.querySelector(".mesage")

function tryClick(e){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

let i = 0

function alterMesage(e){
    mesage.innerHTML = mensagens[i].replace(/\n/g, '<br>');

    i = (i+1) % mensagens.length
}

function multiFunction(e){
    tryClick()
    alterMesage()
}

btnOpen.addEventListener('click', multiFunction)
btnReset.addEventListener('click', tryClick)

const mensagens = [
    `Boy, tell me, can you take my breath away?
    Cruisin' down a heart-shaped highway`,
    `Got you swervin' lane-to-lane, don't hit the brakes
    'Cause I'm feelin' so safe`,
    `I'll be your baby, on a Sunday
    Oh, why don't we get out of town?`
]

