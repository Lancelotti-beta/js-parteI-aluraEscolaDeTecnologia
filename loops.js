const idadeDoComprador = 18;
const compradorEstaAcompanhado = false;
let temPassagem = false;

const destinoDeViagem = 'Rio de Janeiro';
 
const listaDeViagem = new Array(
    `Curitiba`,
    `São Pauo`,
    `Rio de Janeiro`,
    `Goiás`
);

//listaDeViagem.push(`Manaús`, `Pernanbuco`, `Santa Catarina`);
console.log(`Escolha seu destino: \n`);
console.log(listaDeViagem);

const checkIn = idadeDoComprador >= 18 || compradorEstaAcompanhado;

let cont = 0;
let destinoExistente = false;

while (cont < listaDeViagem.length) {
    if (destinoDeViagem == listaDeViagem[cont]){
        destinoExistente = true;
        break;
    } /* else {
        destinoExistente = false;
        //isso é bem redundante.
    } */

    cont++;
}

console.log(`Destino existe: ${destinoExistente}`);


/*
function espera(){
    return console.log(`. . . . \n`);
}

console.log(`\n Check-in \n`);

espera();
setTimeout(() => {
    if((idadeDoComprador >= 18) || (compradorEstaAcompanhado)) {
        console.log(` Ticket comprado com Sucesso!! \n Boa Viagem!`);
        temPassagem = true;
    
    } else {
        console.log(`\n A venda da passagem não sera possivel`);
    }
    
    if((idadeDoComprador >= 18) && (temPassagem)) {
        console.log(`\n Destino: \n`);
        listaDeViagem.forEach((lista, index)=>{
            
            lista = listaDeViagem[index];

            //este While na verdade é um if
            while(destinoDeViagem == lista){
                console.log(listaDeViagem.splice(index, 1));
                break;
            }
    
        });
    
    } else {
        console.log(`\n Você não pode embarcar. Verefique o responsavel do check-in o motivo.`);
    
    }
    
    console.log(`\n Viagens ainda disponíveis: \n`);
    console.log(listaDeViagem);
    
}, 3000);

setTimeout(() => {
    console.log(`Aguarde um momento . . \n`);
}, 1500);

*/
