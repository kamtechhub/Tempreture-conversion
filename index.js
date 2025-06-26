let inputBtn = document.getElementById("Input");
let fahrenheitBtn = document.getElementById("Fahrenheit");
let celsiusBtn = document.getElementById("Celsius");
let button = document.getElementById("submitBtn");
let content = document.getElementById("maincontent");
let temp;

button.onclick = function() {

    if(fahrenheitBtn.checked){
        temp = Number(inputBtn.value)
        temp = temp * 9/5 + 32
        content.textContent = temp.toFixed(1) + "°F"
    } else if(celsiusBtn.checked){
        temp = Number(inputBtn.value)
        temp = temp - 32 *5/9
        content.textContent = temp.toFixed(1) + "°C"
    } else {
        content.textContent = "Select a Unit" 
    }
}