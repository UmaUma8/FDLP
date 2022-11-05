function transcribe(){

    const num = Number(document.getElementById('number').value)
    let message = ''
    let units = num % 10
    let tens = Math.floor(num / 10)
    console.log('units', units)
    console.log('tens', tens)

    if (units === 1) { message = 'uno' }
    else if (units === 2) { message = 'dos' }
    else if (units === 3) { message = 'tres' }
    else if (units === 4) { message = 'cuatro'}
    else if (units === 5) { message = 'cinco' }
    else if (units === 6) { message = 'seis' }
    else if (units === 7) { message = 'siete' }
    else if (units === 8) { message = 'ocho' }
    else if (units === 9) { message = 'nueve' }

    if (tens === 2) { message = 'venti' + message }
    else if (tens === 3) { message = 'treinta y ' + message }
    else if (tens === 4) { message = 'cuarenta y ' + message }
    else if (tens === 5) { message = 'cincuenta y ' + message }
    else if (tens === 6) { message = 'sesenta y ' + message }
    else if (tens === 7) { message = 'setenta y ' + message }
    else if (tens === 8) { message = 'ochenta y ' + message }
    else if (tens === 9) { message = 'noventa y ' + message } 

    if (num === 10) { message = 'diez' }
    else if (num === 20) { message = 'veinte' }
    else if (num === 30) { message = 'treinta' }
    else if (num === 40) { message = 'cuarenta'}
    else if (num === 50) { message = 'cincuenta' }
    else if (num === 60) { message = 'sesenta' }
    else if (num === 70) { message = 'setenta' }
    else if (num === 80) { message = 'ochenta'}
    else if (num === 90) { message = 'noventa' }
    else if (num === 11) { message = 'once' }
    else if (num === 12) { message = 'doce' }
    else if (num === 13) { message = 'trece' }
    else if (num === 14) { message = 'catorce'}
    else if (num === 15) { message = 'quince'}  
    else if (num === 16) { message = 'dieciséis' }
    else if (num === 17) { message = 'diecisiete' }
    else if (num === 18) { message = 'dieciocho'}
    else if (num === 19) { message = 'diecinueve'} 
    else if (num <1 || num >99) { message = 'número no válido'}

    document.getElementById('result').innerHTML = message 
}
