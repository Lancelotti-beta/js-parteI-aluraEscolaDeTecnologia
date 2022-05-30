import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeCC = 0;

    constructor (agencia, cliente){
        super(0, agencia, cliente);
        ContaCorrente.numeroDeCC++;
    }

    saque(valor){
        const taxa = 1.1;
        return this._saque(valor, taxa);
    }

}

