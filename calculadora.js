const { somar, subtrair, dividir, multiplicar } = require("./operacoes");
const operacoes = require("./operacoes");



console.log(operacoes.calcular(10,15,somar))
console.log(operacoes.calcular(10,15,subtrair))
console.log(operacoes.calcular(10,15,dividir))
console.log(operacoes.calcular(10,15,multiplicar))
