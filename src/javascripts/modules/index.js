import TravelStories from './travel-stories';

const jsonFile = '/travel-stories.json';
let el = document.getElementById('content');

let app = new TravelStories(el);
app.init(jsonFile);
