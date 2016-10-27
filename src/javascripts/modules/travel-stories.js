const axios = require('axios')

export default class TravelStories {
    constructor (el) {
        this.element = el;
    }

    init (jsonFile) {
        this.element.innerHTML = 'Loading data: ' + jsonFile;
        axios.get(jsonFile)
            .then(function (response) {
                console.log(response.data.title);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
