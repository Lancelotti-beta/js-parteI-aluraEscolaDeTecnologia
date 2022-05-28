import Conta from "./Conta.js";

export default class ContaCorrente {
    static numeroDeCC = 0;

    constructor (agencia){
        this.#agencia = agencia;
        this.#saldo = 0;

        ContaCorrente.numeroDeCC++;
    }
}

