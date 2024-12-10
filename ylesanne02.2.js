// Nimi: Karl Robert Masing
// Kuupäev: 23.10.2024
// Ülesande number: 3


// Sõidu aeg ja kaugus
let kaugus = 150;
let kiirus = 60;
let soiduAeg = kaugus / kiirus;
console.log(`Sõidu aeg on ${soiduAeg} tundi.`);

// Postituste kuvamine
let postitusteArv = 137;
let lehePostitusteArv = 10;
let lehtedeArv = Math.ceil(postitusteArv / lehePostitusteArv);
let viimaneLehtPostitusteArv = postitusteArv % lehePostitusteArv || lehePostitusteArv;
console.log(`Vajalik lehtede arv: ${lehtedeArv}, viimasel lehel postituste arv: ${viimaneLehtPostitusteArv}.`);

// Serveri töökulu
let voimsus = 400; 
let elektriHind = 0.0969;
let voolutarbimine = voimsus / 1000;
let tookulu = voolutarbimine * elektriHind;
console.log(`Serveri töös hoidmine maksab ühe tunni jooksul: ${tookulu.toFixed(4)} eurot.`);
