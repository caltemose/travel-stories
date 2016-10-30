import Emitter from 'event-emitter-es6'
import Slide from './Slide'
import { PREV, NEXT } from './constants'

export default class Slides extends Emitter {

    constructor (parent, el, slideData, controls) {
        super()
        this.parent = parent
        this.element = el
        this.slideData = slideData
        this.slides = []
        this.currentSlide = 0
        this.slideToRender = 0
        this.render()
        controls.on(PREV, (e) => this.changeSlides(-1))
        controls.on(NEXT, (e) => this.changeSlides(1))
    }

    render () {
        this.element.innerHTML = '<ul class="slides"></ul>'
        this.listElement = this.element.getElementsByTagName('ul')[0]
        this.renderSlide(this.slideToRender)
    }

    renderNextSlide () {
        // if the slideElements length is less than the currentSlide index + imagesToPreload, load another
        if (
            // don't load more than 3 additional slides from the current one
            // this.slides.length < this.currentSlide + 4 &&
            // don't attempt to load images pass the images data length
            this.slideToRender < this.slideData.length - 1) {

            this.slideToRender++
            this.renderSlide(this.slideToRender)
        }
    }

    renderSlide (indx) {
        let slide = new Slide(this.slideData[indx], this.listElement, indx===this.currentSlide ? true : false)
        this.slides.push(slide)
        this.renderNextSlide()
    }

    changeSlides (dir) {
        this.slides[this.currentSlide].hide()

        if (dir>0) {
            if (this.currentSlide < this.slideData.length - 1) {
                this.currentSlide++
            } else {
                this.currentSlide = 0
            }

        } else {
            if (this.currentSlide === 0) {
                this.currentSlide = this.slideData.length-1
            } else {
                this.currentSlide--
            }
        }

        this.slides[this.currentSlide].show()
        // TODO render additional slides if needed
        // if (this.slides.length < this.slideData.length) {
        //     console.log('this.slideToRender', this.slideToRender)
        //     console.log('this.slides.length', this.slides.length)
        //     console.log('this.slideData.length', this.slideData.length)
        // }
    }

}
