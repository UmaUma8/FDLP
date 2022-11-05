//import { deleteHotel } from "./deleteHotel.js"
//import { showHotels } from "./showHotels.js"
import { Hotel } from "./Hotel.js"

const allHotels = []

function newHotel (){
    const hotelName = prompt("Nombre del hotel")
    const rooms = prompt("Cantidad de cuartos")
    const floors = prompt("¿Cuantos pisos tiene el hotel?")
    const surface = prompt("¿Cual es la superficie total del hotel?")
    const createHotel = new Hotel (hotelName, rooms, floors, surface)
    allHotels.push(createHotel)
    showHotels()
}

function deleteHotelFunc() {


    const deleteHotelName = prompt("¿Cual es el nombre del hotel que desea borrar?")

   /*  const checkName = hotel => deleteHotelName === hotel.getHotelName()

    function checkName (hotel) {
        return deleteHotelName === hotel.getHotelName()
    } */

   const hotelFound = allHotels.find(e => deleteHotelName === e.getHotelName())

    if (hotelFound) {
       const confirmDeleteHotel = confirm("¿quieres borrar el hotel?") 
        if (confirmDeleteHotel) {
            const i = allHotels.indexOf(hotelFound)
            allHotels.splice(i, 1)
            alert("hotel borrado correctamente! :)")
            showHotels()
        }
        if (!confirmDeleteHotel) {alert("el hotel no se borro :(")}
    } 
    if (!hotelFound) {alert("El hotel no se encontro")} 
}

function showHotels() {
    let hotelMessage = ""
    for (let i=0; i < allHotels.length; i++) {
        const hotelS = allHotels[i]
        hotelMessage += `El hotel ${i + 1} es:<br>${hotelS.toString()} <br>`
    }
   return document.getElementById("hotel-list").innerHTML = hotelMessage
}

document.getElementById("newHotelId").addEventListener("click", newHotel)
document.getElementById("showHotelId").addEventListener("click", showHotels)
document.getElementById("deleteHotelId").addEventListener("click", deleteHotelFunc)

/*
function deleteHotelFunc() {
    const deleteHotelName = prompt("¿Cual es el nombre del hotel que desea borrar?")
    let i = 0
    let hotelFound = false
    while ( i < allHotels.length && hotelFound === false) {

        if (deleteHotelName === allHotels[i].getHotelName()){

            const confirmDelete = confirm("encontramos el hotel. lo borramos?")
            hotelFound = true
                if (confirmDelete === true) {
                    allHotels.splice(i, 1)
                    
                    alert("hotel borrado")
                    showHotels()
                }
                else {alert("el hotel no se borro")}
        }
        else {
            i ++
            
        }    
    }
    if (hotelFound === false) {alert("Hotel no encontrado")}
    
}
*/