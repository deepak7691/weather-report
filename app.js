const API_KEY = `31d1046f5452707fd080b6c2ee619a0a`

//const API = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`

//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form")
const get = document.querySelector("#get")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    weather.innerHTML = `<div class="font">
    <h2>  ${data.main.temp} &#8451;</h2>
    <h4>  ${data.weather[0].main}</h4>
    <h4>  ${data.weather[0].description}</h4>
</div>`

}


form.addEventListener(
    "submit",
    function (event) {
        getWeather(get.value)
        event.preventDefault();
    }
)


//31d1046f5452707fd080b6c2ee619a0a  API key