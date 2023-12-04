const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree"); 
const convertBtn = document.querySelector("#convert-btn");  
const tempType = document.querySelector("#temp-type"); 

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span><i class='fas fa-spinner fa-spin'></i> Converting..</span>";

    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000);
});

function convertToCelsius() {
    let inputValue = parseFloat(degree.value);

    if (tempType.value === "fahrenheit" && !isNaN(inputValue)) {
        const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
    }
}
