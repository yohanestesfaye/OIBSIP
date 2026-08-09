document.getElementById('convert-btn').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');

    if (tempInput === '' || isNaN(tempInput)) {
        alert('Please enter a valid number!');
        return;
    }

    const tempNum = parseFloat(tempInput);
    let result = '';

    if (unit === 'fahrenheit') {
        // Converting Celsius to Fahrenheit and Kelvin
        const fahrenheit = (tempNum * 9/5) + 32;
        const kelvin = tempNum + 273.15;
        result = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    } else if (unit === 'celsius') {
        // Converting Fahrenheit to Celsius and Kelvin
        const celsius = (tempNum - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    } else if (unit === 'kelvin') {
        // Converting Kelvin to Celsius and Fahrenheit
        const celsius = tempNum - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }

    resultText.innerHTML = result;
    resultBox.classList.remove('hidden');
});