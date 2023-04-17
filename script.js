const placeholderDiv = document.querySelector("#placeholder");

const button1 = document.createElement("button");
button1.textContent = "Red";
placeholderDiv.appendChild(button1);
button1.addEventListener("click", ()=>{
    document.querySelector("main").style.color = "red";
});

const button2 = document.createElement("button");
button2.textContent = "Green";
placeholderDiv.appendChild(button2);
button2.addEventListener("click", ()=>{
    document.querySelector("main").style.color = "green";
});

const button3 = document.createElement("button");
button3.textContent = "Blue";
placeholderDiv.appendChild(button3);
button3.addEventListener("click", ()=>{
    document.querySelector("main").style.color = "blue";
});