function showPairImpair() {

    const numUser = Number(document.getElementById("num").value);

    const calculate = numUser % 2

    if (calculate === 0) {
        alert(`El número ${numUser} és parell.`);
    }

    else {
        alert(`El número ${numUser} és imparell.`)
    }

}