var items = [];

document.querySelector('input[type=submit')
    .addEventListener('click', () => {
        var nomeProdutos = document.querySelector('input[name=nome-produto]').value;
        var precoProdutos = document.querySelector('input[name=valor-produto]').value;

        items.push({
            nome: nomeProdutos.value,
            valor: precoProdutos.value
        });

        /*
        <div class="lista-produtos-item">
            <h3>Nome</h3>
            <span><span class="box-valor">R$ 0,00</span></span>
        </div>
        */
        
        let listaProdutos = document.querySelector('.lista-produtos')
        let soma = 0

        listaProdutos.innerHTML = "";

        items.map(function (val) {
            soma += parseFloat(val.valor);
            listaProdutos.innerHTML += `
            <div class="lista-produtos-item">
                <h3>${val.nome}</h3>
                <span><span class="box-valor">R$ ${val.valor}</span></span>
            </div>`
        });
        soma = soma.toFixed(2);
        nomeProdutos.value = "";
        precoProdutos.value = "";

        let elementoSoma = document.querySelector('.soma-produtos h1');
        elementoSoma.innerHTML = `R$ ${soma}`;
        
    });

document.querySelector('button[name=limpar]')
    .addEventListener('click', () => {
        items = [];
        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma-produtos h1').innerHTML = "R$ 0.00";
    })