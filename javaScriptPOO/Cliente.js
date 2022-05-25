export default class Cliente {
    nome;
    #cpf;
    endereco;

    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
    }

    get cpf(){
        return this.#cpf;
    }

}


