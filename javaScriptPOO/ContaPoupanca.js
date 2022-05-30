import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta {
    static numeroDeCp = 0;

    constructor (saldoInicial, agencia, cliente){
        super(saldoInicial, agencia, cliente);
        ContaPoupanca.numeroDeCp++;
    }

    saque(valor) {
        const taxa =  1.02;
        return this._saque(valor, taxa)
    }
}