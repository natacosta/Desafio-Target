const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


fazerPergunta();

function fazerPergunta() {
    rl.question('Qual questão você deseja ver o resultado? [1, 2, 3, 4, 5] ', (valor) => {
        switch (valor) {
            case '1':
                PrimeiroProblema()
                break;
            case '2':
                console.log(SegundoProblema())
                break;
            case '3':
                terceiroProblema()
                break;
            case '4':
                quartoProblema()
                break;
            case '5':
                quintoProblema()
                break;
            default:
                console.log('Opção inválida');
                break;
        }
        fazerPergunta();

    });
}


function PrimeiroProblema() {

    INDICE = 13;
    K = 0;
    SOMA = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    console.log(`O resultado da primeira questão é ${SOMA}`)
}

function SegundoProblema() {

    let Numero = 10;
    let sequencia = [0, 1];
    for (let i = 2; i < Numero; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    return sequencia;
}

function terceiroProblema() {

    console.log(`O resultado de A será ${9}, pois basta adicionar + 2 ao 7`)
    console.log(`O resultado de B será ${128}, pois multiplicar 2 `)
    console.log(`O resultado de C será ${49}, pois deve ser somadao 36 + 13`)
    console.log(`O resultado de D será ${100}, pois (28 + 8) = 36 e 36 + 64`)
    console.log(`O resultado de E será ${13}, pois basta somar os dois numeros imediatamente anteriores`)
    console.log(`O resultado de F será ${20}, pois o padrão é obserevado a partir do número 16 , ou seja , é necessário somar 1`)

}

function quartoProblema() {

    console.log('Infelizmente não consegui chegar a uma resposta :( ')
}

function quintoProblema() {

    let minhaString = "desafio";
    let novaString = "";

    for (let i = minhaString.length - 1; i >= 0; i--) {
        novaString += minhaString[i];
    }
    console.log(novaString);

}

