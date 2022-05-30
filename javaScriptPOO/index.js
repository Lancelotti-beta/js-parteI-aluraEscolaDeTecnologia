import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";


/* ==================== Conta Corrente ==================== */
const cliente = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
const bruno = new ContaCorrente("075", cliente);

/* ==================== Conta Poupança ==================== */
const cliente2 = new Cliente('Bruno José', 33322248406, 'Rua Rebouças');
const jose = new ContaPoupanca(500, "001", cliente2);

const contaSalario = new ContaSalario(cliente2);

//console.log(bruno);

contaSalario.deposito(125);
contaSalario.saque(50);

console.log(contaSalario);
