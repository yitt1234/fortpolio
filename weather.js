
const API_KEY = ""; 
const COORDS = 'coords';

const weatherIconImg = document.querySelector('.weatherIcon');
const wea = document.querySelector('.weatherInfo');
const plece = document.querySelector('.place');
const wd = document.querySelector('.wd');



function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json)
        const temperature = json.main.temp;
        const place = json.name;
        const wi = json.weather[0].description
        const weatherIcon = json.weather[0].icon;
        const weatherIconAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        //plece.innerHTML = `${place}`;
        
        wea.innerText = `  
        ${temperature}°C
        
           `;
       wd.innerText = `
       ${wi}`
        weatherIconImg.setAttribute('src', weatherIconAdrs);
        
    })
    .catch((handleError) => console.log("error:", handleError));
}
function init() {
    askForCoords()
}


function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    
}


function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);
    
    
    console.log("location access success")
    
    
}

function handleError() {
    console.log(error)
}



init();
