const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFwYm94d2VhdGhlcmFwcCIsImEiOiJja2RuOG51cXIxZ2FxMnFsY3VsdHU0cDdsIn0.9jmpPuMasbfbM4lfXbmiCQ&limit=1'

    request({ url, json: true }, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Location not found!', undefined)
        } else {
            const features = body.features[0]
            const location = features.center
            callback(undefined, {
                latitude: location[1],
                longitude: location[0],
                location: features.place_name
            })
        }
    })
}

module.exports = geocode