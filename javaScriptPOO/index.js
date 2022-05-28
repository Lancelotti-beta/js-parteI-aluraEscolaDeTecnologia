import Conta from "./Conta.js";
import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";


const cliente = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
const contaCorrente = new ContaCorrente();
const bruno = new Conta('001', contaCorrente, cliente);

bruno.tipo.deposito(5000);
bruno.tipo.saque(1500);

console.log(bruno);

const cliente2 = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
const contaPoupanca = new ContaPoupanca(1000);

const jose = new Conta('075', contaPoupanca, cliente2);


console.log(jose);
