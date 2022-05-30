import {Cliente} from "../Cliente.js";

export class Conta {

    constructor(saldoInicial, agencia, cliente) {
        if(this.constructor == Conta) {
            throw new Error(`Você não deveria instanciar um objeto do tipo Conta Diretamente - Class Abstrata!`);
        }

        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;

    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return `Saldo Disponível: ${this._saldo}`;
    }

    deposito(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }
    
    //Methodo Abstract
    saque(valor){
        throw new Error(`O método de saque da Conta é abstrato\nMethodo ${null} `);
    }

    _saque(valor, taxa){
        const valorDeSaque = taxa * valor;

        if(this._saldo >= valorDeSaque) {
            this._saldo -= valorDeSaque;
            return valorDeSaque;
        }
    }

    transferencia(valor, conta){
        const valorTransferido = this.saque(valor);
        conta.deposito(valorTransferido);
    }

}


