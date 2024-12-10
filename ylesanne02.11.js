// Ostukorvi andmed
const ostukorv = [
    { nimi: "Õun", hind: 0.5, kogus: 4 },
    { nimi: "Piim", hind: 1.2, kogus: 2 },
    { nimi: "Leib", hind: 1.5, kogus: 1 },
    { nimi: "Juust", hind: 2.8, kogus: 1 },
];

// Valib ostukorvi loendi ja kogusumma elemendid
const ostukorvElement = document.getElementById("ostukorv");
const kogusummaElement = document.getElementById("kogusumma");

// Lisa ostukorvi üksused HTML-is loendisse
let kogusumma = 0;
ostukorv.forEach(item => {
    // Arvuta üksuse kogumaksumus
    const itemSum = item.hind * item.kogus;
    kogusumma += itemSum;

    // Loo uus loendi element
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.nimi} (x${item.kogus})</span> <span>${itemSum.toFixed(2)} €</span>`;
    ostukorvElement.appendChild(li);
});

// Kuvab kogusumma HTML-is
kogusummaElement.textContent = `Kogusumma: ${kogusumma.toFixed(2)} €`;
