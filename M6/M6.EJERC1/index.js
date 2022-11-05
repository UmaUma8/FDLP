function addition() {
    const number1 = parseFloat(document.getElementById("num1").value);
    const number2 = parseFloat(document.getElementById("num2").value);
    const result = (number1 + number2);

    document.getElementById("result").innerHTML = `El resultat és ${result}`;

}

function subtraction() {
    const number1 = parseFloat(document.getElementById("num1").value);
    const number2 = parseFloat(document.getElementById("num2").value);
    const result = (number1 - number2);

    document.getElementById("result").innerHTML = `El resultat és ${result}`;
}

function multiply() {
    const number1 = parseFloat(document.getElementById("num1").value);
    const number2 = parseFloat(document.getElementById("num2").value);
    const result = (number1 * number2);

    document.getElementById("result").innerHTML = `El resultat és ${result}`;
}

function divide() {
    const number1 = parseFloat(document.getElementById("num1").value);
    const number2 = parseFloat(document.getElementById("num2").value);
    const result = (number1 / number2);

    document.getElementById("result").innerHTML = `El resultat és ${result}`;
}

function modul() {
    const number1 = parseFloat(document.getElementById("num1").value);
    const number2 = parseFloat(document.getElementById("num2").value);
    const result = (number1 % number2);

    document.getElementById("result").innerHTML = `El resultat és ${result}`;
}
