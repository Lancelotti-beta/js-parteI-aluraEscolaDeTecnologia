import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

const bruno = new Conta();
bruno.agencia = '001';

bruno.tipo = new ContaCorrente();
bruno.tipo.deposito(500);
bruno.tipo.saque(150);

bruno.cliente = new Cliente();
bruno.cliente.nome = 'Bruno José';
bruno.cliente.cpf = 33388846807;
bruno.cliente.rg = '12.184.999-x';
bruno.cliente.endereco = 'Rua Rebouças';



console.log(bruno, bruno.tipo.saldo, bruno.cliente);
