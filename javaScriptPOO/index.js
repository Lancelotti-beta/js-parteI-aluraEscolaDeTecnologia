import Conta from "./Conta.js";
import Cliente from "./Cliente.js";

const cliente = new Cliente();

cliente.nome = 'José';
cliente.endereco = 'Bella Vista';
cliente.rg = '12.345.678-x'
cliente.cpf = 8833999970;

const client2 = new Cliente();

client2.nome = 'Yan de Freitas';
client2.endereco = 'Bella Vista'
client2.cpf = 1234567899;
client2.rg = '12.467.888-x'

// ===================================
const lalachinha = new Conta();

lalachinha.agencia = '001';
lalachinha.tipo = 'Conta Corrente';
lalachinha.cliente = cliente;

const jujubinha = new Conta();

jujubinha.agencia = '075';
jujubinha.tipo = 'Conta Poupança';
jujubinha.cliente = client2;

lalachinha.deposito(800);
lalachinha.transferencia(100, jujubinha);

console.log(jujubinha.saldo());