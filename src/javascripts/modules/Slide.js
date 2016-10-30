import Emitter from 'event-emitter-es6'
import { PREV, NEXT } from './constants'

export default class Slide extends Emitter {

    constructor (data, parentElement, showOnRender) {
        super()
        this.data = data
        this.visible = showOnRender
        this.parentElement = parentElement
        this.defaultClasses = 'slide theme-' + this.data.theme;
        this.render()
    }

    render () {
        let classes = this.defaultClasses
        if (!this.visible) {
            classes += ' hidden'
        }

        let html = `<h2>${this.data.text}</h2>
            <img src="${this.data.image}" alt="${this.data.alt}" />`

        this.slide = document.createElement('li')
        this.slide.innerHTML = html
        this.slide.className = classes
        this.parentElement.appendChild(this.slide)
    }

    hide () {
        this.slide.className = this.defaultClasses + ' hidden'
    }

    show () {
        this.slide.className = this.defaultClasses
    }
}
