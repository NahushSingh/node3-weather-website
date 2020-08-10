const weatherForm = document.querySelector('form')
const address = document.querySelector('form input')
const currentlocation = document.querySelector('#location')
const forecast = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = address.value

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                currentlocation.innerHTML = data.error
                forecast.innerHTML = ''
            } else {
                currentlocation.innerHTML = data.location
                forecast.innerHTML = data.forecast
            }
        })
    })
})