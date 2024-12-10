function minuNimi() {
    console.log("karlr");
  }
  minuNimi();
  const minuNimiNool = () => console.log("karlr");
minuNimiNool();
function kuupaevEesti(kuupaev) {
    const kuud = [
      "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
      "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
  
    const osad = kuupaev.split(".");
    const päev = osad[0];
    const kuu = kuud[parseInt(osad[1], 10) - 1];
    const aasta = "20" + osad[2];
  
    console.log(`${päev}. ${kuu} ${aasta}`);
  }
  
  kuupaevEesti("19.07.23");
  function arvutaSummaJaKeskmine(...arvud) {
    const kogusumma = arvud.reduce((sum, arv) => sum + arv, 0);
    const keskmine = kogusumma / arvud.length;
  
    return {
      summa: kogusumma,
      keskmine: keskmine
    };
  }
  
  const tulemus = arvutaSummaJaKeskmine(5, 10, 15, 20, 25);
  console.log("Summa:", tulemus.summa);
  console.log("Keskmine:", tulemus.keskmine);

const salajaneSonum = (sonum) => sonum.replace(/[aeiouõäöü]/gi, "*");

console.log(salajaneSonum("Tere, kuidas läheb?"));

const leiaUnikaalsedNimed = (nimed) => {
    const unikaalsed = [];
    nimed.forEach(nimi => {
      if (!unikaalsed.includes(nimi)) {
        unikaalsed.push(nimi);
      }
    });
    return unikaalsed;
  };
  
  const nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
  console.log(leiaUnikaalsedNimed(nimed)); // ["Kati", "Mati", "Mari", "Jüri"]
  