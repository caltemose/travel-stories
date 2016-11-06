import Emitter from 'event-emitter-es6'
import ShowControls from './ShowControls'
import { PREV, NEXT, RESET, TOGGLE_UI, TOGGLE_CAPTION } from './constants'

export default class KeyboardMapper extends Emitter {

    constructor () {
        super()
        window.addEventListener('keydown', evt => this.onKeyDown(evt))
    }

    onKeyDown (e) {
        switch (e.keyCode) {
            case 48: // 0
                this.emit(RESET)
                break
            case 412: // |<<
            case 49:  // 1
            case 37:  // <
                this.emit(PREV)
                break
            case 417: // >>|
            case 50:  // 2
            case 39:  // >
                this.emit(NEXT)
                break
            case 85: // u
                this.emit(TOGGLE_UI)
                break
            case 67: // c
                this.emit(TOGGLE_CAPTION)
                break
            case 66: // b (both)
                this.emit(TOGGLE_CAPTION)
                this.emit(TOGGLE_UI)
            default:
                console.log('key', e.keyCode)
        }
    }

}
