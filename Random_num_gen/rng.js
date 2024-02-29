const randomButton = document.getElementsByClassName("randomNumButton")[0];
let min = 10;
let max = 20;
let numberSpot = document.getElementsByClassName("randomNumber")[0];



randomButton.onclick = function() {
    numberSpot.textContent = Math.floor(Math.random() * max) + min;
}

