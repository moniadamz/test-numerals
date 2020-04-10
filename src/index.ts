const readline = require('readline')

const toRoman = (value: number) => {
  let result = ''
  let remainingNumber = value
  const mappings = [
    { arabic:1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic: 90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' },
  ]

  mappings.forEach((mapping) => {
    while (remainingNumber >= mapping.arabic) {
      result += mapping.roman;
      remainingNumber -= mapping.arabic;
    }
  });

  return result;
}

const toArabic = (romanNumber) => {
  let result = 0
  let remainingNumber = romanNumber
  const mappings = [
    { arabic:1000, roman: 'M' },
    { arabic: 900, roman: 'CM' },
    { arabic: 500, roman: 'D' },
    { arabic: 400, roman: 'CD' },
    { arabic: 100, roman: 'C' },
    { arabic:90, roman: 'XC' },
    { arabic: 50, roman: 'L' },
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' },
  ]

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What do you think of Node.js? ', (answer) => {
  const arabic = toArabic(answer)
  console.log(`Thank you for your valuable feedback: ${arabic}`)

  rl.close()
})
