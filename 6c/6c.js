
function checkForm() {
    const number = document.querySelector("#number");
    const email= document.querySelector("#email");

    if (!number.value) {
        document.querySelector('#numberText').innerText = 'Invalid number';
        number.classList.add("is-invalid");
        return false;
    }

    if (!email.value) {
        document.querySelector('#emailText').innerText = 'Please enter your email';
        email.classList.add("is-invalid");
        return false;
    }

    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isEmailValid = regex.test(String(email.value).toLowerCase());
    console.log(isEmailValid);
    if (!isEmailValid) {
        document.querySelector('#emailText').innerText = 'Invalid email';
        email.classList.add("is-invalid");
        return false;
    }

    number.classList.remove("is-invalid");
    email.classList.remove("is-invalid");

    return true;
}