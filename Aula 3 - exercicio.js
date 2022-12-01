/*PRECO COMBUSTIVEL */
const etanol = 4.15;
const gasolina = 5.79;

/*DADOS DO CLIENTE */
let gastoMediaPorKm = 22;
let DistanciaviagemKm = 145;
let tipoCombustivel = etanol;

/*PROCESSAMENTO E SAIDA */
if(tipoCombustivel == etanol){
    const enta = (DistanciaviagemKm / gastoMediaPorKm) * etanol;
    console.log(enta.toFixed(2), ' Reais de Etanol');
}else{
    const gaso = (DistanciaviagemKm / gastoMediaPorKm) * gasolina;
    console.log(gaso.toFixed(2), ' Reais de Gasolina');
}