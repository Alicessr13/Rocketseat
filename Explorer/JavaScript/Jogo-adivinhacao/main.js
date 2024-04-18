const screen1 = document.querySelector(".screen1") //variavel que recebe seleciona a classe
const screen2 = document.querySelector(".screen2") //variavel que recebe seleciona a classe

const ramdomNumber = Math.round(Math.random()*10) //numero aleatorio

let xAttempts = 1 //variavel de controle de tentativas

//função callback(chamar de volta)
function handleTryClick(event){ //nome handleclick
    event.preventDefault() //event = objeto com todos os dados do evento
    //preventDefault() = não faça o padrão (que no caso seria enviar o fomulario)
    //ou seja, ao executar a função não envie o fomulario
    //console.log("Cheguei aqui")

    const inputNumber = document.querySelector("#inputNumber")
    //console.log(inputNumber.value)

    if(Number(inputNumber.value) == ramdomNumber){ //se o inputNumber(transformado em numero) for igual a ramdomNumber
        document.querySelector(".screen1").classList.add("hide") //seleciona a classe screen1 e adiciona a classe hide
        document.querySelector(".screen2").classList.remove("hide") //seleciona a classe screen2 e remove a classe hide

        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!` 
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!` 
        //seleciona o h2 dento de screen2 e altera o texto de dentro
    }

    inputNumber.value = "  " //limpa o campo

    xAttempts++; //aumenta conforme os cliques no botão tentar
    //console.log(xAttempts)
}

//eventos
const btnTry = document.querySelector("#btnTry")

const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick) //adiciona o evento e o ouvidor(cara que vai reagir)
//click = evento, handleTryClick = cara que vai reagir

btnReset.addEventListener('click', function(){ //função anonima
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    xAttempts = 1
})