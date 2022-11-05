function addition() {

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let suma = 0;
    let array = [];
    const maxtimesloop = (num2 - num1) + 1; //la resta entre el num1 y num2 +1 son las veces que se hará el bucle.

    for (let i = 0; i < maxtimesloop; i++) {
        array.push(num1 + i);

        suma = suma + num1 + i;
    }

    document.getElementById("result").innerHTML = `${array.join(" + ")} = ${suma}`;

}
