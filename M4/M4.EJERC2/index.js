const name = prompt("Com et dius?");
const age = prompt(`${name}, quants anys tens?`);

if (age > 0 && age <= 5) {
    document.getElementById("preesc").innerHTML = `${name}, pertanyes al grup de Preescolar.`

} else if (age >= 6 && age <= 11) {
    document.getElementById("prim").innerHTML = `${name}, pertanyes al grup de Primària.`

} else if (age >= 12 && age <= 15) {
    document.getElementById("eso").innerHTML = `${name}, pertanyes al grup de ESO.`

} else if (age >= 16 && age <= 17) {
    document.getElementById("batx").innerHTML = `${name}, pertanyes al grup de Batxillerat.`

} else if (age >= 18) {
    document.getElementById("fpUni").innerHTML = `${name}, pertanyes al grup de FP o Universitat.`

} else
    document.getElementById("error").innerHTML = `${name}, introdueix un valor vàlid.`
