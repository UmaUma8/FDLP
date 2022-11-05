export class Hotel {
    #hotelName
    #rooms
    #floors
    #surface
    constructor(hotelNameParam, roomsParam, floorsParam, surfaceParam) {
        this.#hotelName = hotelNameParam
        this.#rooms = roomsParam
        this.#floors = floorsParam
        this.#surface = surfaceParam
    }
    getHotelName() { return this.#hotelName }
    getRooms() { return this.#rooms }
    getFloors() { return this.#floors }
    getSurface() { return this.#surface }
    setHotelName(setName) {
        this.#hotelName = setName
    }
    setRooms(setRooms) {
        this.#rooms = setRooms
    }
    setFloors(setFloors) {
        this.#floors = setFloors
    }
    setSurface(setSurface) {
        this.#surface = setSurface
    }

    calcularMantenimiento() {
        const necessaryEmployees = Math.ceil(Number(this.#rooms) / 20)

        const salaryEmployees = necessaryEmployees * 1500
        const message = `Necesitas ${necessaryEmployees} empleados para mantener este hotel.<br>El costo de empleados sera de ${salaryEmployees} euros por mes.`
        return message
    }

    toString() {
        return `Nombre del Hotel: ${this.#hotelName}<br>Cantidad de habitaciones: ${this.#floors}<br>Cantidad de pisos: ${this.#floors}<br>Superficie total del hotel: ${this.#surface}<br> ${this.calcularMantenimiento()}<br>`
    }
}




