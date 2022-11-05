function calculaLitres() {

    //Cojo los metros de altura y ancho que el usuario ha introducido y calculo el área.
    const alt = parseInt(document.getElementById("numAlt").value);
    const ample = parseInt(document.getElementById("numAmple").value);

    const area = alt * ample;
    console.log(area)

    //Creo constante que indica que un litro de pintura cubre 12m2 en una mano. Divido el area introducida por user entre los 12m2 que se cubre con una mano de pintura.
    const result = area / 12;
    console.log(result)

    //El resultado lo multiplico por el núm de manos que quiere dar.

    const mans = Number(document.getElementById("mans").value);

    const totalLitres = result * mans;
    console.log(totalLitres);

    document.getElementById("result").innerHTML = `Necessites ${totalLitres} litres per pintar aquesta superfície.`  
   
    
    
     
    

    
    





}