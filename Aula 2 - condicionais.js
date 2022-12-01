let numero = 6;

let valor_logico = false;
const operacao = numero %  2;

if(operacao == 0){
    valor_logico = true;
}else{
    valor_logico = false;
}

 console.log('O Numero ', numero, ' é ', 'Par? ', valor_logico);
