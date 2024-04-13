const cliente = 
{
    rua: "R. Mauro Mota.",
    numero: 67,
    apartamento: true,
    complemento: "apt 879",
    saldo: 200, // Na carteira
    efetuaPagamento: function(valor)
    {
        if(valor > this.saldo)
        {
            console.log('Saldo insuficiente.')
        }
        else
        {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso. Novo saldo ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(30); //Valor a pagar

//Usamos a palavra reservada "this" para acessar a propriedade do objeto.
//Na código acima diz que a conta de cliente ficou acima do valor que ele tem na carteira portanto ele não tem o suficiente para pagar e vai ter que lavar prato na cozinha :). O valor da conta precisa ser menor que o valor do saldo para que o pagamento seja efetuado.
