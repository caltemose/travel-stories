import axios from 'axios'
import Emitter from 'event-emitter-es6'
import ShowControls  from './ShowControls'
import Slides from './Slides'
import { PREV, NEXT } from './constants'

export default class TravelStories extends Emitter {

    constructor (content, controls, slideshow) {
        super()
        this.element = controls
        this.childrenElements = {
            controls: controls,
            slideshow: slideshow
        }
    }

    init (jsonFile) {
        var _this = this
        axios.get(jsonFile)
            .then(function (response) {
                console.log(response.data.title)
                _this.jsonData = response.data
                _this.buildElements()
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    buildElements () {
        // create controls
        this.showControls = new ShowControls(this.childrenElements.controls)
        this.showControls.on(PREV, () => this.changeSlide(-1))
        this.showControls.on(NEXT, () => this.changeSlide(1))

        // create slides
        this.slides = new Slides(this, this.childrenElements.slideshow, this.jsonData.slides)

    }

    changeSlide (dir) {
        console.log('changeSlide', dir)
    }

}

/*

This component needs to create:

- controls (visual UI and keyboard control)

- slides
    - slide
        - svg
        - text
        - image

- timing/sequencing controller

*/
