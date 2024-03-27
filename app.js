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



    if (length <= 0){
        return `(password length must be at least one!)`;
    }

    return '';
}

const passwordLength = 0;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generate(passwordLength,
                          includeLowercase,
                          includeUppercase,
                          includeNumbers,
                          includeSymbols);

console.log(`Generated password ${password}`);                          