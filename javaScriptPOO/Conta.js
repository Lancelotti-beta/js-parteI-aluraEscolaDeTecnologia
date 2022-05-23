//Byte Bank - Js P.O.O.

export class Conta {
    tipo;
    agencia;
    #saldo = 0;

    deposito(valor){
        if(valor <= 0) return;
        this.deposito += valor;
    }
    
    saque(valor){
        if(this.#saldo >= valor){
           this.#saldo -= valor;
        }
    }

    saldo(){
       return this.deposito += this.#saldo;
    }
}

