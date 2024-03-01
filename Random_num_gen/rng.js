const randomButton = document.getElementsByClassName("randomNumButton")[0];
let numberSpot = document.getElementsByClassName("randomNumber")[0];

randomButton.onclick = function() {
    const min = document.getElementById("minNumber").valueAsNumber;
    const max = document.getElementById("maxNumber").valueAsNumber;
    if (min <= 0) {
        alert("Minimum number must be positive and greater than 0");
        return;
    }
    if (max <= 0 || max <= min) {
        alert("Maximum number must be positive and greater than minimum number");
        return;
    }
    numberSpot.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(document.getElementById("minNumber").valueAsNumber);    
}

