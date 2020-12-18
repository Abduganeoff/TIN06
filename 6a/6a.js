document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#celcius-input');
    console.log(input.value);
    const parsedInput = parseFloat(input.value);
    const convertedFahrenheit = ( (9 * parsedInput) / 5) + 32;

     const result = document.querySelector('#result');

    if (!isNaN(convertedFahrenheit)) {
        result.value = convertedFahrenheit;
    } else {
        result.value = 'Please enter a valid input !!!';
    }


    
});