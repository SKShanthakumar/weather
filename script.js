//require('dotenv').config()

const input = document.querySelector("#input")
const apikey = "a363c9b03d3fc270a6ca2c0d799c492a";


const func = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt={7}&appid=${apikey}`);
    const data = await response.json();

    return data;
}

function search() {
    var city = input.value;
    func(city)
        .then(data => {
            console.log(data);

            var img = document.querySelector("#img");
            var temp = document.querySelector("#temp");
            var desc = document.querySelector("#desc");

            switch (data.weather[0].main) {
                case 'Clear':
                    img.src = 'images/clear.png';
                    break;
                case 'Rain':
                    img.src = 'images/rain.png';
                    break;
                case 'Snow':
                    img.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    img.src = 'images/cloud.png';
                    break;
                case 'Mist':
                    img.src = 'images/mist.png';
                    break;
                case 'Haze':
                    img.src = 'images/mist.png';
                    break;
                default:
                    img.src = 'images/cloud.png';
                    break;
            }
            temp.innerHTML = `${(data.main.temp/10).toFixed(1)} <span style="position: relative; bottom: 25px; right: 5px; font-size: 22px;">°C</span>`;
            desc.textContent = `${data.weather[0].main}`;
        })
        .catch(err => console.log(err));
}