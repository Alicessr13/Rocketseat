let num1 = prompt('Digite o primeiro número:  ')

let num2 = prompt('Digite o segundo número: ')

num1 = Number(num1)
num2 = Number(num2)

alert(`A soma dos dois números é: ${num1+num2}`)

alert(`A subtração dos dois números é: ${num1-num2}`)

alert(`A multiplicação dos dois números é: ${num1*num2}`)

alert(`A divisão dos dois números é: ${num1/num2}`)

alert(`O resto da divisão dos dois números é: ${num1%num2}`)

if((num1+num2) % 2 == 0){
    alert(`A soma dos dois números é par`)
}else{
    alert(`A soma dos dois números é impar`)
}

if(num1==num2){
    alert(`Os números inseridos são iguais`)
}else{
    alert(`Os números inseridos são diferentes`)
}