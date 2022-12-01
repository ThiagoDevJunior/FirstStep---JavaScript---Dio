const peso = 77;
const altura = 1.78;

const imc = peso / (altura * altura);

console.log("-------------------------------------");
console.log(" IMC - Indice De Massa Corporal");
console.log("-------------------------------------");


if(imc < 18.5){
    console.log("-Abaixo Do Peso!");
}else if(imc >= 18.5 && imc <= 25){
    console.log("-Peso Normal Parabéns!");
}else if(imc >= 25 && imc <= 30){
    console.log("-Acima Do Peso!");
}else if(imc >= 30 && imc <= 40){
    console.log("-Obeso!");
}else{
    console.log("-Obesidade Grave!");
}

