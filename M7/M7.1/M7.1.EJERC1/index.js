function averageGrade() {
    const grade1 = parseFloat(document.getElementById("nota1").value);
    const grade2 = parseFloat(document.getElementById("nota2").value);
    const grade3 = parseFloat(document.getElementById("nota3").value);

    const result = (grade1 + grade2 + grade3) / 3
    console.log(result);

    if (result < 5) {
        alert(`La teva nota mitjana és de ${result}. No has superat el curs. Has de recuperar`);
    }

    else if (result >= 5 && result <= 7) {
        alert(`Enhorabona! La teva nota mitjana és de ${result}. Has aprovat però hauries de seguir practicant`);
    }

    if (result > 7) {
        alert(`Enhorabona! la teva nota mitjana és de ${result}. Has superat el curs! Passa ja al següent nivell!`);
    }

    
}