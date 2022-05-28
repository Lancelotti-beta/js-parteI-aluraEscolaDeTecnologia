import Conta from "./Conta.js";

export default class ContaPoupanca {
    static numeroDeCp = 0;

    constructor (saldoInicial, agencia){
        if(saldoInicial >= 500){
            this.#saldo =+ saldoInicial;
        } else {
            return `Operação Invalida!`
        }
        
        this.#agencia = agencia;

        ContaPoupanca.numeroDeCp++;
    }

}