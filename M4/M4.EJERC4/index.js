function show() {
    let month = Number(document.getElementById("month").value);
    const resultElement = document.getElementById("result");
    let message;

    switch (month) {
        case 1:
            month = "Gener"
            message = `El mes de ${month} té 31 dies.`
            break

        case 2:
            month = "Febrer"
            message = `El mes de ${month} té 28 dies.`
            break

        case 3:
            month = "Març"
            message = `El mes de ${month} té 31 dies.`
            break

        case 4:
            month = "Abril"
            message = `El mes d' ${month} té 30 dies.`
            break

        case 5:
            month = "Maig"
            message = `El mes de ${month} té 31 dies.`
            break

        case 6:
            month = "Juny"
            message = `El mes de ${month} té 30 dies.`
            break

        case 7:
            month = "Juliol"
            message = `El mes de ${month} té 31 dies.`
            break

        case 8:
            month = "Agost"
            message = `El mes d' ${month} té 31 dies.`
            break

        case 9:
            month = "Septembre"
            message = `El mes de ${month} té 30 dies.`
            break

        case 10:
            month = "Octubre"
            message = `El mes d' ${month} té 31 dies.`
            break

        case 11:
            month = "Novembre"
            message = `El mes de ${month} té 30 dies.`
            break

        case 12:
            month = "Desembre"
            message = `El mes de ${month} té 31 dies.`
            break

        default: alert("Error: introdueix un valor entre el 1 i el 12")
    }
resultElement.innerHTML = message

}
