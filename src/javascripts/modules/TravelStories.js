import axios from 'axios'
import ShowControls  from './ShowControls'
import Slides from './Slides'
import KeyboardMapper from './KeyboardMapper'

/**
 * TravelStories is the primary class for this application.
 * It loads the JSON data and creates the primary components
 * for this app.
 */
export default class TravelStories {

    /**
     * constructor - receives and stores the DOM containers
     * that will house the primary components for this app.
     *
     * @param  {DOMnode} controls  DOM element for the control UI
     * @param  {DOMnode} slideshow DOM element for the slides
     * @return null
     */
    constructor (controls, slideshow) {
        this.element = controls
        this.captionsShown = false
        this.childrenElements = {
            controls: controls,
            slideshow: slideshow
        }
    }

    /**
     * init - load the slideshow json file via GET
     *
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
