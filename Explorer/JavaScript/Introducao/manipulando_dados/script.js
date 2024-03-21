//type conversion vs type coersion (alteração de um tipo de dado para outro tipo)

console.log('9' + 5)//type coersion, converteu automaticamente o 5 para string

console.log(Number('9') + 5) //type conversion, conversão manual do 9 para number

//transforma string em numero
let string = '123'
console.log(Number(string))

//transforma numero em string
let number = 321
console.log(String(number))

//quantos caracteres tem uma palavra e quantos digitos tem um número
let word = "javascript"
console.log(word.length)

let num = 1234
console.log(String(num).length)

//transformar um numero quebrado com 2 casas decimais e trocar ponto por vírgula
let num2 = 3924030.332524
console.log(num2.toFixed(2).replace(".",",")) 
// toFixed altera para casas decimais o numero e o numero de casas
// replace altera, o primeiro e o que vai ser alterado, o segundo e pelo que vai ser alterado

//letras minusculas em maisculas e vice-versa
let texto = "Texto"
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())

//separa um texto que contem espaços, em um novo array onde cada texto é um posição do array
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")//split separa e recebe como argumento o que vai ser usado para separar
console.log(myArray)
let phrase_ = myArray.join("_") //junta e recebe como argumento o que ficara entre o que foi agrupado
console.log(phrase_)

//verificar se o texto contem uma palavra
let phrase2 = "Eu quero viver!"
console.log(phrase.includes('amor')) //encontra a palarvra no texto, é case sensitive

//array com construtor
let myArray2 = new Array('a','b','c')
console.log(myArray2)

//contar elementos do array
console.log(["a","b","c"].length)

//transformar cadeia de caracteres em elementos de um array
let word2 = "manipulação"
console.log(Array.from(word2))

//manipulando arrays
let techs = ["html","css","js"]

//adicionar um item no fim
techs.push("nodejs")

//adicionar no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos
console.log(techs.slice(1,3))//primeiro argumento posição que inicia, segundo argumento posição final do array

//remover 1 ou mais items em qualquer posição
techs.splice(1, 2)//primeiro argumento o index do array, segundo argumento quantos elementos eu quero tirar

//encontrar a posição de um elemento do array
let index = techs.indexOf("html")
techs.splice(index, 1)

console.log(index)