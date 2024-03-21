//Expressions = qualquer linha de código que resolve alguma coisa
//pode ou não terminar com ;

let number = 1

//operadores: + operador binario (2 elementos), ++ operador unario (1 elemento), ? operador ternario (3 elementos)
console.log(number + 1) //soma
console.log(++number) //incremento
console.log(true ? 'alo' : 'nada')

// new: cria um novo objeto (left-hand-side expression)
let name = new String('Alice') 
name.surName = 'staphanie'
let age = new Number(23)
console.log(name, age)

//operadores unarios = typeof, delete
console.log(typeof 'Alice')
const person = {
    name: 'Alice',
    age: 23
}
delete person.age //deleta a propriedade dentro do objeto (se ela existir)
console.log(person)


//operadores aritméticos
//multiplicação * console.log(3.2 * 5.5)
//divisão / console.log(12 / 2)
//soma + console.log(3.2 + 5.5)
//subtração - console.log(3.2 - 5.5)

/*resto da divisão %
let remainder
remainder = 11 % 3
console.log(remainder)
*/
/*incremento ++, melhor utilizar antes do número
let increment = 0
increment++
console.log(increment)
*/
/*decremento --, melhor utilizar antes do número
let decrement = 0
decrement--
console.log(decrement)
*/
/*exponencial ** (elevado)
console.log(3 ** 3) //3 elevado a 3
 */

//grouping operator (), operador de agrupamento
//let total = 2 + 3 * 5; * e feito primeiro
let total = (2 + 3) * 5 // entre o parenteses é feito primeiro
console.log(total)

//operadores de comparação, compara valores e retorna boolean (true ou false)

let one = 1 // = recebe
let two = 2

// == igual a 
console.log(two == 1) //false
console.log(one == '1') //true

// != diferente de 
console.log(one != two) //true
console.log(one != 1) //false
console.log(one != "1") //false

// === estritamente igual a (compara valores e tipo do elemento)
console.log( one === "1") //false
console.log( one === 1) //true

// !== estritamente diferente de
console.log(two !== "2") //true
console.log(two !== 2) //false

// > maior que
console.log(one > two) //false

// >= maior igual a 
console.log(one >= 1) //true, não é maior mas é igual
console.log(two >= 1) //true, não é igual mas é maior

// < menor que 
console.log(one < two)//true

// <= menor igual a
console.log(one <= two) //true, one menor que two
console.log(one <= 1) //true, one igual a 1
console.log(one <= 0) //false

//operadores de atribuição
let x

x = 1 //atribuição, x recebe 1

x += 2 //soma os valores e atribui, igual a x = x + 2

x -= 1 //subtrai os valores e atribui, igual a x = x - 1

x *= 2 //multiplica os valores e atribui, igual a x = x * 2

x /= 2 //divide os valores e atribui, igual a x = x / 2

x %= 2 // igual a x = x % 2

x **= 2 // igual a x = x ** 2

console.log(x)

//operadores logicos, 2 valores quando verificados, resulta em true ou false

let pao = true
let queijo = true

//and &&, todas as confições precisam ser verdadeiras
console.log(pao && queijo) // true e true = true, true e false = false, false e false = false

// or ||, uma das condições precisa ser verdadeira
console.log(pao || queijo) //true e true = true, true e false = true, false e false = false

// not ! operador de negação
console.log(!pao) //negar o que é false = true, negar o que é true = false

//operador ternario 
//condição então valor 1 se não valor 2
//condition ? value1 : value2

const breakFast = pao && queijo ? 'cafe top' : 'cafe ruim'
console.log(breakFast)

//Operador de string
//comparação
console.log('a' == 'b')

//concatenação
console.log('a' + 'b' + 'c')
console.log('a' + 35) //tranformou o 35 em string e concatenou

/** FALSY   
 *  quando um valor é considerado falso em contextos onde um booleano é obrigatório (condicionais e loops)
 * 0 false -0 "" null undefined NaN
 */

console.log( 0 ? 'verdadeiro' : 'falso') //0 é considerado falsy

/** TRUTHY   
 *  quando um valor é considerado verdadeiro em contextos onde um booleano é obrigatório (condicionais e loops)
 * true {} [] 1 3.23 "0" "false" -1 Infinity -Infinity
 */

console.log( {} ? 'verdadeiro' : 'falso') //{} é considerado true

/* Precedencia de operadores
  
   ()
   ! ++ --
   * /
   + -
   < <= > >= 
   == != === !==
   &&
   ||
   ? :
   = += -= *=

 */
