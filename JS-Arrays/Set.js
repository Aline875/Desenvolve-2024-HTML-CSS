const nomes = ['aline', 'aline', 'beta', 'beta', 'ninho', 'arthur', 'arthur', 'arthur'];


const nomesAtualizadao = [... new Set(nomes)];

console.log(nomesAtualizadao)

// Ao utilizarmos o set ele automaticamente vai filtrar os nomes repetidos e montar um array, porem na hora da  impressão ele não se mostra como um array, dessa forma ele faz com que precisemos fazer uma cópia do set.
//Mas podemos fazer isso de forma mais direta como no exemplo acima.