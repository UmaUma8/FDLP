const numStudents = parseFloat(prompt("Introdueix el número d'alumnes del que desitjes calcular la nota mitja"));

let suma = 0;
let count = 0

while (count < numStudents) {
    const nota = parseFloat(prompt("Introdueix les notes dels alumnes"));

    if (nota >= 0 && nota <= 10) {
        suma += nota;
        count++
    }

    if (nota < 0 || nota > 10) {
        alert('Introdueix notes entre 0 i 10');
    }

}

const result = suma / numStudents

if (result < 5) {
    alert(`La nota mitjana de la classe és de ${result} i està suspesa. Els alumnes haurien de preguntar els seus dubtes i treballar més`);
}

else if (result < 7) {
    alert(`La nota mitjana de la classe és de ${result} i és bona, però els alumnes haurien de millorar el treball personal`);
}

else {
    alert(`Enhorabona! La nota mitjana de la classe és de ${result} i es correspon amb l'esforç realitzat`)
}

