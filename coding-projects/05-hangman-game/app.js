const figures = document.querySelectorAll(".figure-part");
const wordArea = document.querySelector("#word");
const wrongLetters = document.querySelector("#wrong-letters");
let word;
let minPlace = "_ "
let placeHolder = [];

async function getWord() {
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    if (!response.ok) throw new Error("something went wrong!");
    const wordFromApi = await response.json();
    word = wordFromApi[0];
    splittedWord = word.split("")
    console.log(wordFromApi);
    console.log(word);
    for (let i = 0; i < word.length; i++) {
        placeHolder.push(minPlace)
    }
    wordArea.innerHTML = placeHolder.join("");
}

window.onload = ()=>{
    getWord()
}


// const figure1 = figures[0];
// const figure2 = figures[1];
// const figure3 = figures[2];
// const figure4 = figures[3];
// const figure5 = figures[4];
// const figure6 = figures[5];

figures.forEach((item) => {
    item.style.display = "none";
});

// word.innerHTML = ""

// setTimeout(() => {
//     console.log(word);
// }, 1000);


window.addEventListener("keyup", (event)=>{
    if (word.includes(event.key)) {
        for (let i = 0; i < word.length; i++) {
            if (splittedWord[i] == event.key) {
                placeHolder[i] = event.key.toLocaleUpperCase()+" "
            }
        }
    } else {
        wrongLetters.innerHTML += (event.key.toLocaleUpperCase()+" - ")
    }

    wordArea.innerHTML = placeHolder.join("")
})
