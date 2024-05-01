export function calculateIMC(weight, height){
    return (weight / ( (height / 100) **2) ).toFixed(2)
}

export function notANumber(value){
    return isNaN(value) || value == ""
    //is not a number, se for um número é falso (se não colocar nada fica falso também), se for outra coisa é verdadeiro
    //por isso o value == "" se for vazio é verdadeiro
}