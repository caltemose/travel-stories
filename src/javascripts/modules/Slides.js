import Slide from './Slide'
import { PREV, NEXT, RESET, TOGGLE_UI, TOGGLE_CAPTION } from './constants'

export default class Slides {

    constructor (parent, el, slideData, controls, keyMapper) {
        this.parent = parent
        this.element = el
        this.slideData = slideData
        this.slides = []
        this.currentSlide = 0
        this.slideToRender = 0
        this.captionsShown = true
        this.render()
        this.keyMapper = keyMapper
        this.initKeyMapper()

        controls.on(PREV, (e) => this.changeSlides(-1))
        controls.on(NEXT, (e) => this.changeSlides(1))
    }

    onPrevClick () {
        this.changeSlides(-1)
    }

    onNextClick () {
        this.changeSlides(1)
    }

    onReset () {

    }

    initKeyMapper () {
        this.keyMapper.on(PREV, () => this.onPrevClick())
        this.keyMapper.on(NEXT, () => this.onNextClick())
        this.keyMapper.on(TOGGLE_CAPTION, () => this.toggleCaption())
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

    toggleCaption () {
        this.captionsShown = !this.captionsShown
        this.slides[this.currentSlide].toggleCaption()
    }

    renderSlide (indx) {
        let slide = new Slide(this, this.slideData[indx], this.listElement, indx===this.currentSlide ? true : false)
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
