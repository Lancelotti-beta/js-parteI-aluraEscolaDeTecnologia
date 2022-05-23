import {Conta} from "./Conta.js";
import {Cliente} from "./Cliente.js";

const cliente = new Cliente();

cliente.nome = 'José';
cliente.endereco = 'Rua Rebouças';
cliente.rg = '12.345.678 - x'
cliente.cpf = 3398899970;

console.log(cliente);

const jujubinha = new Conta();

jujubinha.agencia = '001';
jujubinha.tipo = 'Conta Corrente';


console.log(jujubinha);