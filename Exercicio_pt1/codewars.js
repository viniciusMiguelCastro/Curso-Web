// Você provavelmente conhece o sistema de "curtir" do Facebook e de outras páginas. As pessoas podem "curtir" postagens de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de tal item.

// Implemente a função que recebe um array contendo os nomes das pessoas que gostam de um item. Ele deve retornar o texto de exibição conforme mostrado nos exemplos:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//
// Nota: Para 4 ou mais nomes, o número "and 2 others"simplesmente aumenta.

function likes(names) {
    if (names.length == 0) return 'no one likes this'
    else if (names.length == 1) return `${names} likes this`
    else if (names.length == 2) return `${names.toString().replace(/,/g, ' and ')} like this`
    else if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}


//return `${names[0].toString()}, ${names[2].toString().replace(/,/g, ' and ')} like this`
//return names.length >= 4 ? `${names.toString().replace(/,/g, ' and ')} likes this` : `${names.toString().replace(/,/g, ' and ')} like this`
console.log(likes(["Alex", "Jacob", "Mark", "Max", 'ggw', 'gweugeu']))


// Faça um programa que filtre uma lista de strings e retorne uma lista apenas com o nome de seus amigos.

// Se um nome tem exatamente 4 letras, pode ter certeza que tem que ser um amigo seu! Caso contrário, pode ter certeza que ele não é...

// Ex: Entrada = ["Ryan", "Kieran", "Jason", "Você"], Saída = ["Ryan", "Você"]

// ou seja

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Nota: mantenha a ordem original dos nomes na saída.


function friend(friends) {
    // const aux = []
    // for(let friend of friends){
    //     if(friend.length == 4) aux.push(friend)
    // }
    // return aux
    return friends.filter(friend => friend.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Jason", "Você"]))


console.log(Math.sqrt(121))