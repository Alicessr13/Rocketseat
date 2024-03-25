/*
let nome = prompt("Qual o seu nome?") //abre uma caixa com um campo de pergunta

//sempre que algo vai mudar é necessário uma variavel
//nome recebe o que for escrito em prompt

alert("Ola "+nome) //função que abre uma caixa no navegador
*/

/*
let num1 = prompt('Primeiro número: ')
let num2 = prompt('Segundo número: ')

let result = (Number(num1) + Number(num2))/2

alert("Resultado final: "+result);
//alert("Resultado final: "+ ( (Number(num1) + Number(num2))/2 ) )
*/

let num1 = prompt('Digite o primeiro número: ')
let num2 = prompt('Digite o segundo número: ')

num1 = Number(num1)//leitura <- le o num1 transforma em number e atribui a num1 novamente
num2 = Number(num2)

const sum = num1 + num2
const sub = num1 - num2
const multi = num1 * num2
const div = num1 /num2
const restDiv = num1 % num2

alert('Soma: '+sum);
alert('Subtração: '+sub);
alert('Multiplicação: '+multi);
alert('Divisão: '+div);
alert('Resto divisão: '+restDiv);