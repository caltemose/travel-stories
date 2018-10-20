import { PREV, NEXT, HIDE_VALUE, SHOW_VALUE } from './constants'

export default class Slide {

    constructor (parent, data, parentElement, showOnRender) {
        this.parent = parent
        this.data = data
        this.visible = showOnRender
        this.parentElement = parentElement
        this.defaultClasses = 'slide theme-' + this.data.theme
        if (this.data.mode) {
            this.defaultClasses += ' ' + this.data.mode
        }
        this.render()
    }

    render () {
        let classes = this.defaultClasses
        if (!this.visible) {
            classes += ' hidden'
        }

        let html = '';
        if (this.data.text) {
            html = `<h2>${this.data.text}</h2>`
        }
        html += `<img src="${this.data.image}" alt="${this.data.alt}" />`

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
        if (this.parent.captionsShown) {
            this.showCaption()
        } else {
            this.hideCaption()
        }
    }

    toggleCaption () {
        if (this.caption) {
            if (this.caption.style.display === HIDE_VALUE) {
                this.showCaption()
            } else {
                this.hideCaption()
            }
        }
    }

    showCaption () {
        if (this.caption) {
            this.caption.style.display = SHOW_VALUE
        }
    }

    hideCaption () {
        if (this.caption) {
            this.caption.style.display = HIDE_VALUE
        }
    }
}
