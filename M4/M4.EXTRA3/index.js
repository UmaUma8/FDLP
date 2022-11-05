function numAleat(){
    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(numRandom)
    const numUser = document.getElementById("num").value;

    const pedra = 1;
    const paper = 2;
    const tisora = 3;

    let opcionesUser

    if (numUser < 1 || numUser > 3) {
        alert("Entenc que no vols jugar. Adéu.");

    } else if (numUser === numRandom) {
        alert("Has guanyat!");

    } else if (numUser !== numRandom){
        alert(`Jo ${numRandom} i tu ${numUser}. He guanyat!`);

    }
}