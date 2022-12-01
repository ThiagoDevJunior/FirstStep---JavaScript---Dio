const n1 = 40;
const n2 = 40;
const n3 = 30;

const media = (n1 + n2 + n3) / 3;

if(media < 50){
    console.log('Reprovado!');
    console.log('MEDIA: ', media.toFixed(1), ' PONTOS! :) ');
}else if(media >= 50 && media <= 60){
    console.log('Recuperação!');
    console.log('MEDIA: ', media.toFixed(1), ' PONTOS! :(');
}else{
    console.log('Aprovado!');
    console.log('MEDIA: ', media.toFixed(1), ' PONTOS! :(');
}

/*15 MINUTOS - AULA FINAL */

