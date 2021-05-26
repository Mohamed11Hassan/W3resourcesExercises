/*====================Exercise001==================*/

let str = "hello world";

console.log(typeof str == 'string');

/*====================Exercise002==================*/

console.log(`${"=".repeat(30)}Exercise002${"=".repeat(30)}`);

let str2 = "";

let strIsBlank = (s) => (s.length > 0)? "Not blank": "Is blank";

console.log(strIsBlank(str2));

/*====================Exercise003==================*/

console.log(`${"=".repeat(30)}Exercise003${"=".repeat(30)}`);

let str3 = "Robin Singh";

console.log(str3.split(" "));


/*====================Exercise004==================*/

console.log(`${"=".repeat(30)}Exercise004${"=".repeat(30)}`);

let str4 = "Robin Singh";

console.log(str4.substr(0, 4));

/*====================Exercise005==================*/

console.log(`${"=".repeat(30)}Exercise005${"=".repeat(30)}`);

let str5 = "Robin Singh";

let abbreviatedString = (s) => {
    let splittedString = s.split(" ");
    return (splittedString.length > 1)?  `${splittedString[0]} .${splittedString[1][0].toUpperCase()}` : splittedString[0]; 
}

console.log(abbreviatedString(str5));


/*====================Exercise006==================*/

console.log(`${"=".repeat(30)}Exercise006${"=".repeat(30)}`);

let str6 = "robin_singh@example.com";

let hideEmail = (s) => {
    let splittedEmail= s.split("@");
    return `${splittedEmail[0].substr(0, 5)}...@${splittedEmail[1]}`;
}

console.log(hideEmail(str6));


/*====================Exercise007==================*/

console.log(`${"=".repeat(30)}Exercise007${"=".repeat(30)}`);

let str7 = "Robin Singh from USA";

let stringParameterize = (s) => (s.split(" ").length > 1)? s.split(" ").join("-").toLowerCase() : s.toLowerCase();

console.log(stringParameterize(str7));

/*====================Exercise008==================*/

console.log(`${"=".repeat(30)}Exercise008${"=".repeat(30)}`);

let str8 = "js string exercises";

let strCapitalize = (s) => s.replace(s[0], s[0].toUpperCase());

console.log(strCapitalize(str8));

/*====================Exercise009==================*/

console.log(`${"=".repeat(30)}Exercise009${"=".repeat(30)}`);

let str9 = "js string exercises";

//let capitalizeWords = (s) => s.replace(/([^ \t]+)/g);

let capitalizeWords = (s) => {
    let splittedWords = s.split(" ");
    splittedWords.forEach((ele, index) => {
        splittedWords[index][0] = splittedWords[index][0].toUpperCase();
    });

    return splittedWords.join(" ");
}

/*====================Exercise010==================*/

console.log(`${"=".repeat(30)}Exercise010${"=".repeat(30)}`);

let str10 = "AaBbc";

let upperLowerCase = (s) =>{
    s = s.split("");
    s.forEach(function(_ ,letter) {
        s[letter] = (s[letter].charCodeAt(0) >= 65 && s[letter].charCodeAt(0) <= 90)?s[letter].toLowerCase():((s[letter].charCodeAt(0) >= 97 && s[letter].charCodeAt(0) <= 128)?s[letter].toUpperCase():false);
    })
    /*for(let letter = 0; letter < s.length; letter++){
        if(s[letter].charCodeAt(0) >= 65 && s[letter].charCodeAt(0) <= 90) {
            s[letter] = s[letter].toLowerCase();
        } else if(s[letter].charCodeAt(0) >= 97 && s[letter].charCodeAt(0) <= 128) {
            s[letter] = s[letter].toUpperCase();
        } 
    }*/
    return s.join("");
}

console.log(upperLowerCase(str10));

let regExp = /([A-Z])|([a-z])/g, 
str11 = "maSnsmM";
str11.replace(regExp, (_, index) => console.log(_));//index? _.toLowerCase() : _.toUpperCase() ));