let prevAuthor = null;
function generate() {
    let randNum = Math.floor(Math.random() * quotesArr.length);
    sessionStorage.setItem(document.querySelector("blockquote").innerText, document.querySelector("cite").innerText);
    prevQuote = document.querySelector("blockquote").innerText;
    prevAuthor = document.querySelector("cite").innerText;
    document.querySelector("blockquote").innerText = quotesArr[randNum].quote;
    document.querySelector("cite").innerText = quotesArr[randNum].author;
    document.getElementById("background").classList.add("img");
    sessionStorage.clear();
}
generate()

function previous() { 
    document.querySelector("blockquote").innerText = prevQuote;
    document.querySelector("cite").innerText = prevAuthor;   
}

function gen_background() {
    let bgNum = Math.floor(Math.random() * 12);
    document.getElementById("background").setAttribute("class", "")

    switch (bgNum) {
        case 1:
            document.getElementById("background").classList.add("img1");
            break;
        case 2:
            document.getElementById("background").classList.add("img2");
            break;
        case 3:
            document.getElementById("background").classList.add("img3");
            break;
        case 4:
            document.getElementById("background").classList.add("img4");
            break;
        case 5:
            document.getElementById("background").classList.add("img5");
            break;
        case 6:
            document.getElementById("background").classList.add("img6");
            break;
        case 7:
            document.getElementById("background").classList.add("img7");
            break;
        case 8:
            document.getElementById("background").classList.add("img8");
            break;
        case 9:
            document.getElementById("background").classList.add("img9");
            break;
        case 10:
            document.getElementById("background").classList.add("img10");
            break;
        case 11:
            document.getElementById("background").classList.add("img11");
            break;
        case 12:
            document.getElementById("background").classList.add("img12");
            break;
        default:
            break;
    }
}