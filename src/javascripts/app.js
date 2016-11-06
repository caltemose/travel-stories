import TravelStories from './modules/TravelStories'

let content = document.getElementById('content')
let json = './italy-highlights.json'
if (content.dataset.jsonSrc) {
    json = content.dataset.jsonSrc
}

let controls = document.getElementById('controls')
let slideshow = document.getElementById('slideshow')

let app = new TravelStories(controls, slideshow)
app.init(json)
