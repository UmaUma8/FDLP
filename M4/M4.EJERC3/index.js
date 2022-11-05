function showBeca() {

    const age = document.getElementById("edad").value
    const titol = document.getElementById("tit").value
    const atur = document.getElementById("atur").value

    if (age == "si" && (titol == "si" || atur == "si")) {
        document.getElementById("beca").innerHTML = "Enhorabona! Et concedim una beca."

    } else {
        document.getElementById("beca").innerHTML = "Ho sentim, no et podem concedir una beca."
    }

}