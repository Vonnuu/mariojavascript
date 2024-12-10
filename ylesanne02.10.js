const nimed1 = [
    "mari maasikas", "jaan jõesaar", "kristiina kukk", 
    "margus mustikas", "jaak järve", "kadi kask", 
    "Toomas Tamm", "Kadi Meri", "Leena Laas", 
    "Madis Mets", "Hannes Hõbe", "Anu Allikas", 
    "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", 
    "Liis Lepik", "Kalle Kask", "Tiina Teder", 
    "Kaidi Koppel", "tiina Toom"
  ];
  
  // a) Kõik algustähed suureks
  const korrektnimed1 = nimed1.map(nimi => 
    nimi
      .split(" ")
      .map(sõna => sõna[0].toUpperCase() + sõna.slice(1).toLowerCase())
      .join(" ")
  );
  
  console.log("Korrigeeritud nimed1:", korrektnimed1);
  
  // b) E-posti aadressid
  const emailid = korrektnimed1.map(nimi => 
    nimi.split(" ")[1].toLowerCase() + "@metshein.com"
  );
  
  console.log("E-posti aadressid:", emailid);
  
  // c) Funktsioon nime otsimiseks
  function otsiNimi(nimi) {
    const tulemused = korrektnimed1.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    return tulemused.length > 0 ? tulemused : "Nime ei leitud.";
  }
  
  console.log("Otsingu tulemus:", otsiNimi("Mari"));
  console.log("Otsingu tulemus:", otsiNimi("Toom"));
  
  const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" }
  ];
  
  const arvutaVanus = (isikukood) => {
    const aasta = parseInt(isikukood[0]) < 5 ? 1900 : 2000;
    const sünniAasta = aasta + parseInt(isikukood.slice(1, 3));
    const sünniKuu = parseInt(isikukood.slice(3, 5)) - 1;
    const sünniPäev = parseInt(isikukood.slice(5, 7));
  
    const sünniKuupäev = new Date(sünniAasta, sünniKuu, sünniPäev);
    const tänaneKuupäev = new Date();
    const vanus = tänaneKuupäev.getFullYear() - sünniAasta;
  
    return { sünniKuupäev, vanus };
  };
  
  inimesteAndmed.forEach(isik => {
    const { sünniKuupäev, vanus } = arvutaVanus(isik.isikukood);
    console.log(`${isik.nimi}: Sünniaeg: ${sünniKuupäev.toLocaleDateString()}, Vanus: ${vanus}`);
  });
  
  const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] }
  ];
  
  opilased.forEach(opilane => {
    const parimTulemus = Math.max(...opilane.tulemused);
    const keskmineTulemus = (opilane.tulemused.reduce((sum, val) => sum + val, 0) / opilane.tulemused.length).toFixed(2);
    console.log(`${opilane.nimi}: Parim tulemus: ${parimTulemus}, Keskmine tulemus: ${keskmineTulemus}`);
  });
  