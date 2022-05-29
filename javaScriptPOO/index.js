import {Conta} from "./Conta.js";
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

/* ==================== Conta Corrente ==================== */
const cliente = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
//const conta = new Conta();
const bruno = new ContaCorrente("075", cliente);

/* ==================== Conta Poupança ==================== */
const cliente2 = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
//const conta2 = new Conta();
const jose = new ContaPoupanca(1000, "001", cliente2);


console.log(bruno);
console.log(jose);
