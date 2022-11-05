export function validatePalindrome(userText) {
	let editText = userText.toLowerCase();
	editText = editText.replace(new RegExp(/\s/g), "");
	editText = editText.replace(new RegExp(/[àáâãäå]/g), "a");
	editText = editText.replace(new RegExp(/æ/g), "ae");
	//editText = editText.replace(new RegExp(/ç/g),"c");
	editText = editText.replace(new RegExp(/[èéêë]/g), "e");
	editText = editText.replace(new RegExp(/[ìíîï]/g), "i");
	//editText = editText.replace(new RegExp(/ñ/g),"n");
	editText = editText.replace(new RegExp(/[òóôõö]/g), "o");
	editText = editText.replace(new RegExp(/œ/g), "oe");
	editText = editText.replace(new RegExp(/[ùúûü]/g), "u");
	editText = editText.replace(new RegExp(/[ýÿ]/g), "y");
	editText = editText.replace(new RegExp(/\W/g), "");
	console.log(editText);

	const textArray = editText.split("");
	let invertArray = [...textArray].reverse();
	const compareArray = textArray.toString() === invertArray.toString();
    document.getElementById('answer').innerHTML='És un palíndrom'
	
    console.log(textArray.toString());
	console.log(invertArray.toString());
	console.log(compareArray);
}
// export function validatePalindrome(userText) {

// }
console.log(validatePalindrome("Hola Quim"));

/* 
import { validate } from './validateAge.js'
export function calculateAgeRange () {
    const age = document.getElementById('age').value

    const isAValidAge = validate(age)

    if (!isAValidAge) {
        console.log('Introduce una edad valida')
    }
    if (isAValidAge) {
        console.log('Calculate range')
    }

} 
*/
