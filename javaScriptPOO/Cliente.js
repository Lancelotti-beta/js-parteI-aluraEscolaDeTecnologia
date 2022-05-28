export default class Cliente {
    
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
    }

    get cpf(){
        return this.#cpf;
    }

}


