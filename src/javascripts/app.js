import TravelStories from './modules/TravelStories';

const jsonFile = '/travel-stories.json';

let content = document.getElementById('content');
let controls = document.getElementById('controls');
let slideshow = document.getElementById('slideshow');

let app = new TravelStories(content, controls, slideshow);
app.init(jsonFile);
