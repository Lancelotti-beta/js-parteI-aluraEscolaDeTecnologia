export default class ContaCorrente {
    static numeroDeCC = 0;

    #saldo = 0;

    constructor (){
        ContaCorrente.numeroDeCC++;
    }

    deposito(valor){
        if(valor <= 0) return;
        this.#saldo += valor;
    }
    
    saque(valor){
        if(this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    transferencia(valor, conta){
        const valorTransferido = this.saque(valor);
        conta.deposito(valorTransferido);
    }

    get saldo(){
        return `Saldo Disponível: ${this.#saldo}`;
    }
}

