const botao = document.querySelector('#botao') 
//coloca na variavel botao, o elemento que tiver o id botao no html

//ouvidor de eventos, fica escutando o botao quando o usuário executar uma ação eele executa uma ação
//quando o usuário clicar, executa a função
botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight, behavior: "smooth"}) //rola a tela a partir do topo a quantidade de pixel  que tiver na tela do usuário
    //behavior: "smooth" rola a tela mais suavemente
}) 