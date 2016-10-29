import Emitter from 'event-emitter-es6'
import { PREV, NEXT } from './constants'

export default class ShowControls extends Emitter {

    constructor (el) {
        super()
        console.log("ShowControls constructor")
        this.element = el
        this.render()
    }

    render () {
        var markup = this.getMarkup()
        this.element.innerHTML = markup;
        this.initButtons()
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

    onPrevClick () {
        this.emit(PREV)
    }

    onNextClick () {
        this.emit(NEXT)
    }

}
