function show() {
    const monthNum = Number(document.getElementById("month").value);

    const monthDays = {
        1: { month: "Gener", days: 31 },
        2: { month: "Febrer", days: 28 },
        3: { month: "Març", days: 31 },
        4: { month: "Abril", days: 30 },
        5: { month: "Maig", days: 31 },
        6: { month: "Juny", days: 30 },
        7: { month: "Juliol", days: 31 },
        8: { month: "Agost", days: 31 },
        9: { month: "Septembre", days: 30 },
        10: { month: "Octubre", days: 31 },
        11: { month: "Novembre", days: 30 },
        12: { month: "Desembre", days: 31 },

    }
    alert(`El mes de ${monthDays[monthNum].month} té ${monthDays[monthNum].days} dies.`); 
}