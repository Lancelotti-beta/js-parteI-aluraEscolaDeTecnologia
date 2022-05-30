import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaDeLogin } from "./SistemaDeLogin.js";

const diretor = new Diretor('Albertinho', 12345678900, 10000);
diretor.cadastrarSenha('123456');

console.log(
    `Diretor: ${SistemaDeLogin.autenticacao(diretor, '123456')}\n------------`
);

const gerente = new Gerente('Julião', 19876543210, 5000);
gerente.cadastrarSenha('123');

console.log(
    `Gerente: ${SistemaDeLogin.autenticacao(gerente, '123')}\n------------`
);

const cliente = new Cliente('Thomas', 12345006789, 'Rua Andrade', '123a');


console.log(
    `Cliente: ${SistemaDeLogin.autenticacao(cliente, '123a')}\n------------`
);
