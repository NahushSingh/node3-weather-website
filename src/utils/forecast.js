const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com//current?access_key=c9fa9ac08ecbadefef42e5dea0a3f271&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long)

    request({ url, json: true }, (error, {body}  = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            const current = body.current
            const temp = current.temperature
            const chanceppt = current.precip
            callback(undefined, current.weather_descriptions[0] + '. It is currently ' + temp + ' degrees out. There is a ' + chanceppt + '% chance of rain.')
        }
    })
}

module.exports = forecast