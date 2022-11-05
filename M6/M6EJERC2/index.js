const numPeople = Number(prompt("De quantes persones vols calcular l'edat mitjana?"));
const media = averageAge(numPeople);

function averageAge(numPeople) {

    let numero = [];
    let suma = 0

    for (let i = 0; i < numPeople; i++) {
        numero[i] = Number(prompt("Introdueix les edats de les persones d'una en una"));
        console.log(suma)
        const isValid = numero[i] > 0 && numero[i] < 120

        if (isValid) {
            suma += numero[i]; // suma = suma + numero[i]
        }

        if (!isValid) {
            alert("Introdueix un número entre 0 i 120");
            i--
        }

    }

    console.log(suma / numPeople)
    const media = suma / numPeople;

    return document.getElementById("result").innerHTML = `El resultat de la media és ${media}`;

}