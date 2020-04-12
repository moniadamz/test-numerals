import * as readline from "readline"
import { convertInput } from "./number-parsers"

export function getUserInput() {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })

    const recursiveAsyncReadLine = () => {
        rl.question('Digite o valor a converter: ', (answer) => {
        const toUpperCaseAnswer = answer.toUpperCase()
        if (toUpperCaseAnswer === 'EXIT') return rl.close()
        const response = convertInput(toUpperCaseAnswer)
        console.log(`Valor convertido: ${response} \n`)
        recursiveAsyncReadLine()
        })
    }
    recursiveAsyncReadLine()
}
