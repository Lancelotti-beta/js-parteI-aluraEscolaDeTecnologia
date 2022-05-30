import {Conta} from "./Conta.js";
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

/* ==================== Conta Corrente ==================== */
const cliente = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
const bruno = new ContaCorrente("075", cliente);

/* ==================== Conta Poupança ==================== */
const cliente2 = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
const jose = new ContaPoupanca(500, "001", cliente2);


bruno.deposito(500);

jose.saque(75);
bruno.saque(75);


console.log(bruno);
console.log(jose);
