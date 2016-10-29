import Emitter from 'event-emitter-es6'
import { PREV, NEXT } from './constants'
import Slide from './Slide'

export default class Slides extends Emitter {

    constructor (parent, el, slideData) {
        super()
        this.parent = parent
        this.element = el
        this.slideData = slideData
        this.slideElements = []
        this.currentSlide = 0
        this.render()
    }

    render () {
        this.element.innerHTML = '<ul class="slides"></ul>'
        this.listElement = this.element.getElementsByTagName('ul')[0]
        this.renderNextSlide()
    }

    renderNextSlide () {
        if (this.slideElements.length) {

        } else {
            this.renderSlide(0)
        }
    }

    renderSlide (indx) {
        let slide = new Slide(this.slideData[indx], this.listElement, indx===0 ? true : false)
        this.slideElements.push(slide)
    }

}
