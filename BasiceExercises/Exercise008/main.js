

let enteredNum = prompt("inter any number between 1 and 10");

function guess(num){
    return (Math.ceil(Math.random() * 10) === num)? "Good Work": "Not matched";
}

console.log(guess(5));