class Ordinador {
    constructor(marca, model, processador, memoriaRam, discDur) {
        this.marca = marca;
        this.model = model;
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.discDur = discDur;
    }

    get getMarca() {
        return this.marca;
    }
    get getModel() {
        return this.model;
    }
    get getProcessador() {
        return this.processador;
    }
    get getMemoriaRam() {
        return this.memoriaRam;
    }
    get getDiscDur() {
        return this.discDur;
    }

    set setProcessador(processador) {
        this.processador = processador;
    }
    set setMemoriaRam(memoriaRam) {
        this.memoriaRam = memoriaRam;
    }
    set setDiscDur(discDur) {
        this.discDur = discDur;
    }

    mostrarPrograma(x){
        return "En aquests moments s'està executant: " + x + ".";
    }

    toString(){
        
        let retorn = `Ordinador marca: ${this.marca}, model: ${this.model}, processador: ${this.processador}, quantitat memòria RAM: ${this.memoriaRam}, capacitat disc dur: ${this.discDur}.`
        return retorn;
    }

    
}
