function showMult() {
    const divisor = parseInt(document.getElementById("num1").value);
    const dividend = parseInt(document.getElementById("num2").value);

    if (divisor < 2 || divisor > 7 || isNaN(divisor)) {
        alert("Has introduit un caràcter no vàlid. Introdueix un número divisor entre el 2 i el 7.")
    }

    else if (dividend % divisor == 0) {
        document.getElementById("mult").innerHTML = `El ${dividend} és múltiple de ${divisor}.`;

    } else {
        document.getElementById("mult").innerHTML = `El ${dividend} no és múltiple de ${divisor}.`;
    }

}