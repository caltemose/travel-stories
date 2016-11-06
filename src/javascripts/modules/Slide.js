import { PREV, NEXT } from './constants'

export default class Slide {

    constructor (data, parentElement, showOnRender) {
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
        this.caption = this.slide.querySelector('h2')
    }

    hide () {
        this.slide.className = this.defaultClasses + ' hidden'
    }

    show () {
        this.slide.className = this.defaultClasses
    }

    toggleCaption () {
        const HIDE = 'none'
        const SHOW = 'block'
        if (this.caption.style.display === HIDE) {
            this.caption.style.display = SHOW
        } else {
            this.caption.style.display = HIDE
        }
    }
}
