const clientes = require("./cliente.json");

function ordenar(lista, propriedade)
{
    const resultado = lista.sort((a,b)=>
    {
       if(a[propriedade] < b[propriedade])
       {
        return -1;
       } 
       if(a[propriedade] > b[propriedade])
       {
        return 1;
       }
       return 0;
    });

    return resultado;
}

const ordenarNome = ordenar(clientes, "nome");

console.log(ordenarNome);

//Não entendi muito bem. Vou pesquisar mais sobre depois.