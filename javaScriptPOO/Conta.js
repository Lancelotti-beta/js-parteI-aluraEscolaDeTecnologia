import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

export default class Conta {

    constructor(cliente, tipo) {
        this.#cliente = cliente;
        this.tipo = tipo;
        this.#saldo = 0;
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

    get saldo(){
        return `Saldo Disponível: ${this.#saldo}`;
    }

    deposito(valor){
        if(valor <= 0) return;
        this.#saldo += valor;
    }
    
    saque(valor){
        let taxa = 1.1 * taxa;
        if(this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    transferencia(valor, conta){
        const valorTransferido = this.saque(valor);
        conta.deposito(valorTransferido);
    }

}


