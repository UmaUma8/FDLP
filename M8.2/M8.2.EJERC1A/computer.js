export class Computer {
    #marca
    #modelo
    #procesador
    #ram
    #hd
    constructor(marca, modelo, procesador, ram, hd) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#procesador = procesador;
        this.#ram = ram;
        this.#hd = hd;
    }

    getMarca() {
        return this.#marca
    };
    getModelo() {
        return this.#modelo
    };
    getProcesador() {
        return this.#procesador
    };
    getRam() {
        return this.#ram
    };
    getHd() {
        return this.#hd
    };



    setProcesador(parameterNewValue) {
        this.#procesador = parameterNewValue
    };
    setRam(parameterNewValue) {
        this.#ram = parameterNewValue
    };
    setHd(parameterNewValue) {
        this.#hd = parameterNewValue
    };


    executingProgram(parameterProgram) {
        return `En estos momentos se está ejecutando: ${parameterProgram}`  ;
    }
    toString() {
        return `Ordenador: marca ${this.#marca}, modelo ${this.#modelo}, procesador ${this.#procesador}, cantidad de memoria ram ${this.#ram}, capacidad de disco duro ${this.#hd}. `
    }

}