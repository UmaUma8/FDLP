function calculate(){
   const numUser = Number (document.getElementById("num1").value);
   const numUser2 = Number (document.getElementById("num2").value);

   const result = numUser + numUser2;
   console.log(result)
   document.getElementById("resultsum").innerHTML = `El resultat de la suma és: ${result}`;

   const result2 = numUser - numUser2;
   console.log(result2)
   document.getElementById("resultrest").innerHTML = `El resultat de la resta és: ${result2}`;

   const result3 = numUser * numUser2;
   console.log(result3)
   document.getElementById("resultmult").innerHTML = `El resultat de la multiplicació és: ${result3}`;

   const result4 = numUser / numUser2;
   console.log(result4)
   document.getElementById("resultdiv").innerHTML = `El resultat de la divisió és: ${result4}`;
}