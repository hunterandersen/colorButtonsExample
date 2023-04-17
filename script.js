const placeholderDiv = document.querySelector("#placeholder");

const colorsArray = ["red", "green", "blue", "orange", "yellow", "maroon", "pink"];

for (let i = 0; i < colorsArray.length; i++){
    const tempButton = document.createElement("button");
    tempButton.textContent = `${colorsArray[i][0].toUpperCase()}${colorsArray[i].slice(1)}`;
    placeholderDiv.appendChild(tempButton);
    tempButton.addEventListener("click", ()=>{
        document.querySelector("main").style.color = colorsArray[i];
    });
}


//Hunter hates repetitious code
//Fix this code so that it doesn't repeat the button stuff
//3 times? I want only once!