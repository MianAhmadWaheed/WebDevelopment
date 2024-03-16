{
    const apikey = "c7c8d5cce2a640a026a47ced81a37626";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=faisalabad";

    async function checkweather() {
        const response = await fetch(apiUrl + `&appid=${apikey}`);
        var data = await response.json();

        console.log(data)

        document.querySelectorAll(".city").innerHTML = date.name;
        document.querySelector(".temp").innerHTML = data.main.temp;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelectorAll(".wind").innerHTML = data.list[0].weather.wind.speed;
    }
    checkweather();
}
{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=faisalabad&appid=c7c8d5cce2a640a026a47ced81a37626`;

    document.querySelector('button').addEventListener('click', function (e) {
        let name = document.querySelector('input').value;
        if (name) {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=Faisalabad&appid=c7c8d5cce2a640a026a47ced81a37626`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < 5; i++) {
                        let date = new Date();
                        document.querySelectorAll(`#day${i + 1}>td`)[0].innerHTML = `${date.getDate() + i} March 2024`;
                        document.querySelectorAll(`#day${i + 1}>td`)[1].innerHTML = `${parseInt(data.list[i * 8].main.temp - 273.15)}&#176C`;
                        document.querySelectorAll(`#day${i + 1}>td`)[2].innerHTML = data.list[i * 8].weather[0].main;
                        document.querySelectorAll(`#day${i + 1}>td`)[3].innerHTML = `${parseInt(data.list[i * 8].main.feels_like - 273.15)}&#176C`;
                        document.querySelectorAll(`#day${i + 1}>td`)[4].innerHTML = data.list[i * 8].main.humidity;
                        document.querySelector('table').style.display = 'block';
                    }
                })
                .catch(error => {
                    alert('Please enter a valid city name');
                })
        } else {
            alert('Please Enter City Name');
        }
    });
}