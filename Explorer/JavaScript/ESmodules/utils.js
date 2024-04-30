//import e export simples
//Podemos importar qualquer arquivo e ele será executado imediatamente, como uma função é executada.

const message = "mensagem" // essa variável fica isolada nesse arquivo, 
//e não consigo usar ela em outro lugar
//alert(message) //o alerta vai aparecer mas não consigo utilizar a variavel mensagem

//export default message //exportando a mensagem para ser acessivel em outro arquivo, default pode ser qualquer nome no import

//somente tem um default por arquivo

//para outras variaveis ou função precisa ser o mesmo nome
export const today = Date.now();

const double = number => number * 2;
export {double}

//export {today, double} exporta mais de 1

const date = new Date()

const greeting = name => `Hello ${name}`

export default function (argument) {
    console.log(date, greeting(argument));
}

export {date, greeting}


export function sum(a, b){
    return a + b
}

//import * as calculator from './utils.js' //importa todos os named exports e dar um nome padrão.
//console.log(calculator.divide(49,4))

