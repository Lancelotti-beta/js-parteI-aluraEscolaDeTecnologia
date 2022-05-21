const idadeDoComprador = 18;
const compradorEstaAcompanhado = false;
let temPassagem = false;

let destinoDeViagem = `Alágoas`;

const listaDeViagem = new Array(
    `Curitiba`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Goiás`
);

console.log(`Escolha seu destino: \n`);
console.log(listaDeViagem);

const checkIn = idadeDoComprador >= 18 || compradorEstaAcompanhado;

let posisao;

let cont = 0;
let destinoExistente = false;

if(checkIn){
    while (cont < listaDeViagem.length) {
        let index = listaDeViagem[cont];
        if (destinoDeViagem == index){
            destinoExistente = true;
            break;
        } /* else {
            destinoExistente = false;
            //isso é bem redundante, pois a variavel já inicia com 'false'.
        } */

    }

    console.log(`\n`);
    console.log(`Analisando Pedido . . . `);
}

setTimeout(()=> {
    if(destinoExistente){
        console.log(`Passagem comprada para, ${listaDeViagem[cont]}`);

        posisao = listaDeViagem.indexOf(listaDeViagem[cont]); //Pegando o indice do item.
        listaDeViagem.splice(posisao, 1); //removendo Um item no indice armazenado.
        
    } else {
        console.log(`Não temos viagens para ${destinoDeViagem}`); 
    }
    

    console.log(`\n Destinos disponíveis: `);
    console.log(listaDeViagem);
}, 2000);

