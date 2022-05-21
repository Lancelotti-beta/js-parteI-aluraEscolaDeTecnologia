//Console.log('Uma mensagem qualquer para teste')
// Console. != console. >>>> O JS é case sensitive

const idade = 25;
const nome = 'Bruno';
const ano = 2022;

//let ano = 2022;

console.log('no ano de ' + ano);
console.log(nome + ' tem ' + idade + ' anos');

//apesar do JavaScript permitir criar variáveis sem 'const', 'let' ou 'var'
//é recomendado não fazer pois pode gerar problemas futuros em grandes aplicações


/* <<<< Trabalhando com tipos e conversão e conta >>>> */

function contas(number, number2) {
    console.log(number + number2 * 2);

    console.log((number + number2) * 2);
}

function trabalhandoComTipos(string, string2, number, number2, numberFloat) {
    
    console.log(number + number2);
    
    const compara = string / string2;
    if (isNaN(compara)) {
        console.log('===========================');
        console.log('Eu até tentei dividir, mas você deu um valor não númerico');
    } else {
        console.log(string + string2);
        console.log(parseInt(string) + parseInt(string2));

        console.log(string / string2);
    }

    console.log(numberFloat);
    if (numberFloat) {
        console.log(2, 7); 
        //a virgula é um caracter especial, quando se quer utilizar uma virgula no numero
        //usa-se o ponto (.)
    }
}


console.log('=============================');
contas(10, 8);

console.log('=============================');
trabalhandoComTipos('feijão', '22', 5, 15, 2.8);

console.log('=============================');
trabalhandoComTipos('22', '22', 5, 15, 2.8);

