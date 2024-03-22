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
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

//try...catch
try{
    sayMyName()
}catch(e){
    console.log(e)
}
