/*
document.querySelector(".green").addEventListener("click", seen)

let count = 0;
const blue = document.querySelector(".blue");

function seen() {
    if (count == 1) {
        blue.classList.remove("invisible");
        count = 0;
        console.log("clicked");
    }
    else {
        blue.classList.add("invisible");
        count = 1;
        console.log("clicked else");
    }
}*/

// get the green button
const greenButton = document.querySelector('.green');
// get the blue shape
const blueShape = document.querySelector('.blue');
// add an event listener to the green button
greenButton.addEventListener('click', () => {
    // toggle the show class on the blue shape
    blueShape.classList.toggle('show');
});