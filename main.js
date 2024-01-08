const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passw1El = document.getElementById("passw1");
let passw2El = document.getElementById("passw2");

let randomIndex = [characters[(Math.floor(Math.random() * characters.length))]];

function passwordsGenerator() {
    passw1El.textContent = [];
for (let i = 0; i < 15; i++) {
    passw1El.textContent += characters[(Math.floor(Math.random() * characters.length))]
}

passw2El.textContent = [];
for (let i = 0; i < 15; i++) {
    passw2El.textContent += characters[(Math.floor(Math.random() * characters.length))]
    }
}

function copyPassw(password) {
    navigator.clipboard.writeText(password.textContent);
    alert ("Password " + password.textContent + " was copied to the clipboard");
}


function reset() {
    passw1El.textContent = [];
    passw2El.textContent = [];
}

