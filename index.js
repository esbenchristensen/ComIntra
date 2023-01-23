function opgaver() {
  console.log("Test");
}

let usernames = ["esben", "freja", "oliver", "mathias"];

let emails = ["esbenvh@gmail.com", "Freja@gmail.com", "Oliver@gmail.com", "Mathias@gmail.com"];

let names = ["Esben Christensen", "Freja Pedersen", "Oliver Larsen", "Mathias Steenberg"];

let profilePictures = ["logo.png", "Freja Pedersen", "Oliver Larsen", "Mathias Steenberg"];

function redirect() {
  window.location.pathname = "/dashboard.html";
}

function login() {
  let idinput = document.getElementById("idinput").value.toLowerCase();
  localStorage.setItem("idinput", idinput);

  for (let i = 0; i < usernames.length; i++) {
    if (idinput === usernames[i]) {
      redirect();
      alert("Logger ind!");
      break;
    }
  }
}

let activeUserId = localStorage.getItem("idinput");

let userFirstNameFirstLetter = activeUserId.slice(0, 1).toLocaleUpperCase();

let userFirstNameLastletters = activeUserId.slice(1, activeUserId.length).toLocaleLowerCase();

let userFirstName = userFirstNameFirstLetter + userFirstNameLastletters;

let activeUserPlace = usernames.indexOf(activeUserId);

let activeUserEmail = emails.at(activeUserPlace);

let activeUserName = names.at(activeUserPlace);

let activeUserInfo = activeUserId + " " + activeUserEmail + " " + activeUserName + " " + userFirstName;

console.log(activeUserInfo);

document.getElementById("userFirstName").innerHTML = userFirstName;
document.getElementById("activeUserId").innerHTML = activeUserId;
document.getElementById("activeUserName").innerHTML = activeUserName;

function passwordReset() {
  document.getElementById("passwordIsReset").innerHTML =
    activeUserName + ", der er sendt et nulstillingslink til din mail " + activeUserEmail + ".";
}

/* Send reset email vha. ElasticEmail og Smptp */

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "esbenchristensen9900@gmail.com",
    Password: "3A69440A5768CE04C3BACBE99014E3309988",
    To: activeUserEmail,
    From: "esbenchristensen9900@gmail.com",
    Subject: "Test email",
    Body: "<h1>ComIntra</h1><h2><strong>Nulstil email</strong></h2><p>Klik på knappen for at nulstill din kode</p><button>Nulstil kode</button>",
  }).then((message) => alert("Der er sendt et nulstillingslink til din email."));
}
