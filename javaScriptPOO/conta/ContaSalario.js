import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
	constructor(cliente){
		super(0, '100', cliente);
	}

	saque(valor){
		const taxa = 1.01;
		return this._saque(valor, taxa);
	}

}


