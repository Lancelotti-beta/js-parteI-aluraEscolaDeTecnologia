const idadeDoComprador = 18;
const compradorEstaAcompanhado = false;
let temPassagem = false;

let destinoDeViagem = `Curitiba`;

const listaDeViagem = new Array(
    `Curitiba`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Goiás`
);

listaDeViagem.push(`Manaús`, `Pernanbuco`, `Santa Catarina`, `Alágoas`);
console.log(`Escolha seu destino: \n`);
console.log(listaDeViagem);

function espera() {
	return console.log(`. . . . \n`);
}

function removeDestinoEscolhido(){
	if ((idadeDoComprador >= 18) && (temPassagem)) {
		console.log(`Destino: `);
		listaDeViagem.forEach((lista, index) => {
			lista = listaDeViagem[index];
			//este While na verdade é um if
			while (destinoDeViagem == lista) {
				console.log(`>>> ${lista}`)
				listaDeViagem.splice(index, 1);
				break;
			}
		});
	} else {
		console.log(`\n Verefique o motivo check-in.`);
	}
}

console.log(`\n Check-in \n`);

espera();

setTimeout(() => {
	console.log(`Aguarde um momento . . \n`);
}, 1500);

let viagemEstaNaLista = false;

for(let i = 0; i < listaDeViagem.length; i++){
	if(listaDeViagem[i] == destinoDeViagem){
		viagemEstaNaLista = true;
		break;
	}
}

setTimeout(() => {
	if ((idadeDoComprador >= 18 || compradorEstaAcompanhado) && (viagemEstaNaLista)) {
		console.log(` Ticket comprado com Sucesso!! \n Boa Viagem!`);
		temPassagem = true;

	} else {
		console.log(`\n A venda da passagem não sera possivel`);
	}

	removeDestinoEscolhido();

	console.log(`\n Viagens disponíveis: \n`);
	console.log(listaDeViagem);

}, 3000);




/*
// trecho de cósigo com o If
listaDeViagem.forEach((lista, index)=>{
            
    lista = listaDeViagem[index];

    if(destinoDeViagem == lista){
        console.log(`Destino:\n ${listaDeViagem.splice(index, 1)}`);
    }

});
*/

