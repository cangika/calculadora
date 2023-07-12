import { numero1, numero2 } from "./tipos-de-dados.mjs"

const calculadora = {
    resultado: 0,
    somar: function (num1, num2) {
        this.resultado = num1 + num2
        return this.resultado
    },
    subtrair: function (num1, num2) {
        this.resultado = num1 - num2
        return this.resultado
    },
    multiplicar: function (num1, num2) {
        this.resultado = num1 * num2
        return this.resultado
    },
    dividir: function (num1, num2) {
        if (num1 === 0 || num2 === 0) {
            return 'erro: impossível dividir por zero'
        }
        this.resultado = num1 / num2
        return this.resultado
    },
}

console.log(`o resultado da soma foi: ${calculadora.somar(numero1, numero2)}`)
console.log(`o resultado da subtração foi: ${calculadora.subtrair(numero1, numero2)}`)
console.log(`o resultado da multiplicação foi: ${calculadora.multiplicar(numero1, numero2)}`)
console.log(`o resultado da divisão foi: ${calculadora.dividir(numero1, numero2)}`)

console.log(`deve devolver uma linha com erro: \n ${calculadora.dividir(0)}`)