var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var tempCel = document.querySelector('.temp-cel');
var tempFar = document.querySelector('.temp-far');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
  // if (input.value == '') {
  //   alert('Please Enter a City Name');
  // }
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      var tempCelValue = data['main']['temp'];
      var tempFarValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      main.innerHTML = "Weather Of " + nameValue + " city";
      desc.innerHTML = "Description - " + descValue;
      tempCel.innerHTML = "Temperature - " + parseInt(tempCelValue - 273.15) + "°C.";
      tempFar.innerHTML = "Temperature - " + parseInt((tempFarValue - 273.15) * 9 / 5 + 32) + "°F.";
      input.value = "";

    })

    .catch(err => alert("Wrong city name!"));
})
