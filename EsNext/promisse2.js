// setTimeout(callbak1 => {
//     console.log('Executando CallBack')

//     setTimeout(callbak2 => {
//         console.log('Executando CallBack 2')

//         setTimeout(callbak3 => {
//             console.log('Executando CallBack 3')
//         }, 2000)
//     }, 2000)
// }, 2000)


function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executando promisse...')
            resolve()
        }, tempo)
    }) 
}

// esperarPor(3000)
//     .then(texto => console.log(texto))
//     //.then(console.log)

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)