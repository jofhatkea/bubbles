"use strict";

// create divs
const app = document.querySelector("#app");

const numberOfBubbles = 300;

for( let i=0; i < numberOfBubbles; i++ ) {
    const div = document.createElement("div");
    app.appendChild(div);
}

const divs = document.querySelectorAll("#app div");

divs.forEach(function(div){
    //div.style.transform = `translate(50vw, 50vh)`
    div.addEventListener("mouseenter", function(){
        div.style.transform= `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        div.style.backgroundColor = `hsl(${Math.random()*360}, ${Math.random()*100}%, 50%)`;
        
    });
});