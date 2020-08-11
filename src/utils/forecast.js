const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com//current?access_key=c9fa9ac08ecbadefef42e5dea0a3f271&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long)

    request({ url, json: true }, (error, {body}  = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            const current = {
                "Weather description": body.current.weather_descriptions[0],
                "Temperature": body.current.temperature,
                "Weather icons": body.current.weather_icons[0],
                "Wind speed": body.current.wind_speed,
                "Wind degree": body.current.wind_degree,
                "Wind dir": body.current.wind_dir,
                "Pressure": body.current.pressure,
                "Humidity": body.current.humidity,
                "Cloudcover": body.current.cloudcover,
                "Feelslike": body.current.feelslike,
                "UV index": body.current.uv_index,
                "Visibility": body.current.visibility,
            }
            callback(undefined, current)
        }
    })
}

module.exports = forecast