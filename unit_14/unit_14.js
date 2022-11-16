function f1() {
    let select = document.querySelector('.select-name').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + select +
       ' &appid=53d9f1955bef22a44918e2e2ada33a94')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('.city-name').innerHTML = data.name;
            document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg';
            document.querySelector('.disclaimer').innerHTML =
                data.weather[0]['description'];
            //http://openweathermap.org/img/wn/10d@2x.png
            document.querySelector('.features li').innerHTML =
                `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

        })
        .catch(function () {
        })
}
document.querySelector('.button-primary').onclick = f1;
