
let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowerCase = document.getElementById("lowercase");
let upperCase = document.getElementById("uppercase"); // Fix the typo here
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// showing input slider value
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz"; // Fix the typo in lowerChars
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// function to generate Password
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowerCase.checked ? lowerChars : "";
    allChars += upperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passBox.value).then(() => {
            console.log("Password copied to clipboard");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    } else {
        console.log("Clipboard API not supported");
    }
});