import * as elements from './source/elements.js'


export function start(minutes, seconds) {
    state.minutes = minutes //state.minute recebe os minutos da aplicação
    state.seconds = seconds

    elements.registerControls()

    elements.countdown()

    elements.setTime()
}
