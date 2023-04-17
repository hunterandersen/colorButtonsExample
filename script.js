const placeholderDiv = document.querySelector("#placeholder");

const colorsArray = ["red", "green", "blue", "orange", "yellow", "maroon", "pink"];

let currentColorIndex = 0;
const colorButton = document.createElement("button");
colorButton.textContent = `Toggle Colors`;
placeholderDiv.appendChild(colorButton);
colorButton.addEventListener("click", ()=>{
    document.querySelector("main").style.color = colorsArray[currentColorIndex++ % colorsArray.length];
});

//Modulus is really neat


//Hunter hates repetitious code
//Fix this code so that it doesn't repeat the button stuff
//3 times? I want only once!