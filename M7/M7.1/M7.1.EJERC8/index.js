function showFahrenheit(){
const temperature = Number (document.getElementById("temp").value);

result = (temperature * 9 / 5) + 32;

document.getElementById('result').innerHTML = `${temperature}º son ${result} Fahrenheit `;
}