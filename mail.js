function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "esbenvh@gmail.com",
        Password : "E2D3B0D4A60B668E02B90670B485A60DFCA9",
        To : 'esbenvh@gmail.com',
        From : "esbenvh@gmail.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }