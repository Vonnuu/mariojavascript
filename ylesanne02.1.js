// Nimi: Karl Robert Masing
// Kuupäev: 23.10.2024
// Ülesande number: 2

// Kellaaeg
let hours = 2;
let minutes = 38;
let seconds = 59;
let time = `${hours}:${minutes}:${seconds}PM`; 
console.log(time);

// Tsitaat lause sees
let quote = "The only limit to our realization of tomorrow is our doubts of today.";
let author = "Franklin D. Roosevelt";
let formattedQuote = `"${quote}" - ${author}`;
console.log(formattedQuote);

// Mallide kasutamine
let firstName = "Jüri";
let lastName = "Jurakas";
let initials = `${firstName.charAt(0)}.${lastName.charAt(0)}`;
console.log(`${firstName} ${lastName} nimetähed on ${initials}.`);

// Perenime pikkus
let fullName = "Jurakas, Jüri";
let commaIndex = fullName.indexOf(","); 
let surname = fullName.substring(0, commaIndex).toUpperCase(); 
console.log(surname);
console.log(surname.length);

// E-posti aadressi muutmine
let epost = "karrolk@netlog.com";
let modifiedEmail = epost.replace(/@netlog/, '@gmail');
console.log(modifiedEmail);

// Andmerida analüüs
let dataString = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";
let dataArray = dataString.split(",");
let ipAddress = dataArray[dataArray.length - 1];
let username = dataArray[3].split("@")[0];
console.log(ipAddress);
console.log(username);