//Dom elements
var displayEl = document.getElementById("display");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");

var getRandomFunc = {
    lower: generateRandomLower,
    upper: generateRandomUpper,
    number: generateRandomNumber,
    symbol: generateRandomSymbol
};
//Generate Event Listener
generateEl.addEventListener('click', () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumbers = numbersEl.checked;
    var hasSymbols = symbolsEl.checked;

    displayEl.innerText = generatePassword(
        hasUpper,
        hasLower, 
        hasNumbers, 
        hasSymbols, 
        length);
});
//Generate Password Function
function generatePassword(upper, lower, numbers, symbols, length) {
    var generatedPassword = "";
    var typesCount = upper + lower + numbers + symbols;
    var typesArr = [{upper}, {lower}, {numbers}, {symbols}].filter
    (item => Object.values(item)[0]);

 
    
    if (typesCount === 0) {
        return "";
    }

    for(var i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];
          //  console.log("funcName: ", funcName);

        generatedPassword += randomFunc[funcName]();
        });
    }

    var finalPassword = generatedPassword.slice(0, length);

    return finalPassword;

}

function generateRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}



