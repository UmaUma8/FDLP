function show() {
    const numUser = Number(document.getElementById("num1").value);
    const numUser2 = Number(document.getElementById("num2").value);
    let operador = document.getElementById("operator").value;

    switch (operador) {
        case "+":
            addition = numUser + numUser2;
            document.getElementById("+").innerHTML = `El resultat és ${addition}.`;
            break;

        case "-":
            subtractor = numUser - numUser2;
            document.getElementById("-").innerHTML = `El resultat és ${subtractor}.`;
            break;

        case "*":
            multiply = numUser * numUser2;
            document.getElementById("*").innerHTML = `El resultat és ${multiply}.`;
            break;

        case "/":
            divide = numUser / numUser2;
            document.getElementById("/").innerHTML = `El resultat és ${divide}.`;
            break;

        default:
            alert("Has introduit un caràcter no vàlid o has deixat algún dels camps en blanc.");
    }
}