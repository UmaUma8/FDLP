let numRandom = (Math.ceil((Math.random() * 10)));
console.log(numRandom);

let numUser;
let attempts = 0;

while (numRandom !== numUser && attempts < 5){
    attempts++
    numUser = parseInt(prompt("Introdueix un número i endevina'l!."));
    
    if (numRandom === numUser) {
        alert(`Enhorabona, el número és ${numRandom} i has necessitat ${attempts} intents per encertar-lo.`);
    }
}
    if (attempts >= 5) {
        alert(`Has utilitzat massa intents! El número és el ${numRandom}.`);
}