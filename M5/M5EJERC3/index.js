let numRandom = (Math.ceil((Math.random() * 10)));
console.log(numRandom);

do {
    numUser = parseInt(prompt("Introdueix un número i endevina'l!."));

} while (numRandom !== numUser);

if (numRandom === numUser) {
    alert(`Has endevinat! El número era el ${numRandom}.`);
}
