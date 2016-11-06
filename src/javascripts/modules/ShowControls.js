import Emitter from 'event-emitter-es6'
import { PREV, NEXT, RESET, TOGGLE_UI, TOGGLE_CAPTION } from './constants'
import KeyboardMapper from './KeyboardMapper'

export default class ShowControls extends Emitter {

    constructor (el, keyMapper) {
        super()
        this.element = el
        this.keyMapper = keyMapper
        this.render()
    }

    render () {
        var markup = this.getMarkup()
        this.element.innerHTML = markup;
        this.initButtons()
        this.initKeyMapper()
    }

    getMarkup () {
        return `
            <button id="prev">prev</button>
            <button id="next">next</button>
        `
    }

    initButtons () {
        this.prev = document.getElementById('prev')
        this.next = document.getElementById('next')
        this.prev.addEventListener('click', evt => this.onPrevClick(evt))
        this.next.addEventListener('click', evt => this.onNextClick(evt))
    }

    initKeyMapper () {
        this.keyMapper.on(TOGGLE_UI, evt => this.toggleVisibility())
    }

    onPrevClick () {
        this.emit(PREV)
    }

    onNextClick () {
        this.emit(NEXT)
    }

    toggleVisibility (e) {
        const HIDE = 'none'
        const SHOW = 'block'
        if (this.element.style.display === HIDE) {
            this.element.style.display = SHOW
        } else {
            this.element.style.display = HIDE
        }
    }

}
