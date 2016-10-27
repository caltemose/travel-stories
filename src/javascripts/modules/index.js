import TravelStories from './travel-stories';

const jsonFile = '/travel-stories.json';
let el = document.getElementById('content');


let app = new TravelStories(el);
app.init(jsonFile);


/*
  Automatically instantiates modules based on data-attrubiutes
  specifying module file-names.
*/

// const moduleElements = document.querySelectorAll('[data-module]')
//
// for (var i = 0; i < moduleElements.length; i++) {
//   const el = moduleElements[i]
//   const name = el.getAttribute('data-module')
//   const Module = require(`./${name}`).default
//   new Module(el)
// }

/*
  Usage:
  ======

  html
  ----
  <button data-module="disappear">disappear!</button>

  js
  --
  // modules/disappear.js
  export default class Disappear {
    constructor(el) {
      el.style.display = none
    }
  }
*/
