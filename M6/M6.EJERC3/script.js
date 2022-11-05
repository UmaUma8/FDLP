const tiempo = []

function menu (item) {
    if (item === 1) resgistroHora()
    if (item === 2) comprobarIndice(busquedaNumero, numeros)
    if (item === 3) transformarTexto(frase = document.getElementById('frase').value)
    if (item === 4) localizadorPalabras('Història', assignatures)
}

function resgistroHora() {
    const fecha = new Date()
    tiempo.push(fecha)
    console.log(tiempo);
}


const numeros = [1, 2, 3, 2, 7, 5, 9, 5, 2];
let busquedaNumero = 2;

function comprobarIndice(valor, lista) {
    const indices = [];
    let indice = lista.indexOf(valor);
    while (indice != -1) {
        indices.push(indice)
        indice = lista.indexOf(valor, indice + 1)
    }
    console.log(indices);
}

const transformarTexto = (frase) => {
    let transfF = frase.toLowerCase();
    transfF = transfF.replace(new RegExp(/\s/g),"");
    transfF = transfF.replace(new RegExp(/[àáâãäå]/g),"a");
    transfF = transfF.replace(new RegExp(/æ/g),"ae");
    transfF = transfF.replace(new RegExp(/ç/g),"c");
    transfF = transfF.replace(new RegExp(/[èéêë]/g),"e");
    transfF = transfF.replace(new RegExp(/[ìíîï]/g),"i");
    transfF = transfF.replace(new RegExp(/ñ/g),"n");                
    transfF = transfF.replace(new RegExp(/[òóôõö]/g),"o");
    transfF = transfF.replace(new RegExp(/œ/g),"oe");
    transfF = transfF.replace(new RegExp(/[ùúûü]/g),"u");
    transfF = transfF.replace(new RegExp(/[ýÿ]/g),"y");
    transfF = transfF.replace(new RegExp(/\W/g),"");
    console.log(transfF)
}

assignatures = [
    "Història universal",
    "Història d'Espanya",
    "Geografia",
    "Història de la llengua catalana",
    "Antropologia",
    "Anglès"]

    function localizadorPalabras(palabra, array) {
        i = 0
        const listaFiltrada = []
        while (i < array.length) {
            const cadenaIndividual = array[i]
            if (cadenaIndividual.search(palabra) != -1) { // también funciona indexOf
                console.log(cadenaIndividual);
                listaFiltrada[i] = cadenaIndividual
                console.log(listaFiltrada);
            }
            i++
        }
    }