function verifyDni() {

    const numUser = document.getElementById('num').value;
    let letterUser = document.getElementById('letter').value;

    letterUser = letterUser.toUpperCase();
    console.log(letterUser);

    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    let resto = numUser % 23;
    console.log(resto)

    if (letterUser === letters[resto]) {
        alert(`Has introduit la lletra ${letters[resto]} i és la correcta.`);
    }

    if (letterUser != letters[resto]) {
        alert(`La lletra introduida no és correcta, la correcta és la ${letters[resto]}`);
    }

}