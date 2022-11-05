const numWords = Number(prompt("Cuantes paraules vols introduir?"));

const words = [];

for (let counter = 0; counter < numWords; counter++) {
    const numPrompts = prompt("Introdueix les paraules d'una en una");
    words.push(numPrompts);

    document.getElementById("show").innerHTML = words.join(", ");

}