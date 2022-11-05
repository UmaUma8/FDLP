function show() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let operador = document.getElementById("operator").value;

    if (operador == "+") {
        addition = num1 + num2

        document.getElementById("+").innerHTML = `El resultat és ${addition}.`
    }

    if (operador == "-") {
        subtraction = num1 - num2

        document.getElementById("-").innerHTML = `El resultat és ${subtraction}.`
    }

    if (operador == "*") {
        multiply = num1 * num2

        document.getElementById("*").innerHTML = `El resultat és ${multiply}.`
    }

    if (operador == "/"){
        divide = num1 / num2

        document.getElementById("/").innerHTML = `El resultat és ${divide}.`
    }


}
