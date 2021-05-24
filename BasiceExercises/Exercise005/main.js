
let ele = document.getElementById("word-container"),
    eleText = `${ele.innerText || ele.textContent} `,
    eleNewText = "";

function animatedWords() {
    eleText =  eleText[eleText.length - 1] + eleText.substring(0, eleText.length - 1);
    ele.innerText = eleText;
}

setInterval(function(){
    animatedWords();
}, 150);

