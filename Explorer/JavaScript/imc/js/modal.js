export const Modal = { //export envia o arquivo para qualquer lugar que ele for usado no futuro

    wrapper: document.querySelector('.modal-wrapper'),

    message: document.querySelector('.modal .title span'),

    btnClose: document.querySelector('.modal button.close'),

    open: function(){
        Modal.wrapper.classList.add('open')
    },
    close(){
       Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = () => {
    //modalWrapper.classList.remove('open')
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)
//variavel global window, adicionar um eventlistener, keydown = tecla digitada

function handleKeyDown(event){
    if(event.key === 'Escape' ){
        Modal.close()
    }
}