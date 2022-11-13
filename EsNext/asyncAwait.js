// com promisse

const http = require('http');
const { resolve } = require('path');

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resp => {
            let resultado = ''

            resp.on('data', dados => {
                resultado += dados
            })

            resp.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (erro) {
                    reject(erro)
                }
            })
        })
    })
}

// recurso ES8
// objetivo de simplificar o uso de promisses...

let obterAlunos = async () => {
    const turmarA = await getTurma('A')
    const turmarB = await getTurma('B')
    const turmarC = await getTurma('C')
    return [].concat(turmarA, turmarB, turmarC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))