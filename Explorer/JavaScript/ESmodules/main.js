//import './utils.js' // nessa linha ele importa e já executa o arquivo

import qualquerNome from "./utils.js"; //importa com qualquer nome
console.log(qualquerNome) //imprime o que foi exportado

import { today } from "./utils.js";
console.log(today)

import { double } from "./utils.js";
console.log(double(3))

//import{today, double} from "./utils.js" importa mais de um

import funcaoPadrao, {date, greeting} from './utils.js'

console.log(date)

console.log(greeting('Alice'))

funcaoPadrao('Alice')

import {sum as soma} from './utils.js' //importa sum com o nome de soma
console.log(soma(3,4))


//export const sum = (a, b) => a + b
//export const multiply = (a, b) => a * b
//export const subtract = (a, b) => a - b
//export const divide = (a, b) => a / b

// ou
// export { sum, multiply, subtract, divide }
