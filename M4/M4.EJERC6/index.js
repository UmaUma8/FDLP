function zood() {
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);

    if (day <= 0 || day > 31 || month < 1 || month > 12) {
        alert("Introdueix una data vàlida")
    }

    else if (day >= 21 && month == 3 || day <= 19 && month == 4) {
        alert(`Si vas nèixer el ${day} del ${month} ets Àries`)
    }

    else if (day >= 20 && month == 4 || day <= 20 && month == 5) {
        alert(`Si vas nèixer el ${day} del ${month} ets Taure`)
    }

    else if (day >= 21 && month == 5 || day <20 && month == 6){
        alert(`Si vas nèixer el ${day} del ${month} ets Bessons`)
    }

    else if (day >= 21 && month == 6 || day <= 22 && month == 7){
        alert(`Si vas nèixer el ${day} del ${month} ets Cranc`)
    }

    else if (day >= 23 && month == 7 || day <= 22 && month == 8){
        alert(`Si vas nèixer el ${day} del ${month} ets Lleó`)
    }

    else if (day >= 23 && month == 8 || day <= 22 && month == 9){
        alert(`Si vas nèixer el ${day} del ${month} ets Verge`)
    }

    else if (day >= 23 && month == 9 || day <= 22 && month == 10){
        alert(`Si vas nèixer el ${day} del ${month} ets Balança`)
    }

    else if (day >= 23 && month == 10 || day <= 21 && month == 11){
        alert(`Si vas nèixer el ${day} del ${month} ets Escorpí`)
    }

    else if (day >= 22 && month == 11 || day <= 21 && month == 12){
        alert(`Si vas nèixer el ${day} del ${month} ets Sagitari`)
    }

    else if (day >= 22 && month == 12 || day <= 19 && month == 1){
        alert(`Si vas nèixer el ${day} del ${month} ets Capricorn`)
    }

    else if (day >= 20 && month == 1 || day <= 18 && month == 2){
        alert(`Si vas nèixer el ${day} del ${month} ets Aquari`)
        } 
    
    else if (day >= 19 && month == 2 || day <= 20 && month == 3){
        alert(`Si vas nèixer el ${day} del ${month} ets Peixos`)
    }

}


