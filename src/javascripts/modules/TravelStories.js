import axios from 'axios'
import ShowControls  from './ShowControls'
import Slides from './Slides'
import KeyboardMapper from './KeyboardMapper'
import { PREV, NEXT, RESET, TOGGLE_UI, TOGGLE_CAPTION } from './constants'

export default class TravelStories {

    constructor (content, controls, slideshow) {
        this.element = controls
        this.childrenElements = {
            controls: controls,
            slideshow: slideshow
        }
    }

    /**
     * init - load the slideshow json file via GET
     * @param  {string} jsonFile path to the slideshow JSON data
     * @return null
     */
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

    /**
     * buildElements - create the primary components of the slideshow:
     * The KeyboardMapper handles user input via keyboard and broadcasts
     * appropriate events from the keyboard map.
     * ShowControls is the UI for the toggleable slideshow controls.
     * Slides manages the creation, preloading and sequencing of slides.
     *
     * @return null
     */
    buildElements () {
        this.keyMapper = new KeyboardMapper()
        this.showControls = new ShowControls(this.childrenElements.controls, this.keyMapper)
        this.slides = new Slides(this, this.childrenElements.slideshow, this.jsonData.slides, this.showControls, this.keyMapper)
    }

}
