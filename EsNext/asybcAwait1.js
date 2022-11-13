function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(()=> console.log('Executando promisse 1...'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando promisse 2...'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando promisse 3...'))

function retornarValor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}
async function executar() {
    let valor = await retornarValorRapido();
    // let valor = await retornarValor();

    await esperarPor(1500)
    console.log(`Async/Await 1... ${valor}`)

    await esperarPor(1500)
    console.log(`Async/Await 2... ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/Await 3... ${valor + 2}`)

    //return valor + 3
    return 'Fim da execução!'
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

//executar()
executarDeVerdade()
