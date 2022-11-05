import {validatePalindrome} from './validatePalindrome.js' 

const sentence = document.getElementById('userSentence')
const resultPalindrome = document.getElementById('answer')
document.getElementById('button').addEventListener ('click', () => (validatePalindrome(sentence.value)))



/* 
import { calculateAgeRange } from './calculateAgeRange.js'

document.getElementById('button-calculate').addEventListener('click', calculateAgeRange) 
*/
