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
    //console.log(number1+number2)
    let total = number1 + number2
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

let subject = 'create video' //subject fora de createThink não e o mesmo passado por parametro em createThink

function createThink(subject){
    subject = 'Study'//se tirar o subject passado por paramentro ele vai entender que é o subject de fora do createThink
    return subject
}

console.log(createThink(subject))
console.log(subject)


//tem hoisting (elevação)
sayMyName()

function sayMyName(){
    //console.log("Alice")
}

//não tem hoisting (não tem elevação)
//sayMyName2()

const sayMyName2 = function (){
    //console.log("Alice")
}

//arrow function
const sayMyName3 = (name) =>{
    console.log(name)
}

sayMyName3('Alice')

//callback function, função que está passando como parametro para outra função
function sayHerName(name){
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a função callback')
}

sayHerName(
    () =>{
        console.log('Estou em uma callback')
    }
)

//function constructor 

function Person(name){
    this.name = name //this dentro do construtor faz referencia ao objeto criado fora 
    this.walk = function(){
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk)
console.log(joao.walk)