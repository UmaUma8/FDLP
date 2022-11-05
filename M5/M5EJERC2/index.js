function addition(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let suma = 0;
    let array = [];

    for (; num1 <= num2; num1++){
        suma = suma + num1;
        array.push(num1);
    
    }

    document.getElementById("result").innerHTML = `${array.join(' + ')} = ${suma}`;
}