// 01 -
function cumprimentar(nome) {
    return `olá ${nome}!`;
}

console.log(cumprimentar('vinicius'));

//02 -
function convertIdadeAnosParaDias(idade) {
    return 365 * idade;
}

console.log(convertIdadeAnosParaDias(69));

//03 -
function calculaSalario(valorHora, horasTrabalhadas) {
    return `Salário igual a R$ ${valorHora * horasTrabalhadas}`;
}

console.log(calculaSalario(150, 40.5));

//04 - 
function nomeMes(numeroMes) {
    // switch (numeroMes) {
    //     case 1:
    //         return 'Janeiro';
    //         break;
    //     case 2:
    //         return 'Fevereiro';
    //         break;
    //     case 3:
    //         return 'Março';
    //         break;
    //     case 4:
    //         return 'Abril';
    //         break;
    //     case 5:
    //         return 'Maio';
    //         break;
    //     case 6:
    //         return 'Junho';
    //         break;
    //     case 7:
    //         return 'Julho';
    //         break;
    //     case 8:
    //         return 'Agosto';
    //         break;
    //     case 9:
    //         return 'Setembro';
    //         break;
    //     case 10:
    //         return 'Outubro';
    //         break;
    //     case 11:
    //         return 'Novembro';
    //         break;
    //     case 12:
    //         return 'Dezembro';
    //         break;
    //     default:
    //         return `Numero ${numeroMes} inválido`;
    // }

    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes - 1];
}

console.log(nomeMes(1));

//05 -
function maiorOuIgual(num1, num2) {
    return typeof num1 != typeof num2 ? false : num1 >= num2;
}

console.log(maiorOuIgual(0, '0'));

//06 -
function inverso(entrada) {
    if (typeof entrada == 'number') return -entrada
    else if (typeof entrada == "boolean") return !entrada
    return 'booleano ou numero esperado'

}

console.log(inverso('oi'))

//08 -
function multiplicar(num1, num2) {
    var resultado = 0;
    for (var i = 0; i < num2; i++) {
        resultado += num1;
    }
    return resultado;
}

console.log(multiplicar(5, 10));

//09 -
function repetir(entrada, repeticao) {
    let lista = [];
    for (let i = 0; i < repeticao; i++) {
        lista.push(entrada);
    }
    return lista;
}

console.log(repetir('Frase', 3));

//10 -
function simboloMais(qtd) {
    //let resultado = '';
    // for(let i = 0; i < qtd; i++){
    //     resultado += '+'
    // }
    // return resultado;
    return '+'.repeat(qtd);
}

console.log(simboloMais(5));

//11 -
function primeiroEUltimoElemento(lista) {
    var aux = []
    aux.push(lista[0], lista[lista.length - 1])
    return aux;
}

console.log(primeiroEUltimoElemento(['ola', 7, 'não', 'bem']));

//12 -
function removerPropriedade(obj, entrada) {
    let copia = obj
    delete copia[entrada];
    return obj;
}

console.log(removerPropriedade({ a: 1, b: 2 }, 'a'));

// 13 -
function filtraNumeros(lst) {
    var lst_copia = [];
    for (var i of lst) {
        if (typeof i == 'number') {
            lst_copia.push(i);
        }
    }
    return lst_copia
}

console.log(filtraNumeros(['ola', 5, '7', 'tchau', 80]));

//14 -
function objParaArray(obj) {
    var lst = [];
    for (var x in obj) {
        lst.push([x, obj[x]]);
    }
    return lst;

}

console.log(objParaArray(
    {
        nome: 'marcos',
        idade: 90
    }));

//15 -
function somenteParSomenteIndicePar(lst) {
    var copia = [];
    for (var x of lst) {
        if (x % 2 == 0 && lst.indexOf(x) % 2 == 0) {
            copia.push(x);
        }
    }
    return copia;
}

console.log(somenteParSomenteIndicePar([10, 70, 22, 43]));

//16 -
function checarAnoBissexto(ano) {
    // if(ano % 100 == 0){
    //     return false
    // }
    // else if(ano % 400 == 0){
    //     return true
    // }
    // return ano % 4 == 0;
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto(2100))

