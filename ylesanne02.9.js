let toode = {
    nimetus: "Piim",
    hind: 3.6,
    kogus: 2,
  
    // Meetod: Koguhinna arvutamine
    koguhind() {
      return this.hind * this.kogus;
    },
  
    // Meetod: Koguse muutmine
    muudaKogus(uusKogus) {
      this.kogus = uusKogus;
    },
  
    // Meetod: Objekti sisu kuvamine
    kuvaInfo() {
      return `${this.nimetus} - ${this.hind.toFixed(2)} EUR - Kogus: ${this.kogus}`;
    }
  };
  
  // Kuvame omadused ja meetodite tulemused
  console.log(toode.kuvaInfo());
  console.log("Koguhind:", toode.koguhind());
  toode.muudaKogus(5);
  console.log("Pärast koguse muutmist:", toode.kuvaInfo());


  const ostukorv = {
    tooted: [
      { nimi: 'Piim', hind: 3.60, kogus: 2 },
      { nimi: 'Leib', hind: 2.00, kogus: 1 },
      { nimi: 'Munad', hind: 1.50, kogus: 6 },
      { nimi: 'Juust', hind: 4.20, kogus: 1 },
      { nimi: 'Tomatid', hind: 2.30, kogus: 3 }
    ],
  
    // Meetod: Kuvab kogu sisu
    kuvaSisu() {
      this.tooted.forEach(toode => {
        console.log(`${toode.nimi} - ${toode.hind.toFixed(2)} EUR - Kogus: ${toode.kogus}`);
      });
    },
  
    // Meetod: Lisab ostukorvi toote
    lisaToode(nimi, hind, kogus) {
      this.tooted.push({ nimi, hind, kogus });
    },
  
    // Meetod: Arvutab kogu ostukorvi summa
    koguSumma() {
      return this.tooted.reduce((summa, toode) => summa + toode.hind * toode.kogus, 0);
    }
  };
  
  // Kuvame ostukorvi sisu
  ostukorv.kuvaSisu();
  
  // Lisame uue toote
  ostukorv.lisaToode('Kohv', 5.80, 2);
  console.log("\nPärast uue toote lisamist:");
  ostukorv.kuvaSisu();
  
  // Kuvame ostukorvi summa
  console.log("\nOstukorvi kogu summa:", ostukorv.koguSumma().toFixed(2), "EUR");
  