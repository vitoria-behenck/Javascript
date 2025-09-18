//const funcoes = require('./funcoes_matematicas');
//const calculadora_idade = require('./calculadora_idade');


import {soma, subtrai, multiplica, divide} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtrai(10, 5));
console.log("Multiplicação: ", multiplica(10, 5));
console.log("Divisão: ", divide(10, 5));

console.log(calculadora_idade.idade("João", 1990, 2050));
