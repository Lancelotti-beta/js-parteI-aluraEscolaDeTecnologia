export class Cliente {
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this._cpf = cpf;
        this.endereco = endereco;
    }

    get cpf(){
        return this._cpf;
    }

}


