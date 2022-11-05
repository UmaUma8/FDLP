function negativeNumber() {

    const numUser = Number(document.getElementById("num").value);
    const numUser2 = Number(document.getElementById("num2").value);

        
    if (numUser < 0 && numUser2 > 0 ){ 
        alert(`El número ${numUser} és un número negatiu.`)
    }

    if (numUser2 < 0 && numUser > 0){
        alert(`El número ${numUser2} és un número negatiu.`)
    }
    
}