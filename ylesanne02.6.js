const products = [
    "Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", 
    "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", 
    "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", 
    "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"
  ];
  
  for (let i = 0, count = 0; i < products.length && count < 10; i++) {
    if (["Muna", "Sibul", "Riis"].includes(products[i])) {
      continue;
    }
    console.log(`${count + 1}. ${products[i]}`);
    count++;
  }
  const temperatures = [[5, 8, 12, 10, 7, 9, 11, 14, 16, 13, 10, 6, 4, 3, 2, 4, 6, 8, 10, 12, 15, 17, 18, 16, 13, 10],
  [1, 4, 6, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
  [8, 10, 13, 15, 16, 18, 19, 20, 17, 15, 13, 11, 10, 9, 8, 10, 12, 14, 16, 18, 20, 22, 21, 18, 16, 14],
  [2, 5, 7, 9, 12, 15, 17, 18, 15, 13, 11, 8, 6, 5, 4, 7, 9, 12, 14, 16, 19, 21, 20, 18, 16, 13],
  [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
  [11, 14, 17, 19, 21, 23, 24, 22, 19, 16, 13, 11, 10, 9, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18],
  [9, 11, 14, 16, 18, 20, 22, 21, 18, 16, 13, 11, 9, 8, 7, 10, 13, 16, 18, 21, 23, 24, 23, 21, 18, 15],
  [7, 10, 13, 15, 17, 20, 22, 23, 20, 17, 14, 12, 10, 9, 8, 11, 14, 17, 19, 22, 24, 26, 25, 23, 20, 17],
  [3, 6, 9, 11, 13, 15, 17, 18, 16, 14, 11, 9, 7, 6, 5, 8, 10, 13, 15, 17, 19, 21, 20, 18, 15, 12],
  [1, 3, 5, 7, 9, 11, 13, 15, 12, 9, 7, 5, 3, 2, 3, 6, 8, 10, 12, 15, 17, 19, 18, 16, 13, 11],
  [6, 8, 11, 14, 16, 18, 20, 21, 18, 15, 12, 10, 8, 6, 5, 8, 10, 13, 15, 18, 20, 22, 21, 19, 16, 13],
  [10, 13, 16, 18, 20, 22, 23, 24, 21, 18, 15, 13, 11, 10, 9, 12, 15, 18, 20, 23, 25, 27, 26, 24, 21, 18]
  ];
  
  const months = "Jaanuar, Veebruar, Märts, Aprill, Mai, Juuni, Juuli, August, September, Oktoober, November, Detsember".split(", ");
  
  for (let i = 0; i < temperatures.length; i++) {
    const sum = temperatures[i].reduce((total, temp) => total + temp, 0);
    const average = sum / temperatures[i].length;
    console.log(`${months[i]} keskmine temperatuur: ${average.toFixed(2)}°C`);
  }
  let maxTemp = -Infinity;
let minTemp = Infinity;
let maxMonth = "";
let minMonth = "";

for (let i = 0; i < temperatures.length; i++) {
  const monthTemps = temperatures[i];
  const maxInMonth = Math.max(...monthTemps);
  const minInMonth = Math.min(...monthTemps);

  if (maxInMonth > maxTemp) {
    maxTemp = maxInMonth;
    maxMonth = months[i];
  }
  if (minInMonth < minTemp) {
    minTemp = minInMonth;
    minMonth = months[i];
  }
}

console.log(`Kõrgeim temperatuur oli ${maxTemp}°C kuus ${maxMonth}.`);
console.log(`Madalaim temperatuur oli ${minTemp}°C kuus ${minMonth}.`);