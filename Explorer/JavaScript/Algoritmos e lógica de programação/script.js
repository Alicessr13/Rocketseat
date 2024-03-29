/* PERGUNTA O NOME E RETORNA O NOME
let nome = prompt("Qual o seu nome?") //abre uma caixa com um campo de pergunta

//sempre que algo vai mudar é necessário uma variavel
//nome recebe o que for escrito em prompt

alert("Ola "+nome) //função que abre uma caixa no navegador
*/

/*SOMA 2 NUMEROS

let num1 = prompt('Primeiro número: ')
let num2 = prompt('Segundo número: ')

let result = (Number(num1) + Number(num2))/2

alert("Resultado final: "+result);
//alert("Resultado final: "+ ( (Number(num1) + Number(num2))/2 ) )
*/

/* Solicita 2 numeros e faz os calculos matematicos basicos

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
*/

/* MEDIA DO ALUNO
let nome = prompt('Qual o nome do(a) aluno(a)? ')

let nota1 = prompt('Primeira nota: ')
let nota2 = prompt('Segunda nota: ')
let nota3 = prompt('Terciera nota: ')

nota1 = Number(nota1)
nota2 = Number(nota2)
nota3 = Number(nota3)

function media(nome,num1, num2, num3){
    let media = (num1+num2+num3)/3

    media = media.toFixed(2)

    if(media>=6){
        return alert('Parabens '+nome+', nota '+media+' passou de semestre! ')
    }else{
        return alert('Não passou '+nome+', nota '+media+' precisa estudar para a recuperação! ')
    }
}

media(nome, nota1, nota2,nota3)
*/

/* LISTA DE COMPRAS
let items = []

for(let item = 0; item < 10; item ++){

    let itemName = prompt('Digite o item '+ (item + 1))

    items[item] = itemName
}

alert(items)
*/

/*JOGO DA ADIVINHAÇÃO
let result = prompt("Consegue adivinhar o número que eu estou pensando? Está entre 0 e 10")

const ramdomNumber= Math.round(Math.random() * 10) //Math.random = gera um número aleatório

//Math.ceil = arredonda para cima, Math.floor = arredonda para baixo, Math.round = arredonda para o mais proximo

let xAttemps = 1;

while(Number(result) != ramdomNumber){
    result = prompt('Erro, tente novamente!')
    xAttemps++
}

alert(`Parabéns! O número que eu pensei foi ${ramdomNumber}! Você adivinhou o número em ${xAttemps} tentativas`)
*/
let option

let items = [];

while (option != 3) {
   option = Number(
    prompt(`
    Ola, digite a opção desejada

    1. Cadastrar um item na lista
    2. Mostrar o item na lista
    3. Sair do programa

    `)
  )

  switch(option){
    case 1:
      let item = prompt("Digite o nome do item: ");
      items.push(item) //adiciona o item ao final da lista
      break

    case 2: 
    	if (items.length == 0) {
    		alert("Não existem itens cadastrados");
      	} 
      	else {
      			alert(items);
      		}
	  	break

	case 3:
		alert('Tchau')
		break

	default: 
		alert('Opção invalida')
		break
  }

}
