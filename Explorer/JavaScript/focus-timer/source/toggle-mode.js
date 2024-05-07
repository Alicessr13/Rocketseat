let darkMode = true
const buttonToggle = document.getElementById('toggle-mode') 

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    //toggle se tiver o light tira, se não tiver adiciona


    const mode = darkMode ? 'light' : 'dark'
    //mode = se tiver o darkMode aplicar o light, se não aplica o dark

    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`
    //currentTarget = o button, quando clica no button pega o span e altera o texto

    darkMode = !darkMode //contrario do valor atual (se for true fica false, se for false fica true)
})

