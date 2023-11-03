function checkLink(input) {
    const value = input.value;
    const isValid = (value.includes("https://") || value.includes("http://")) && value.includes(".");
    updateInputStyle(input, isValid);
}

function checkEmail(input) {
    const value = input.value;
    const isValid = value.includes("@") && value.includes(".");
    updateInputStyle(input, isValid);
}

function updateInputStyle(input, isValid) {
    if (isValid) {
        input.classList.remove("red");
        input.classList.add("green");
    } else {
        input.classList.remove("green");
        input.classList.add("red");
    }
}