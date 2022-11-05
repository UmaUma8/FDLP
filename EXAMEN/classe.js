class Treballadors {
    #nom
    #cognom
    #carrec
    #disponibilitatTrasllat

    constructor(nom, cognom, carrec, disponibilitatTrasllat) {
        this.#nom = nom;
        this.#cognom = cognom;
        this.#carrec = carrec;
        this.#disponibilitatTrasllat = disponibilitatTrasllat;
    }

    getNom() { return this.#nom };
    getCognom() { return this.#cognom };
    getCarrec() { return this.#carrec };
    getDisponibilitatTrasllat() { return this.#disponibilitatTrasllat };

}

function createEmployee() {
    const employee = new Treballadors('Nina', 'Hagen', 'programadora', 'sí');

    document.getElementById("nom2").innerHTML = employee.getNom();
    document.getElementById("cognoms2").innerHTML = employee.getCognom();
    document.getElementById("carrec2").innerHTML = employee.getCarrec();
    document.getElementById("trasllat2").innerHTML = employee.getDisponibilitatTrasllat();
}