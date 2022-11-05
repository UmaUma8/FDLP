const valorInput = parseInt(prompt("Introdueix l'alçada"));
const base = (valorInput / 2) + 1;

for (let i = 0; i < valorInput; i++) {
    document.write("*" + "<br>")

}

for (let counter = 0; counter < base; counter++) {
    document.write("* ")


}
