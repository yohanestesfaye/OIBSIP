document.getElementById('convert-btn').addEventListener('click', function() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');

    // Reset previous styles
    resultBox.style.borderLeftColor = "#2563eb";

    // 1. Input Validation: Check for empty or non-numeric input
    if (tempInput === '' || isNaN(tempInput)) {
        resultText.innerHTML = "<span style='color: #ef4444;'>⚠️ Please enter a valid numerical value!</span>";
        resultBox.style.borderLeftColor = "#ef4444";
        resultBox.classList.remove('hidden');
        return;
    }

    const tempNum = parseFloat(tempInput);

    // 2. Edge Case Handling: Absolute Zero Violations
    if (
        (unit === 'celsius' && tempNum < -273.15) ||
        (unit === 'fahrenheit' && tempNum < -459.67) ||
        (unit === 'kelvin' && tempNum < 0)
    ) {
        resultText.innerHTML = "<span style='color: #ef4444;'>⚠️ Invalid temperature! Value is below Absolute Zero.</span>";
        resultBox.style.borderLeftColor = "#ef4444";
        resultBox.classList.remove('hidden');
        return;
    }

    // 3. Perform Calculations & Display All Units
    let result = '';

    if (unit === 'celsius') {
        const fahrenheit = (tempNum * 9/5) + 32;
        const kelvin = tempNum + 273.15;
        result = `${tempNum} °C = <strong>${fahrenheit.toFixed(2)} °F</strong> | <strong>${kelvin.toFixed(2)} K</strong>`;
    } else if (unit === 'fahrenheit') {
        const celsius = (tempNum - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `${tempNum} °F = <strong>${celsius.toFixed(2)} °C</strong> | <strong>${kelvin.toFixed(2)} K</strong>`;
    } else if (unit === 'kelvin') {
        const celsius = tempNum - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `${tempNum} K = <strong>${celsius.toFixed(2)} °C</strong> | <strong>${fahrenheit.toFixed(2)} °F</strong>`;
    }

    resultText.innerHTML = result;
    resultBox.classList.remove('hidden');
});