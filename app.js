function generate(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
    const numberChars = "1234567890";
    const symbolChars = ".,@()$%^&*!#_";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);



    if (length <= 0){
        return `(password length must be at least 1!)`;
    }
    if (allowedChars.length === 0){
        return `At least 1 set of chars needs to be selected!`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return '';
}

const passwordLength = 0;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = true;

const password = generate(passwordLength,
                          includeLowercase,
                          includeUppercase,
                          includeNumbers,
                          includeSymbols);

// console.log(`Generated password ${password}`);    




// TO BE CONTINUED