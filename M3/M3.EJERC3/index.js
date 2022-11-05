function showMitjana(){

    const notaUser = parseInt(document.getElementById("num1").value);
    const notaUser2 = parseInt(document.getElementById("num2").value);
    const notaUser3 = parseInt(document.getElementById("num3").value);
    
    const result = (notaUser + notaUser2 + notaUser3) / 3;
    //console.log(result)

    document.getElementById("result").value = result;
}