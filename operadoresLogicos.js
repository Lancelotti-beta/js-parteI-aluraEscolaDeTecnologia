// Operadores Lógicos

let idadeDoComprador = 18;
let compradorEstaAcompanhado = false;
let temPassagem = false;
 
const listaDeViagem = new Array(
    `Curitiba`,
    `São Pauo`,
    `Rio de Janeiro`,
    `Goiás`
);
//listaDeViagem.push(`Manaús`, `Pernanbuco`, `Santa Catarina`);
console.log(`Escolha seu destino: \n`);
console.log(listaDeViagem);


console.log(`\n Comprador I \n`);
if((idadeDoComprador >= 18) || (compradorEstaAcompanhado)) {
    console.log(` Ticket comprado com Sucesso!! \n Boa Viagem! \n Destino: ${listaDeViagem.splice(1, 1)}`);
    
} else {
    console.log(`\n Você não é maior de idade. A venda da passagem não sera possivel`);

}

console.log(listaDeViagem);
/* ================================================================== */
console.log(`\n`);
console.log(`Escolha seu destino: \n`);
console.log(listaDeViagem);

console.log(`\n Comprador II`);
if((idadeDoComprador >= 18) && (temPassagem)) {
    console.log(` Ticket comprado com Sucesso!! \n Tenha uma boa viagem! \n Destino: ${listaDeViagem.splice(1, 1)}`);

}else if ((temPassagem) && (compradorEstaAcompanhado)){
    console.log(` Ticket comprado com Sucesso!! \n Tenha uma boa viagem! \n Destino: ${listaDeViagem.splice(1, 1)}`);

} else {
    console.log(`\n Você não pode embarcar. Verefique o responsavel do check-in o motivo.`);

}


console.log(listaDeViagem);
