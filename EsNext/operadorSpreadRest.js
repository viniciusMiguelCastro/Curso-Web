// operador... rest(juntar)/spread(separar)

// usar spread com objeto
const funcionario ={nome: 'Maria', salario: 3500 }
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['lene', 'vini']
const grupoFinal = ['caixa', ...grupoA, 'catia']
console.log(grupoFinal);
