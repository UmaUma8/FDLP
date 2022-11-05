function resultArray() {
    const array1 = [];
    const array2 = [];

    for (let i = 5; i <= 100; i += 5) {
        array1.push(i);
    }
    console.log(array1);

    for (let x = 0; x < array1.length; x++) {
        if (array1[x] % 3 === 0) {
            array2.push(array1[x])
        }
    }
    console.log(array2);

    document.getElementById("array1").innerHTML = array1.reverse();
    document.getElementById("array2").innerHTML = array2;

}



