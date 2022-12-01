/*Const = É UM VALOR QUE NÃO PODE MUDAR. */
/*Let = É UM VALOR QUE PODE MUDAR DA AO DECORRER DO COD. */
/*Var = É UM VALOR NORMAL DECLARADO.*/

/*
var palavra = 'tiago';

const pi = 3.14

let valor_mudante = 10;

valor_mudante = 5;

console.log('ALERTA');
*/

/*SCRIPT PARA CALCULAR PRECO DA VIAGEM: */

let precoGasolina = 5.79;
let kmPorLitro = 12;
let viagem = 1580;

const gastoViagem = (viagem / kmPorLitro) * precoGasolina
 
console.log(gastoViagem.toFixed(2), ' Reais De Gasolina');