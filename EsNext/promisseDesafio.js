const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo (caminho){
    return new Promise((resolve, reject) =>{
        fs.readFile(caminho, (_, conteudo) =>{
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

exibirConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O resultado é: ${conteudo}`)
    .then(console.log)
    .catch(erro => console.log(erro.message))