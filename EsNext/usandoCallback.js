// sem promisse

const http = require('http')

const getTurma = (letra, callBack) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resp => {
        let resultado = ''

        resp.on('data', dados => {
            resultado += dados
        })

        resp.on('end', () => {
            callBack(JSON.parse(resultado))
        })
    })
}

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `TurmaA: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `TurmaB: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `TurmaC: ${a.nome}`))
            console.log(nomes)
        })
    })
})