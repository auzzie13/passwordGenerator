//Dom elements
var displayEl = document.getElementById("display");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var clipboardEl = document.getElementById("copy");
//onclick for display element-copy to clipboard

var randomFunc = {
    lower: generateRandomLower,
    upper: generateRandomUpper,
    numbers: generateRandomNumbers,
    symbols: generateRandomSymbols
};
//Generate Event Listener
generateEl.addEventListener('click', () => {
    var length = lengthEl.value;
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumbers = numbersEl.checked;
    var hasSymbols = symbolsEl.checked;

    displayEl.value = generatePassword(
        hasUpper,
        hasLower, 
        hasNumbers, 
        hasSymbols, 
        length);
});

clipboardEl.addEventListener('click', () => {
    var copyText = document.getElementById("display");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
});
//Generate Password Function
function generatePassword(upper, lower, numbers, symbols, length) {
 //   console.log("clicked");
    var generatedPassword = "";
    var typesCount = upper + lower + numbers + symbols;
    var typesArr = [{upper}, {lower}, {numbers}, {symbols}].filter
    (item => Object.values(item)[0]);

 
    
    if(typesCount === 0) {
        return "";
    }

    for(var i = 0; i < length; i += typesCount) { 
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];
        

        generatedPassword += randomFunc[funcName]();
        });
    }
    console.log(generatedPassword);
    return generatedPassword;

    
}

function generateRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSymbols() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
}
