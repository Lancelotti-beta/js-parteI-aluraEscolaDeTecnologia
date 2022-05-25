export default class ContaPoupanca {
    static numeroDeCp = 0;

    #saldo = 0;

    constructor (saldo){
        if(saldo >= 500){
            this.#saldo =+ saldo;
        } else {
            return `Operação Invalida!`
        }

        ContaPoupanca.numeroDeCp++;
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