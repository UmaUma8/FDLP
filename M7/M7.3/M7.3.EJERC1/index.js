function square (){
    const height = Number (prompt ("Introdueix l'alçada"));
    const area = height * height;
    alert(`L'àrea del quadrat és de ${area}.`);
}

function triangle(){
    const base = Number (prompt ("Introdueix la base"));
    const height = Number (prompt("Introdueix l'alçada"));
    const area = (base * height) / 2;
    alert(`L'àrea del triangle és de ${area}.`);
}

function rectangle(){
    const height = Number(prompt("Introdueix l'alçada"));
    const base = Number(prompt("Introdueix l'amplada"));
    const area = height * base; 
    alert(`L'àrea del rectangle és de ${area}.`);
}

function circle(){
    const pi = 3.14;
    const radio = Number(prompt("Introdueix el radio"));
    const area = pi * (radio * radio);
    alert(`L'àrea del cercle és de ${area}.`);
}