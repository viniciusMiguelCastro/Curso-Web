function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceDeErro) {
                reject('Ocorreu um erro')
            }
            else {
                resolve(valor)
            }
        }
        catch (erro) {
            reject(erro)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        v => conso.log(v),
        erro => console.log(`Erro especifico: ${erro}`)
    )
    .then(() => console.log('Quase Fim'))
    .catch(erro => console.log(`Erro geral: ${erro}`))
    .then(() => console.log('Fim!'))