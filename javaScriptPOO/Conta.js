import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

export default class Conta {
    agencia;

    tipo;

    set tipo(tipoDeConta){
        if(tipoDeConta instanceof ContaCorrente){
            this.tipo = tipoDeConta;
        }
    }

    get tipo() {
        return this.tipo;
    }


    #cliente;

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this.#cliente = novoCliente;
        }
    }

    get cliente(){
        return this.#cliente;
    }
}


