const nomUser = prompt('Introdueix el teu nom i cognoms');
console.log(nomUser);

const age = prompt('¿Quants anys tens?');
console.log(age);

if (age >= 18) {

    alert(`${nomUser} ets major d'edat.`);

} else {
    
    alert(`${nomUser} ets menor d'edat.`)
}


