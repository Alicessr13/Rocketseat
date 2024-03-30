let alunos = [
    {
        nome: 'João',
        nota1: 5,
        nota2: 4
    },
    {
        nome: 'Letícia',
        nota1: 7,
        nota2: 8
    },
    {
        nome: 'Diego',
        nota1: 9,
        nota2: 8
    },
    {
        nome: 'Julia',
        nota1: 5,
        nota2: 6
    }
]

function media(nota1,nota2){
    return (nota1+nota2)/2

}

function printMedia(aluno){
    let mediaNota = media(aluno.nota1,aluno.nota2)

    if(mediaNota >= 7){
        return `
        A média do(a) aluno(a) ${aluno.nome} é: ${mediaNota}
        Parabéns, ${aluno.nome}! Você foi aprovado!
        `
    }else{
        return `
        A média do(a) aluno(a) ${aluno.nome} é: ${mediaNota}
        Não foi dessa vez, ${aluno.nome}! Tente novamente!
        `
    }
}

for(let aluno of alunos){
    alert(printMedia(aluno))
}
