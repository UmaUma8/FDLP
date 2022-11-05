TIPOS DE DATOS:

Existen diferentes tipos de datos según el valor que contenga.

* PRIMITIVOS: quiere decir que son INMUTABLES, no permiten ser modificados una vez creados. Hay 7:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

* OBJETOS: son estructuras que contienen un grupo de datos. Estos son: 
- Arrays
- Objetos literales: compuestos por propiedades las propiedades son key y value. Son MUTABLES: permiten ser modificados una vez creados.Todas las mutables son objetos.
arrays, string.



* CREAR COPIAS DE OBJETOS: con 3 puntos . SPLIT OPERATOR (...) hace referencia y copia todos las propiedades. Crea nuevo y lo que hace es copiar y pegar todos los datos que hay dentro pero ha creado uno nuevo porque está entre {}.(foto móvil).

- PARSE INT: convierte a número y se meto decimal o convierte a entero. 
- PARSE FLOAT: redondea hacia arriba.

OPERADOR TERNARIO:
const beca = age >= 18 && (titulUniv === si || atur === respuesta)
beca ? alert ("Tienes beca") : alert ("No tienes beca)
// en este ejemplo si la primera condición es true se imprima si no se cumpe se va a la segunda. 


DIFERENCIAS ENTRE EL BUCE FOR Y EL WHILE:
- FOR: si sabemos cuantas veces tenemos que hacer el bucle.
- WHILE: si no sabemos la cantidad de veces que tenemos que hacer algo.


ARROW FUNCTIONS:
Me ahorro las {}. Lo puedo hacer todo en una línea. Pero se suele usar cuando hay sólo una línea de código, para simplificar. Si no, no se aconseja. 
ej: function sum = function (num1, num2){
    return num 1 + num2
}

Si sólo hay un parametro (lo que va entre paréntesis) se pueden quitar los paréntesis.
Es lo mismo que:
const sum = (num1, num2) => num1 + num2

Tiene función de autoreturn, no hace falta ponerlo. Si hay {} hay q poner el return.

FOR EACH
Sólo funciona con arrays. Va a llamar a esa función q le pasamos x paréntesis y se va a ejecutar tantas veces cómo num. de elementos tiene el array (foto).
Por paréntesis le llega una función.

Entre utilizar while for o for each, con el uso de for each perdemos legilibilidad. Con el for vemos más cóo se hace vemos el contador, etc. El for each es más declarativo si comparamos con while.

Con for each puedo acceder a posición.

MÉTODOS DE ARRAYS MÁS IMPORTANTES: for each, push, map, filter, reverse, concat y find. 

COGER VALORES VARIABLES Y ARRAYS = 
Destructuring: (usar objetos literales)

function colectValue(){
const firstNum = valor
const secondNum = valor

return {firstNum, secondNum}
}

function suma(){
    const {firstNum, secondNum} = colectValue() //destructuring {firstNum: 4, secondNum: 6}

    document.getElelementById("result").innerHTML = firstNum + secondNum
}


COMPROBAR SI UN ARRAY ES ARRAY:
Array.isArray(nombre de var). 
nombre instanceof Array
type of nombre 
[] instanceof Array
(si es true es q es array).

COMPROBAR SI UNA FUNCION ES UNA FUNCION:
typeof nombre === 'function'
nombre instanceof Function
(si devuelve true es una funcion)



 