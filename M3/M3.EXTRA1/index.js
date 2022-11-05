function showDoble() {
    const number = Number(document.getElementById("numUser").value);

    const doble = number * 2;
    console.log(doble);

    document.getElementById("doble").innerHTML = `El doble d'aquest número és el ${doble}.`;

}

function showTriple() {
    const number = Number(document.getElementById("numUser").value);

    const triple = number * 3;
    console.log(triple);

    document.getElementById("triple").innerHTML = `El triple d'aquest número és el ${triple}.`;

}

