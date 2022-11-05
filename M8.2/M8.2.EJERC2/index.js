class Hotel {
    #name
    #roomNumbers
    #floorNumbers
    #totalSurface
    
    constructor(name, roomNumbers, floorNumbers, totalSurface) {
        this.#name = name;
        this.#roomNumbers = roomNumbers;
        this.#floorNumbers = floorNumbers;
        this.#totalSurface = totalSurface;
    }

    getName() {
        return this.#name
    };
    getRoomNumbers() {
        return this.#roomNumbers
    };
    getFloorNumbers() {
        return this.#floorNumbers
    };
    getTotalSurface() {
        return this.#totalSurface
    };
  

    setName(parameterNewValue) {
        this.#name = parameterNewValue
    };
    setRoomNumbers(parameterNewValue) {
        this.#roomNumbers = parameterNewValue
    };
    setFloorNumbers(parameterNewValue) {
        this.#floorNumbers = parameterNewValue
    };

    calcularManteniment(personOfRooms) {
        let numberOfRooms = personOfRooms / 20  
        return
        
    }
}