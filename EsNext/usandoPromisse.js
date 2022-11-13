// com promisse

const http = require('http');
const { resolve } = require('path');

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, resp => {
            let resultado = ''
    
            resp.on('data', dados => {
                resultado += dados
            })
    
            resp.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(erro){
                    reject(erro)
                }
            })
        })
    })
}

// let nomes = [];
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `TurmaA: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `TurmaB: ${a.nome}`))
//         getTurma('C', alunos => {
//             nomes = nomes.concat(alunos.map(a => `TurmaC: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'),getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(alunos => alunos.nome))
.then(nomes => console.log(nomes))
.catch(erro => console.log(erro.message))

