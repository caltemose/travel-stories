import Emitter from 'event-emitter-es6'
import { PREV, NEXT } from './constants'

export default class Slide extends Emitter {

    constructor (data, parentElement, showOnRender) {
        super()
        this.data = data
        this.visible = showOnRender
        this.parentElement = parentElement
        this.render(showOnRender)
    }

    render () {
        let classes = this.visible ? "slide" : "slide hidden"
        let html = `<li class="${classes}">
            <h2>${this.data.text}</h2>
            <img src="${this.data.image}" alt="${this.data.alt}" />
        </li>`
        this.parentElement.insertAdjacentHTML('beforeend', html)
    }

}
