let students = [];

for (let i = 0; i < 5; i++) {

    const age = prompt("Quants anys tens?");
    const univ = prompt("Tens títol universitari o ets a l'atur?");
    const name = prompt("Introdueix el teu nom");

    if (age >= 18 && univ === "si") {
        alert("Enhorabona! Et concedim una beca.");

        students.push(name);
        //students[i] = name;

    } else {
        alert("Ho sentim, no et podem concedir una beca.");
        i--
    }
    
}

alert(`Enhorabona!, heu aconseguit una beca els següents alumnes: ${students.join(" , ")}`);



