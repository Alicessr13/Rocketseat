//variaveis e tipos de dados

//declaração de variável
var name

//atribuição de valores
name = "Alice"

//que tipo de dado foi colocado na variável
console.log(typeof name)

//declaração conjunta
let age, isHuman

age = 20
isHuman = true

//multiplos argumentos na função
console.log(name, age, isHuman)

//escrita de texto + variaveis, + = concatenação de string na variavel
console.log('A ' + name + ' tem ' + age + ' anos')

//interpolando valores
console.log(`A ${name} tem ${age} anos`)

//Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

//Array

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'cat',
        age: 3
    }
]

//acessar valores dentro do array, acessa pela posição 
console.log(animals[2].name)

//tamanho do array, inicia em 0
console.log(animals.length)


//Exercicios

let weight

console.log(typeof weight)

let name2, age2, stars, isSubscribed

name3 = 'Alice'
age3 = 20
stars = 4.8
isSubscribed = true

let student = {
    name: 'Alice',
    age: 20,
    stars: 4.8,
    isSubscribed: true,
    weight: 50.54 
}

console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

let students =[]

students = [
    student
]

console.log(students[0])

const John ={
    name: 'John',
    age: 30,
    isSubscribed: false,
    weight: 80.32
}

students[1] = John

console.log(students[1])