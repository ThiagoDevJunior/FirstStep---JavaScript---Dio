//Produto
var arroz = 2.50;
var feijao = 3.50;
var biscoito = 1.50;
var refrigerante = 20;
var carne = 40.50;

//forma de pagamento
let f1 = "avista_debito";
let f2 = "Dinheiro_ou_pix";
let f3 = "EmDuasVezes";
let f4 = "AcimaDeDuasVezes";

//escolhe o Produto - CLIENTE
let produto = carne;
let forma_pagamento =  f2;

//preco a pagar de acordo com desconto
if(forma_pagamento == f1){
    desconto = produto - (produto * (10/100));
    console.log("Forma De Pagamento: A Vista Ou Debito");
    console.log("Total a Pagar: ", desconto, "$$ Reais");
}else if(forma_pagamento == f2){
    desconto = produto - (produto *  (15/100));
    console.log("Forma De Pagamento: Dinheiro Ou Pix");
    console.log("Total a Pagar: ", desconto, "$$ Reais");
}else if(forma_pagamento == f3){
    console.log("Forma De Pagamento: Em Duas Vezes");
    console.log("Total A Pagar: ", produto, "$$ Reais");
}else{
    juros = produto + (produto * (10/100));
    console.log("Forma De Pagamento: Acima De 2 Vezes");
    console.log("Total A Pagar: ", juros, "$$ Reais");
}

