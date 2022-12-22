let mail = "esbenchristensen9900@gmail.com"



function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "esbenvh@gmail.com",
        Password : "E2D3B0D4A60B668E02B90670B485A60DFCA9",
        To : mail,
        From : "esbenvh@gmail.com",
        Subject : "Test email",
        Body : "<h1>ComIntra</h1><h2><strong>Nulstil email</strong></h2><p>Klik på knappen for at nulstill din kode</p><button>Nulstil kode</button>"
    }).then(
      message => alert("Der er sendt et nulstillingslink til din email.")
    );
    }

    