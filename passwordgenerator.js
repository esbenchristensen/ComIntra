function updateLengthLabel() {
     let lengthRange = document.getElementById("lengthRange");
     let lengthLabel = document.getElementById("lengthLabel");
    
      // indstil værdien af lengthRange-elementet til 10, hvis den er mindre end 10
     if (lengthRange.value < 10) {
      lengthRange.value = 10;
     }
     lengthLabel.textContent = lengthRange.value;
    }
    
      // funktion til at generere en adgangskode baseret på de angivne parametre
     function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
        // opsætte tegnsættene for adgangskoden
     let charSet = "";
     if (includeLowercase) {
     charSet += "abcdefghijklmnopqrstuvwxyzæåø";
     }
     if (includeUppercase) {
     charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZÆÅØ";
     }
     if (includeNumbers) {
     charSet += "0123456789";
     }
     if (includeSpecial) {
     charSet += "!@#$%^&*()_+-=[]{}|;':\"<>,./?";
     }
    
        // generere adgangskoden ved at vælge tilfældige tegn fra tegnsættet
     let password = "";
     for (let i = 0; i < length; i++) {
     password += charSet.charAt(Math.floor(Math.random() * charSet.length));
     }
    
     return password;
     }
    
      // Forbind formularelementernes værdier med funktionens parametre og generer adgangskoden
     function generateAndShowPassword() {
     let length = document.getElementById("lengthRange").value;
     let includeLowercase = document.getElementById("includeLowercase").checked;
     let includeUppercase = document.getElementById("includeUppercase").checked;
     let includeNumbers = document.getElementById("includeNumbers").checked;
     let includeSpecial = document.getElementById("includeSpecial").checked;
    
        // generere adgangskoden
     let password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
    
        // Få elementet for adgangskodeboksen
     let passwordBox = document.getElementById("passwordBox");
    
        // opdatere indholdet af elementet med den genererede adgangskode
     passwordBox.textContent = password;
     }