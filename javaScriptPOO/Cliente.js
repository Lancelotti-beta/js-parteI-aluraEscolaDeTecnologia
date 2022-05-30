export class Cliente {
    constructor(nome, cpf, endereco, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this.endereco = endereco;

        this._senha = senha;
    }

    get cpf(){
        return this._cpf;
    }


    userAuthenticated(senha) {
        return senha == this._senha;
    }

}


