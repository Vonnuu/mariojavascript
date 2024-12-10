// Algne massiiv
let coinsAndNotes = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

// Uus massiiv müntide jaoks
let coins = [];

// Indeks, et while-tsüklit kontrollida
let index = 0;

// Tingimus, et kontrollida tsükli töötamist
while (index < coinsAndNotes.length) {
    let value = coinsAndNotes[index];

    // Kontrollime, kas väärtus on münt (väärtus <= 2)
    if (value <= 2) {
        coins.push(value);
    }

    // Suurendame indeksit
    index++;
}

// Arvutame müntide kogusumma
let totalSum = 0;
let coinCount = coins.length;

index = 0;
while (index < coinCount) {
    totalSum += coins[index];
    index++;
}

// Kuvame tulemused
console.log("Müntide arv:", coinCount);
console.log("Müntide summa:", totalSum.toFixed(2));
console.log("Mündid massiivis:", coins);
