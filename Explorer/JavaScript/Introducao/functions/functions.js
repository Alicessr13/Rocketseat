//objetivo da função: agrupamento de código, reutilização de código, dar significado a um bloco de código

    //declaração da função (function statement)
    function createPhrases(){
        console.log('Frase 1')
        console.log('Frase 2')
        console.log('Frase 3')
    }

    //executar a função (execute, run, call, invoke)
    createPhrases()

    console.log('Fim do programa')


//pode declarar funções dentro de variaveis 

//função anonima, function anonymous, function expression
const sum = function(number1, number2){ //parametros (parameters)
    total = number1 + number2
    //quando a função não tem return ela retorna undefined
    return total
}

sum(2,3) //argumentos (arguments)
sum(56,54.32)

let num1 = 34
let num2 = 25
sum(num1,num2)

console.log(`O número 1 é ${num1}`)
console.log(`O número 2 é ${num2}`)
console.log(`A soma é ${sum(num1, num2)}`)