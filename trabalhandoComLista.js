const chamadaDeTexto = `Destinos de Viagem: `;

const listaDeViagem = new Array(
    `Curitiba`,
    `São Pauo`,
    `Rio de Janeiro`,
    `Goiás`
);

console.log(chamadaDeTexto, listaDeViagem);

listaDeViagem.push(`Manaús`, `Pernanbuco`, `Santa Catarina`, `Presidente Prudente, SP`);
console.log(listaDeViagem);

//Retira o ultimo item da lista
listaDeViagem.pop();

listaDeViagem.forEach((lista, indice) => {
    console.log(`No Indice ${indice} \n está ${lista}`);
});

//Removendo Item no Inicio da Array
listaDeViagem.shift();

//Adicionando Item ao inicio da array
listaDeViagem.unshift(`Presidente Bernades`);

console.log(listaDeViagem.indexOf(`Curitiba`));

listaDeViagem.forEach(function(lista, index){
    let valor = lista.slice(index, 1);
    console.log(`\n ${valor}`);
});

console.log(listaDeViagem);