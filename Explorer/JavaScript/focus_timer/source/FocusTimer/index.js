import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds){
    state.minute = minutes //state.minute recebe os minutos da aplicação
    state.seconds = seconds

    timer.updateDisplay()

    events.registerControls()

    events.setMinutes()
}

