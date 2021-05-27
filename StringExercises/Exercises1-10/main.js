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

/*let regExp = /([A-Z]+)|([a-z]+)/g, 
str11 = "maSnsmM";
str11.replace(regExp, (_, index) => console.log(_));//index? _.toLowerCase() : _.toUpperCase() ));*/

let str12 = "mohamed hassan mansour";

let swapper = (str) => str.replace(/\b[a-z]/g, (_) => _.toUpperCase());

console.log(swapper(str12));

/*====================Exercise011==================*/

console.log(`${"=".repeat(30)}Exercise011${"=".repeat(30)}`);

let str13 = "ahmed shkao lop";

let camelizeCase = (s) => s.replace(/\W[a-z]/g, (_, index) => (index > 1)? _.toUpperCase() : s).split(" ").join("");

console.log(camelizeCase(str13));

/*====================Exercise012==================*/

console.log(`${"=".repeat(30)}Exercise012${"=".repeat(30)}`);

let str14 = "helloWorld";

let decamelizeCase = (s, sepeartor = " ") => s.replace(/[A-Z]/g, (_) => `${sepeartor}${_.toLowerCase()}`);

console.log(decamelizeCase(str14));

/*====================Exercise013==================*/

console.log(`${"=".repeat(30)}Exercise013${"=".repeat(30)}`);

let str15 = "Ha!";

let strRepeater = (s, nOfTimes) => s.repeat(nOfTimes);

console.log(strRepeater(str15, 2));


/*====================Exercise014==================*/

console.log(`${"=".repeat(30)}Exercise014${"=".repeat(30)}`);

let str16 = "We are doing some exercises.";

let strInsert = (s, newS, position = 0) => (position > 0)? `${s.substr(0, position - 1)} ${newS} ${s.substr(position)}`: `${newS} ${s}`;

console.log(strInsert(str16, "mohamed" , 5));

/*====================Exercise015==================*/

console.log(`${"=".repeat(30)}Exercise015${"=".repeat(30)}`);

let num17 = 10352;

let orderNumbers = (num) => {
    let Ob = {1: "st", 2 :"nd", 3: "rd"}
    num = num.toString();
    return (Ob.hasOwnProperty(`${num[num.length-1]}`)) ? `${num}${Ob[num[num.length-1]]}`: `${num}th`;
}

console.log(orderNumbers(num17));

/*====================Exercise016==================*/

console.log(`${"=".repeat(30)}Exercise016${"=".repeat(30)}`);

let str18 = "We are doing JS string exercises.";

let textTruncate = (s, truncPosition = 0, sign = "...") => (truncPosition > 0 && truncPosition !== true) ? `${s.substr(0, truncPosition)}${sign}`: `${s}`; 

console.log(textTruncate(str18, 17));

/*====================Exercise017==================*/

console.log(`${"=".repeat(30)}Exercise017${"=".repeat(30)}`);

let str19 = "We are doing JS string exercises55.";

let cutToChunks = (s, nOfChunks) => (nOfChunks > 0)? s.match(new RegExp(`.{${1,nOfChunks}}`, 'g')) : s;
console.log(cutToChunks(str19, 1));

/*====================Exercise018==================*/

let str19 = "We are doing JS string exercises55.";

let cutToChunks = (s, nOfChunks) => (nOfChunks > 0)? s.match(new RegExp(`.{1,${nOfChunks}}`, 'g')) : s;

console.log(cutToChunks(str19, 2));

/*====================Exercise019==================*/

console.log(`${"=".repeat(30)}Exercise019${"=".repeat(30)}`);

let str21 = "The quick brown fox jumps over the lazy dog";

let htmlEncoder = (s) => {
    let ObjOfEntites = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": "&apos;" 
    };

    return s.replace(/[&<>"']/g, (entity) => `${ObjOfEntites[entity]}`);
}

console.log(htmlEncoder("<m>sadasd<"))
/*====================Exercise020==================*/

console.log(`${"=".repeat(30)}Exercise020${"=".repeat(30)}`);

let str22 = "0000000";

let formattedString = (s, attachedS, formater = '') => (formater === '|')? `${s.substr(0,attachedS.length+1)}${attachedS}`: `${attachedS}${s.substr(attachedS.length)}`;

console.log(formattedString(str22, '123', '|'));