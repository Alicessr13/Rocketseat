//if...else

let temperatura = 37.4

if(temperatura >= 37.5){ //aceita truty ou falsy
    console.log('Febre alta')
}else if(temperatura <37.5 && temperatura >= 37){ //se entra na primeira condição o resto e desconsiderado
    console.log('Febre moderada')
}else{
    console.log('Saudavel')
}

//switch

let expression ='a'

switch(expression){
    case 'a':
        console.log('a')
        break
    
    case 'b':
        console.log('b')
        break
    
    default://não compriu com os outros casos acima entra nessa
        console.log('default')
        break
}

function calculate(num1,operator,num2){
    let result

    switch (operator){
        case '+':
            result = num1 + num2
            break

        case '-':
            result = num1 - num2
            break
        
        case '*':
            result = num1 * num2
            break
        
        case '/':
            result = num1 / num2
            break

        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))

//throw

function sayMyName(name = ''){
    if(name===''){
        throw 'Nome é obrigatório' //throw = dispara,como o nome é vazio cai no throw, para a execução da função
    }

    console.log('depois do erro')
}

//try...catch
try{ //tenta executar o erro e vai pro catch
    sayMyName()
}catch(e){ //catch pega o throw atravez do e
    console.log(e) //imprime o throw
}

console.log('após a função')
//se executar a função vazia fora do try catch resulta em erro uncaught
// que para a aplicação inteira ao invez de somente a função

//for, estrutura de repetição
for(let i = 0; i < 10; i++){//declara a variavel, variavel é menor que a condição? se sim entra no bloco de código e executa
    //acabou o bloco ele vai incrementar a varivel, continua menor que a condição? se sim executa o bloco de novo
    //assim até a variavel ser menor que a condição
    console.log(i)
}

for(let i = 10; i > 0; i--){

    if(i===5){
        //break, para a execução
        continue //pula a execução do momento
    }

    console.log(i)
    
}


//while, repetição, usa-se while quando não se sabe o momento que vai parar

let i = 0
while(true){
    console.log(i)
    i++
}

//for of
let name = 'Alice'
let names = ['João','Paulo','Pedro']

for(let char of name){
    console.log(char)
}

for(let name of names){
    console.log(name)
}

//for in
let person ={
    name: 'john',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
}