//17 -
function somaArray(lst) {
    var sum = 0;
    for (var x of lst) {
        sum += x;
    }
    return sum;
}

console.log(somaArray([2, 2, 2]));

//18 -
function despesasTotais(lst) {
    var soma = 0;
    for (var x of lst) {
        soma += x.preco;
    }
    return soma;
}

console.log(despesasTotais([
    { nome: 'cinema', categoria: 'entreterimento', preco: 55 },
    { nome: 'mecanica', categoria: 'carros', preco: 100 },
    { nome: 'mercado', categoria: 'alimento', preco: 45 }
]));

//19 -
function calcularMedia(lst) {
    // var sum = 0;
    // for (var x of lst) {
    //     sum += x;
    // }
    //return sum/lst.length;
    return somaArray(lst) / lst.length; //usando a função que faz a soma do array
}

console.log(calcularMedia([1, 2, 3, 4, 5]));

//20 -
function areaDoTriangulo(base, altura) {
    return ((base * altura) / 2).toFixed(2);
}

console.log(areaDoTriangulo(9.25, 13.1));

// 21 -
function menorNumero(lst) {
    var menor = lst[0];
    for (var x in lst) {
        if (lst[x] < menor) {
            menor = lst[x];
        }
    }
    return menor;
    //return Math.min(...lst);
}

console.log(menorNumero([5, 8, 3, 7, 2, 9]));

//22 -
function funcaoDaSorte(numero) {
    var numero_sorteado = Math.floor(Math.random() * 11);
    return (numero == numero_sorteado) && !numero_sorteado ?
        `Parabéns vc jogou o numero ${numero} e foi sorteado o numero ${numero_sorteado}` :
        `Que pena seu numero foi ${numero} e o numero sorteado foi ${numero_sorteado}`;
}

console.log(funcaoDaSorte(0));

//23 -
function contaPalavras(frase) {
    return frase.split(' ').length;
}

console.log(contaPalavras('ola tudo bem com você?'));

//24 -
function contaOcorrencia(alvo, texto) {
    var cont = 0;
    for (var x = 0; x < texto.length; x++) {
        if (texto.charAt(x) === alvo) {
            cont++;
        }
    }
    return cont;
}

console.log(contaOcorrencia('o', 'oi, tudo bom?'));

//25 -
function buscaPalavras(busca, lst) {
    var aux = [];

    for (var palavra of lst) {
        if (palavra.includes(busca)) {
            aux.push(palavra);
        }
    }
    return aux;
}

console.log(buscaPalavras('a', ['python', 'java', 'javascript', 'angular', 'javali']))

//26 -
function removerVogais(palavra) {
    return palavra.replace(/(a|e|i|o|u)/ig, '')
}

console.log(removerVogais('lista'));

//27 -
function inverter(obj) {
    var obj_aux = {};
    for (var x in obj) {
        obj_aux[obj[x]] = x;
    }
    return obj_aux;
}

console.log(inverter({ a: 1, b: 2, c: 3 }));

//28 -
function filtrarQuantidadeDigitos(lista, qtd_digitos_desejado) {
    var lista_aux = [];
    for (var elemento of lista) {
        var quantidadeDigitosLst = String(elemento).length;

        if (quantidadeDigitosLst == qtd_digitos_desejado) {
            lista_aux.push(elemento);
        }
    }
    return lista_aux;
}

console.log(filtrarQuantidadeDigitos([1, 12, 9, 6, 30, 365], 2));

//29 -

//30 -
function receberMelhorEstudante(obj) {
    var resultado = {};
    var maior = -Infinity;
    var chave;
    for (var x in obj) {
        resultado[x] = calcularMedia(obj[x]);
    }
    obj = {};
    for (var prop in resultado) {
        // ignorar propriedades herdadas
        if (resultado.hasOwnProperty(prop)) {
            if (resultado[prop] > maior) {
                maior = resultado[prop];
                chave = prop;
                obj[chave] = maior;
            }
        }
    }
    return obj
}

console.log(receberMelhorEstudante({
    vini: [10, 10, 10, 10],
    lene: [1, 2, 9, 7, 8]
}))

const objeto = {a:1, b:2, c:3}
console.log(objeto)

objeto = {}
console.log(objeto)
