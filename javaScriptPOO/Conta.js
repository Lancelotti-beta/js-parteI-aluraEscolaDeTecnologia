//Byte Bank - Js P.O.O.

export default class Conta {
    tipo;
    agencia;
    cliente;

    #saldo = 0;


    deposito(valor){
        if(valor <= 0) return;
        this.#saldo += valor;
    }
    
    saque(valor){
        if(this.#saldo >= valor) this.#saldo -= valor;
    }

    transferencia(valor, conta){
        const valorTransferido = this.saque(valor);
        conta.deposito(valorTransferido);
    }

    saldo(){
       return this.#saldo;
    }
}

