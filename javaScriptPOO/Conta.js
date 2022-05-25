import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

export default class Conta {
    agencia;
    tipo;

    #cliente;

    constructor(agencia, tipo, cliente) {
        this.agencia = agencia;
        this.tipo = tipo;
        this.#cliente = cliente;
    }

    set tipo(tipoDeConta){
        if(tipoDeConta instanceof ContaCorrente){
            this.tipo = tipoDeConta;
        }
    }

    get tipo() {
        return this.tipo;
    }



    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this.#cliente = novoCliente;
        }
    }

    get cliente(){
        return this.#cliente;
    }
}


