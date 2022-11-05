function draw(){
    const number = Number (prompt("INTRODUEIX UN NÚMERO:"));
    const specialCharacter = prompt ('INTRODUEIX UN CARÀCTER ESPECIAL (", @, *, &, %, $, #, ETC.):');

const symbolLine = [];
let square = [];
    
  for (let count = 0; count < number; count++){
    symbolLine.push(specialCharacter);
  }
  let lines = symbolLine.join('');

for (let count = 0; count < number; count++){
    square.push(lines);    
}
lines = square.join('<br>');

document.getElementById('lines').innerHTML = lines;
}


