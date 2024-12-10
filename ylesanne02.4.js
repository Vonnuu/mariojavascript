let temperatuur = prompt("Palun sisestage temperatuur kraadides:");
        temperatuur = parseFloat(temperatuur);

        if (temperatuur > 25) {
            console.log("Väga kuum ilm!");
        } else if (temperatuur >= 15 && temperatuur <= 25) {
            console.log("Mõnus temperatuur");
        } else {
            console.log("Jahe ilm");
        }

        // Kasutajanime kontroll
        let kasutajanimi = prompt("Palun sisestage oma kasutajanimi:");
        
        if (kasutajanimi === "admin") {
            console.log("Tere, administraator!");
        } else {
            console.log("Tere, külaline!");
        }

        // Ürituse piletite hind
        let piletitüüp = prompt("Palun sisestage piletitüüp (täispilet/sooduspilet):");
        let vanus = prompt("Palun sisestage oma vanus:");
        vanus = parseInt(vanus);
        let hind;

        if (piletitüüp === "täispilet") {
            if (vanus < 18) {
                hind = 10;
            } else if (vanus >= 18 && vanus < 65) {
                hind = 20;
            } else {
                hind = 15;
            }
        } else if (piletitüüp === "sooduspilet") {
            if (vanus < 18 || vanus >= 65) {
                hind = 8;
            } else {
                hind = 15;
            }
        }

        console.log("Pileti hind on: " + hind + " eurot.");