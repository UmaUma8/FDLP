const nomUser = prompt('Introdueix el teu nom i cognoms');
console.log(nomUser);

const age = prompt('¿Quants anys tens?');
console.log(age);

alert(`Et dius ${nomUser} i tens ${age} anys.`);

const message = document.getElementById('message').innerHTML = `Hola, et dius ${nomUser} i tens ${age} anys.`;
console.log(message);

