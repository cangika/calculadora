function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 'erro: impossível dividir por zero'
    }
    return num1 / num2
}

console.log(`o resultado da soma foi: ${somar(20, 30)}`)