function generate() {
    let randNum = Math.floor(Math.random() * quotesArr.length);
    document.querySelector("blockquote").innerText = quotesArr[randNum].quote;
    document.querySelector("cite").innerText = quotesArr[randNum].author;   
}