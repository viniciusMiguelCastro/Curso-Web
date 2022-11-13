let a = 1;
console.log(a)

const nomes = new Promise((resolve, reject) =>{
    resolve(['Lene', 'Vini', 'Caixa'])
})

nomes  
    .then(lista => lista[0])
    .then(primeiroNome => primeiroNome)
    .then(primeiraLetra => primeiraLetra[0])
    .then(letra => console.log(letra))
    //.then(console.log)
