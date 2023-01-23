const opgaveKnap = document.getElementById("opgaveKnap");
opgaveKnap.addEventListener("click", opgaver);

function opgaver() {
  /* Lav et program, som skriver “Hello World” i konsollen */

  console.log("Hello World");

  /* Lav et program, som skriver “Hello” og på næste linje skriver “World”  i konsollen */

  console.log("Hello\nWorld");

  /* Lav et program, som skriver følgende i konsollen. → 

*
**
***
**
*

*/

  console.log("*\n**\n***\n**\n*");

  /* Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv.) */

  let navn = "Esben";

  console.log(typeof navn);

  /* - [x]  Print svarene på følgende matematiske operationer ved at skrive det direkte ind i Console.log(): fx, 5 plus 5 => Console.log(5 + 5) - Kender vi ikke operationen, kan vi google den eller finde dem [her](https://www.w3schools.com/js/js_arithmetic.asp):
    
    12 divideret med 3:
    
    4 minus 27: */

  console.log(12 / 3);
  console.log(27 - 4);

  /* Udskriv længden af den her string “GF2 Online”. */

  let string = "GF2 Online";

  console.log(string.length);

  /* Skriv i konsollen kombinationen af de her 2 strings ved brug af deres navn:  */

  let tekst1 = "Hello";
  let tekst2 = "World!";

  console.log(tekst1 + tekst2);

  /* Lav et program som skriver et tilfældig tal i konsollen */

  console.log(Math.random());

  /* Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det bliver skrevet */

  /* BLANK */

  /* I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige. */

  let number = 3;

  if (number % 2 == 0) {
    console.log(number + " er et lige tal.");
  } else {
    console.log(number + " er ikke et lige tal.");
  }

  /* I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int).
Hvis den går op i det skal i skrive: 5 går op i (det tal i har valgt) */

  let number2 = 6;

  if (number2 % 5 == 0) {
    console.log("5 går op i " + number2);
  } else {
    console.log("5 går ikke op " + number2);
  }

  /* Lav opgaven ↑ igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100. */

  let number3 = Math.random();
  let number3flat = Math.floor(number3 * 100);

  console.log(number3, number3flat);

  if (number3flat % 5 == 0) {
    console.log("5 går op i " + number3flat);
  } else {
    console.log("5 går ikke op " + number3flat);
  }

  /* 1. Lav et program som fortæller jer hvilke af de her 3 tal der er størst.
a = 25; b = 33; c = 12; */

  let nummer1 = 25;
  let nummer2 = 33;
  let nummer3 = 12;
  let largest;

  if (nummer1 >= nummer2 && nummer1 >= nummer3) {
    largest = nummer1;
  } else if (nummer2 >= nummer1 && nummer2 >= nummer3) {
    largest = nummer2;
  } else {
    largest = nummer3;
  }

  console.log("Det højeste tal er " + largest);

  /* Lav et program der fortæller hvor varmt det er ud fra en temperatur. Kategorierne er som følger: */

  let temperatur = -10;

  if (temperatur <= 0) {
    console.log("Det er frostvejr");
  } else if (temperatur >= 1 && temperatur <= 10) {
    console.log("Det er meget koldt");
  } else if (temperatur >= 11 && temperatur <= 20) {
    console.log("Det er koldt");
  } else if (temperatur >= 21 && temperatur <= 30) {
    console.log("Det er normalt vejr");
  } else if (temperatur >= 31 && temperatur <= 40) {
    console.log("Det er varmt");
  } else {
    console.log("Det er meget varmt");
  }

  /* Lav et program som omformer tal til ugedage ved brug af conditionals, som eksempel nedenunder: */

  let day = 4;

  if (day == 1) {
    console.log("Den 1. dag i ugen er Mandag.");
  } else if (day == 2) {
    console.log("Den 2. dag i ugen er Tirsdag.");
  } else if (day == 3) {
    console.log("Den 3. dag i ugen er Onsdag.");
  } else if (day == 4) {
    console.log("Den 4. dag i ugen er Torsdag.");
  } else if (day == 5) {
    console.log("Den 5. dag i ugen er Fredag.");
  } else if (day == 6) {
    console.log("Den 6. dag i ugen er Lørdag.");
  } else if (day == 7) {
    console.log("Den 7. dag i ugen er Søndag.");
  }

  /* Lav et program som skriver alle tal fra 1 til 100 ud i konsollen en efter en. */

  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }

  /* Lav et program som skrive alle tal fra 1 til 102, på følgende måde  */

  for (let i = 1; i <= 100; i++) {
    console.log(i, i + 1, i + 2);
  }

  /*Lav spillet FizzBuzz, spillet går ud på at man i en rundkreds (loop) skifter til at tælle.
   */

  for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }

  /* - [ ]  Lav et program som udregner det faktorielle af et tal med et loop.
     I skal lave den både som for-loop og while-loop */

  /* BLANK */

  /* Lav et program som skriver multiplikationstabel for et givet tal: */

  /* BLANK */

  /* Skriv “Viborg” i konsollen ved at trække den ud fra følgende array */

  let byer = ["Randers", "Viborg", "Aarhus", "København"];

  console.log(byer[1]);

  /* Tilføj “Skive” til denne array */

  let byer2 = ["Randers", "Viborg", "Aarhus", "København"];

  byer2.push("Skive");

  console.log(byer2);

  /* Erstat den værdi, uden at ændre direkte i array’et, som ikke passer ind, så array’et stemmer: */

  let talrække = [0, 1, 0, 3, 4, 5, 6];

  talrække[2] = 2;

  console.log(talrække);

  /* Skriv, i konsollen, den største værdi fra følgende array. Selvfølgelig ikke manuelt. */

  const talrække2 = [1, 2, 3, 4, 1491, 55, 99, 300];

  console.log(Math.max(...talrække2));

  /* Sorter den her array */

  let talrække3 = [0, 12, 0, 22, 300, 4, 5];

  talrække3 = talrække3.sort();

  console.log(talrække3);

  /* Sorter den her array i omvendt rækkefølge: */

  let talrække4 = [0, 12, 0, 22, 300, 4, 5];

  talrække4 = talrække4.sort();

  talrække4 = talrække4.reverse();

  console.log(talrække4);

  /* Skriv noget kode eller kode sammen med en knap, så i eksekvere følgende funktion: */

  function helloWorld() {
    console.log("Hello World");
  }

  helloWorld();

  /* - [ ]  I skal lave en **funktion** som tager 2 tal og returnerer summen af dem.
    
    Fx (2,5) = 7; (3,18) = 21 osv. */

  function matematikPlus(a, b) {
    let udregning = a + b;
    console.log(udregning);
  }

  matematikPlus(2, 5);

  /* Lav en funktion som returnerer true hvis man skriver “Ja” som input og false ved alt andet */

  function jaEllerNej() {
    let svar = "True";
    if (svar == "Ja") {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  jaEllerNej();

  /* Lav en funktion som fungere som en password-tjekker, i skal definere et password i koden og derefter lave en funktion som kun skriver true hvis man skriver det rigtige kodeord og false hvis det er forkert */

  let correctPassword = "Mangfjgjdk";

  function passwordChecker(password) {
    if (password == correctPassword) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  passwordChecker("Mangfjgjdk1");

  /* - [ ]  Lav en **funktion** som i opgaven før, men for brugernavn. Forskellen er at et brugernavn ikke er case-sensitiv, altså at den er ligeglad med store og små bogstaver.
Fx hvis brugernavnet et “Mags”, skal den godkende alle måder det er skrevet på uanset om det starter med stort eller ej. */

  let correctUsername = "Mangfjgjdk";
  let correctUsernameLowerCase = correctUsername.toLowerCase();

  console.log(correctUsernameLowerCase);
  function usernameChecker(username) {
    username = username.toLowerCase();
    console.log(username);
    if (username == correctUsernameLowerCase) {
      console.log("Username is true");
    } else {
      console.log("Username is wrong");
    }
  }

  usernameChecker("Mangfjgjdk1");
  console.log("Correct password is " + correctUsername);

  alert("Tjek din consol.");

  /* Lav et program som summere følgende array, uden brug af Aggregat Funktioner:
talrække = [0, 12, 0, 22, 300, 4, 5] */

  let tal = [0, 12, 0, 22, 300, 4, 5];

  let sum = tal[0] + tal[1] + tal[2] + tal[3] + tal[4] + tal[5] + tal[6];

  console.log(sum);

  /* - [ ]  Lav et program som skriver alle værdierne i dette array, ved brug af foreach */

  let tal2 = [0, 12, 0, 22, 300, 4, 5];

  tal2.forEach((element) => console.log(element));

  /* Lav et program som returnere indexet af det højeste tal, altså giver dens placering i begge disse arrays */

  let tal3 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
  let tal4 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];

  let højesteTal1 = Math.max(...tal3);
  let pladsIArray1 = tal3.indexOf(højesteTal1);
  console.log(pladsIArray1);

  let højesteTal2 = Math.max(...tal4);
  let pladsIArray2 = tal4.indexOf(højesteTal2);
  console.log(pladsIArray2);

  /* Lav et program som tæller hvor mange gange 12, står i den her array: */

  let tal5 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];

  function tæller(array, tal) {
    let tæller = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] == tal) {
        tæller++;
      }
    }
    console.log(tæller);
  }

  tæller(tal5, 12);

  /* Lav et program som tæller, hvor mange værdier som er positive i dette array: (0 er ikke positiv i denne opgave) */

  let tal6 = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12];

  function positive(array) {
    var tæller = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        tæller++;
      }
    }
    console.log("Positive tal: " + tæller);
  }

  positive(tal6);

  /* Lav et program som finder gennemsnittet af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner: */

  let tal7 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];

  let sumTotal = 0;

  for (let i = 0; i < tal7.length; i++) {
    sumTotal += tal7[i];
  }

  console.log("Gennemsnittet er " + sumTotal / tal7.length);

  /* Ved brug af object formatet i JS, lav objekter på følgende måde:  */

  const person1 = {
    firstName: "Anders",
    lastName: "Andersen",
    age: 30,
    eyeColor: "grøn",
  };
  const person2 = {
    firstName: "Mads",
    lastName: "Madsen",
    age: 32,
    eyeColor: "blå",
  };
  const person3 = {
    firstName: "Mads",
    lastName: "Madsen",
    age: 55,
    eyeColor: "brun",
  };

  if (person1.age > 30 && (person1.eyeColor == "blå" || person1.eyeColor == "grøn" || person1.eyeColor == "rød")) {
    console.log(person1.firstName + " " + person1.lastName);
  } else {
    console.log("No match.");
  }

  if (person2.age > 30 && (person1.eyeColor == "blå" || person1.eyeColor == "grøn" || person1.eyeColor == "rød")) {
    console.log(person1.firstName + " " + person1.lastName);
  } else {
    console.log("No match.");
  }

  if (person3.age > 30 && (person1.eyeColor == "blå" || person1.eyeColor == "grøn" || person1.eyeColor == "rød")) {
    console.log(person1.firstName + " " + person1.lastName);
  } else {
    console.log("No match.");
  }

  /* let number = 1;
let person = "person" + number;
console.log(person);

for (let number = 0; number < 4; number++) {
  if ((person.age > 30 && person.eyeColor == "blå") || person.eyeColor == "grøn" || person.eyeColor == "rød") {
    console.log(person.firstName + " " + person.lastName);
  } else {
    console.log("No match." + person);
  }
} */

  /* Lav et program, som skriver følgende i konsollen. 
Den her gang skal det være med et loop, som skrive linjerne enkeltvis. 
Man skal hurtig og let kunne ændre hvor mange linjer den skriver. 
Man skal bruge 2 loops til opgaven.  */

  let linjer = 10; /* x6 */
  for (let l = 1; l < linjer; l++) {
    for (var i = 1; i <= 3; i++) {
      console.log("* ".repeat(i));
    }
    for (var i = 2; i >= 1; i--) {
      console.log("* ".repeat(i));
    }
  }

  /* Lav et program som finder gennemsnittet af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner: */

  const object = {
    array1: [2, 3, 19, 2, -1, -9, 10, 33],
    array2: [3, 57, -8, 2, -21, -10, 11, 32],
    array3: [100, -100, 200, -200, 10],
  };

  let sumTotal1 = 0;
  let sumTotal2 = 0;
  let sumTotal3 = 0;

  for (let i = 0; i < object.array1.length; i++) {
    sumTotal1 += object.array1[i];
  }

  for (let i = 0; i < object.array2.length; i++) {
    sumTotal2 += object.array2[i];
  }

  for (let i = 0; i < object.array3.length; i++) {
    sumTotal3 += object.array3[i];
  }

  let gennemsnit1 = sumTotal1 / object.array1.length;
  let gennemsnit2 = sumTotal2 / object.array2.length;
  let gennemsnit3 = sumTotal3 / object.array3.length;

  console.log("Gennemsnittet er " + sumTotal1 / object.array1.length);
  console.log("Gennemsnittet er " + sumTotal2 / object.array2.length);
  console.log("Gennemsnittet er " + sumTotal3 / object.array3.length);

  console.log("Højeste tal i de 3 arrays er: " + Math.max(gennemsnit1, gennemsnit2, gennemsnit3));
}
