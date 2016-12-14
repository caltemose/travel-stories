import TravelStories from './modules/TravelStories'

let content = document.getElementById('content')

// default file to load
let json = './italy.json'

// can be overridden by html data attribute
if (content.dataset.jsonSrc) {
    json = content.dataset.jsonSrc
}

// which can be overridden by GET parameters
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('slideshow') || urlParams.get('s')) {
    json = urlParams.get('slideshow') ? urlParams.get('slideshow') : urlParams.get('s')
}

let controls = document.getElementById('controls')
let slideshow = document.getElementById('slideshow')

let app = new TravelStories(controls, slideshow)
app.init(json)
