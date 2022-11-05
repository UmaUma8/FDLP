import { Computer } from './computer.js'

document.getElementById('button-createComputers').addEventListener('click', createComputer)
const BROWSER = window.navigator.vendor
const computerRepository = []

function showComputers() {
    let computersMessage = ''
    for (let index = 0; index < computerRepository.length; index++) {
        const computer = computerRepository[index];
        computersMessage += `El ordenador ${index + 1} es: ${computer.toString()} <br> `
    }
    document.getElementById('computer-list').innerHTML = computersMessage
}

function createComputer() {

    const marca = prompt('Introduce la marca del ordenador');
    const modelo = prompt('Introduce el modelo');
    const proces = prompt('Introduce el procesador');
    const memRam = prompt('Introduce la cantidad de memoria ram');
    const discoDuro = prompt('Introduce la capacidad del disco duro');
    
    const computer = new Computer(marca, modelo, proces, memRam, discoDuro);
    alert(computer.executingProgram(BROWSER))
    computerRepository.push(computer)
    showComputers()
}
