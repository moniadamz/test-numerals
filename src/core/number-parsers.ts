import { mappings } from './mappings'
import { EArabicNumber } from '../enums/EArabicNumber'

export function toRoman (arabicNumber: number) {
  if (!arabicIsValid(arabicNumber)) return 'Expressão Inválida.'

    let result = ''
    let remainingNumber = arabicNumber
    
    mappings.forEach((mapping) => {
      while (remainingNumber >= mapping.arabic) {
        result += mapping.roman
        remainingNumber -= mapping.arabic
      }
    })
  
    return result
  }
  
export function toArabic(romanNumber: string) {
  if (!romanIsValid(romanNumber)) return 'Expressão Inválida.'

  let result = 0
  let remainingNumber = romanNumber

  while (remainingNumber.length) {

      mappings.forEach((mapping) => {
        while(remainingNumber.startsWith(mapping.roman)) {
          const substr = remainingNumber.slice(mapping.roman.length, romanNumber.length)
          result += mapping.arabic
          remainingNumber = substr
        }
      })
    }

  return result
}
export function arabicIsValid(input: number){
  return (input < EArabicNumber.MAX && input > EArabicNumber.MIN) && input % 1 === 0
}

export function romanIsValid(input: string){
  const regexpRoman = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$')
  return regexpRoman.test(input)
}

export function convertInput(input: string) {
  const convertedInput = parseInt(input)
  if(Number.isInteger(convertedInput)) return toRoman(convertedInput)
  return toArabic(input)
}