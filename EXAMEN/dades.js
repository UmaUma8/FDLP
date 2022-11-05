const treballadors = [
   {
      nom: "Ana",
      cognom: "Puig",
      carrec: "venedor(a)",
      disponibilitatTrasllat: true
   },
   {
      nom: "Lluis",
      cognom: "Soto",
      carrec: "venedor(a)",
      disponibilitatTrasllat: false
   },
   {
      nom: "Cristina",
      cognom: "Tomas",
      carrec: "administratiu(a)",
      disponibilitatTrasllat: false
   },
   {
      nom: "Andreu",
      cognom: "Ricart",
      carrec: "venedor(a)",
      disponibilitatTrasllat: true
   },
   {
      nom: "Pep",
      cognom: "Vila",
      carrec: "venedor(a)",
      disponibilitatTrasllat: false
   },
   {
      nom: "Núria",
      cognom: "Roure",
      carrec: "administratiu(a)",
      disponibilitatTrasllat: true
   },

]

const persona = [];

function findEmployee() {

   for (let i = 0; i < treballadors.length; i++) {
      if (treballadors[i].nom === "Pep") {
         persona.push(treballadors[i])
      }
   }

   document.getElementById("nom1").innerHTML = persona[0].nom;
   document.getElementById("cognoms1").innerHTML = persona[0].cognom;
   document.getElementById("carrec1").innerHTML = persona[0].carrec;
   document.getElementById("trasllat1").innerHTML = persona[0].disponibilitatTrasllat;

}

const transferAvailability = [];

function employeeTransferAvailability() {

   for (let x = 0; x < treballadors.length; x++) {
      if (treballadors[x].disponibilitatTrasllat === true) {
         transferAvailability.push(treballadors[x]);
      }
   }
   console.log(transferAvailability);

}
