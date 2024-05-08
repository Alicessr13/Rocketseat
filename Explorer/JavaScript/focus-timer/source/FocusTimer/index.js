import state from './state.js'
import * as events from './events.js'

export function start(minutes, seconds){
    state.minute = minutes //state.minute recebe os minutos da aplicação
    state.seconds = seconds

    events.registerControls()
}

