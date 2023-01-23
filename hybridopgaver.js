const helloWorldKnap = document.getElementById("helloWorld");
helloWorldKnap.addEventListener("click", helloWorld);

const tæltalKnap = document.getElementById("tælTal");
tæltalKnap.addEventListener("click", tælTal);

const tæltalKnapHtml = document.getElementById("tælTal2");
tæltalKnapHtml.addEventListener("click", taltællerFunc);

/* Lav en knap som eksekvere følgende funktion: Altså et event

alert("Hello World!"); */

function helloWorld() {
  alert("Hello World!");
}

/* Lav en knap som tæller et tal i konsollen. */

function tælTal() {
  let tælTal = 1;
  console.log(tælTal);
  alert("Tjek din consol.");
}

/* Lav en knap som tæller et tal i ude på hjemmesiden ved brug af <p></p>.
Altså at den ændre taller hver gang man trykker */

let talTæller = 1;

function taltællerFunc() {
  document.getElementById("tælTalHtml").innerHTML = talTæller;
  talTæller *= 2;
}

/* Lav en knap som skriver en ny linje med et nyt tal, hver gang man trykker på den. */

const skrivLinjeKnap = document.getElementById("tilføjLinje");
skrivLinjeKnap.addEventListener("click", addElement);

let talTæller2 = 1;

function addElement() {
  var para = document.createElement("p");
  var node = document.createTextNode(talTæller * Math.floor(Math.random() * 100));
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
  talTæller2++;
}

/* Erstat en knaps nuværende design med et billede som i selv finder */

/* Done */

/* Lav en knap som udskriver et tilfældig tal mellem 1 og 10 */

const randomNumber = document.getElementById("randomNumberKnap");
randomNumber.addEventListener("click", randomNumberFunc);

function randomNumberFunc() {
  console.log(Math.ceil(Math.random() * 10));
  alert("Tjek din consol.+");
}

/* Lav en knap som afspiller en lyd når man trykker på den */

const playSound = document.getElementById("playSoundKnap");
playSound.addEventListener("click", playSoundFunc);

function playSoundFunc() {
  var audio = new Audio("sound.wav");
  audio.play();
}

const goToGoogle = document.getElementById("goToGoogleKnap");
goToGoogle.addEventListener("click", redirectToGoogle);

function redirectToGoogle() {
  window.open("https://www.google.com");
}

/* Lav en knap som skifter dens farve eller form hver gang man trykker på den */

const skiftFarve = document.getElementById("skiftFarveKnap");
skiftFarve.addEventListener("click", skiftFarveFunc);

function skiftFarveFunc() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  document.getElementById("skiftFarveKnap").style.backgroundColor = "#" + randomColor;
}
