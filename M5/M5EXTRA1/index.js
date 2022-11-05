const numRandom = Math.ceil(Math.random() * 500) + 1;
console.log(numRandom)
let numUser;

while (numUser !== numRandom) {
    numUser = Number(prompt("Introdueix un número"));
    let difference = numRandom - numUser;


if (difference >= 50) {
    alert(("Fred, fred: el teu número és més gran"));
}

if (difference < 50) {
    alert(("Fred, fred: el teu número és més petit"));
}

if (difference >= 15 && difference < 50) {
    alert(("Tebi, Tebi: el teu número és més gran"));
}

if (difference < 15) {
    alert(("Calent, calent: el teu número és més petit"));
}

if (difference === 0) {
    alert(("Enhorabona, has endevinat"))
}

}