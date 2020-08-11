const weatherForm = document.querySelector('form')
const address = document.querySelector('form input')
const forecast = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = address.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                forecast.innerHTML = data.error
            } else {
                forecast.innerHTML = ""
                let para = document.createElement("span")
                let node = document.createTextNode(data.location)
                para.appendChild(node)
                forecast.appendChild(para)
                for (var key in data.forecast) {
                    if (key === "Weather icons") {
                        let img = document.createElement('img')
                        img.src = data.forecast[key]
                        img.style.width = 100%
                        forecast.appendChild(img)
                    } else {
                        let para = document.createElement("span")
                        let node = document.createTextNode(key + " : " + data.forecast[key])
                        para.appendChild(node)
                        forecast.appendChild(para)
                    }
                }
                forecast.style.display = 'grid'
            }
        })
    })
})