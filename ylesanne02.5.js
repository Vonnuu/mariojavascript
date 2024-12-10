let nmbr = prompt("Sisestage number:");

switch (true) {
    case (nmbr > 0):
        console.log("Sisestatud number on positiivne.");
        break;
    case (nmbr < 0):
        console.log("Sisestatud number on negatiivne.");
        break;
    case (nmbr == 0):
        console.log("Sisestatud number on null.");
        break;
    default:
        console.log("Palun sisestage kehtiv number.");
}

let bookings = prompt("Sisestage broneeringute arv:");

switch (true) {
    case (bookings == 1 || bookings == 2):
        console.log("Valige laud kahele inimesele.");
        break;
    case (bookings == 3 || bookings == 4):
        console.log("Valige laud neljale inimesele.");
        break;
    case (bookings == 5 || bookings == 6):
        console.log("Valige laud kuuele inimesele.");
        break;
    case (bookings > 6):
        console.log("Valige suur laud.");
        break;
    default:
        console.log("Palun sisestage kehtiv broneeringute arv.");
}