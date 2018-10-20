import Emitter from 'event-emitter-es6'
import { PREV, NEXT, RESET, TOGGLE_UI, TOGGLE_CAPTION, HIDE_VALUE, SHOW_VALUE, TOGGLE_SLIDESHOW } from './constants'
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
        this.toggleVisibility({})
        // this.startShow()
    }

    startShow () {
        this.intervalId = setInterval(this.onNextClick.bind(this), 10 * 1000)
    }

    stopShow () {
        clearInterval(this.intervalId)
        this.intervalId = null
    }

    toggleShow () {
        if (this.intervalId) this.stopShow()
        else this.startShow()
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
        this.keyMapper.on(TOGGLE_SLIDESHOW, evt => this.toggleShow())
    }

    onPrevClick () {
        this.emit(PREV)
    }

    onNextClick () {
        this.emit(NEXT)
    }

    toggleVisibility (e) {
        if (this.element.style.display === HIDE_VALUE) {
            this.element.style.display = SHOW_VALUE
        } else {
            this.element.style.display = HIDE_VALUE
        }
    }

}
