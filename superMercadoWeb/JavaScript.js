

// Cadastro de Produtos


const itens = [
  {
    idCompra: '0',
    idCard: '0',
    nome: 'Açai',
    foto: './fotos/fotos frutas/acai.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '1',
    idCard: '1',
    nome: 'Jaca',
    foto: './fotos/fotos frutas/jaca.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '2',
    idCard: '2',
    nome: 'Laranja',
    foto: './fotos/fotos frutas/laranja.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '3',
    idCard: '3',
    nome: 'Maça',
    foto: './fotos/fotos frutas/maca.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '4',
    idCard: '4',
    nome: 'Melao',
    foto: './fotos/fotos frutas/melao.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '5',
    idCard: '5',
    nome: 'Danone',
    foto: './fotos/fotos laticinios/danone.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '6',
    idCard: '6',
    nome: 'Iogurte',
    foto: './fotos/fotos laticinios/Iogurte.jpg',
    valor: '10.00',
    quantidade: '0'
  },
  {
    idCompra: '7',
    idCard: '7',
    nome: 'Leite de Caixa',
    foto: './fotos/fotos laticinios/leiteCaixa.jpg',
    valor: '10.00',
    quantidade: '0'
  },
  {
    idCompra: '8',
    idCard: '8',
    nome: 'Queijo',
    foto: './fotos/fotos laticinios/Queijo.jpg',
    valor: '10.00',
    quantidade: '0'
  },
  {
    idCompra: '9',
    idCard: '9',
    nome: 'Requeijao',
    foto: './fotos/fotos laticinios/requeijao.jpg',
    valor: '10.00',
    quantidade: '0'
  },
  {
    idCompra: '10',
    idCard: '10',
    nome: 'Achoco Galak',
    foto: './fotos/fotos doces/achocolatado.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '11',
    idCard: '1n',
    nome: 'nescau',
    foto: './fotos/fotos doces/nescau.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '12',
    idCard: '12',
    nome: 'Docce de Leite',
    foto: './fotos/fotos doces/doceDeleite.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '13',
    idCard: '13',
    nome: 'Barra Suflair',
    foto: './fotos/fotos doces/barraChoco.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '14',
    idCard: '14',
    nome: 'Toddy',
    foto: './fotos/fotos doces/toddy.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '15',
    idCard: '15',
    nome: 'Arroz',
    foto: './fotos/foto nao perecivel/arroz.jpg',
    valor: '10.00',
    quantidade: '0'
  },
  {
    idCompra: '16',
    idCard: '16',
    nome: 'Feijao Carioca',
    foto: './fotos/foto nao perecivel/feijao.jpg',
    valor: '10.00',
    quantidade: '0'
  },
  {
    idCompra: '17',
    idCard: '17',
    nome: 'Feijao Preto',
    foto: './fotos/foto nao perecivel/feijaoPreto.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '18',
    idCard: '18',
    nome: 'oleo',
    foto: './fotos/foto nao perecivel/oleo.jpg',
    valor: '10.00',
    quantidade: '0'
  },

  {
    idCompra: '19',
    idCard: '19',
    nome: 'Farinha de Trigo',
    foto: './fotos/foto nao perecivel/farinhaTrigo.jpg',
    valor: '10.00',
    quantidade: '0'
  }
]

//funcionalidade 1
//Esta funcionalidade cria na pagina os cards dos respectivos produtos cadastrados
iniciarLoja = () => {
  const cardapio = document.getElementById('cardapio');
  itens.map((val) => {

    cardapio.innerHTML += `
  <div  class="box-Paper">
  <div class="box-Produtos">
    <div class="box-Foto">
      <div class="foto">
        <img class="fotoAjust" src="`+ val.foto + `" alt=" foto` + val.nome + `">
      </div>
    </div>
    <div class="box-Descricao">
      <div id='nome' class="box-Nome">
        <p class="nome-Produto" id='`+ val.idCard + `'>` + val.nome + `</p>
        <p>Bandeja com 500g</p>
      </div>
      <div class="box-Preco">
        <p class="preco-Produto" >R$` + val.valor + ` </p> 
      </div>
    </div>
    <div class="box-Comprar">
      <button key = "`+ val.idCard + `" class="botao-Comprar" href='#' onclick="somarCompra(` + val.valor + `)"  >Selecionar</button>
    </div>
  </div>
</div>
  `
  })
}

iniciarLoja()


//funcinalidade 2 
/* Esta funcionalidade atualiza o carrinho de compras 
 especificando qual produto e quantidade foi adicionado*/
atualizarCarinho = () => {
  const carrinho = document.getElementById('carrinho');
  carrinho.innerHTML = "";
  itens.map((val) => {
    if (val.quantidade > 0) {
      carrinho.innerHTML += `
      <li class ='compras'>
      <button class='esc' >
      x
      </button>
       <spam>`+ val.nome + `</spam>/<spam>` + val.quantidade + ` und <spam>
      </li>
    `;
    }

  })

}
// Funcionalidade 4 
/*Esta funcionalidade passa para cada botão que seleciona o produto 
a função de aumentar a quantidade quando clicar em selecionar  */
//[importante]melhorar esta funcionalidade implementando quantidade com input 
const botaoSelecionar = document.getElementsByTagName('button');
for (let i = 0; i < botaoSelecionar.length; i++) {
  botaoSelecionar[i].addEventListener("click", function () {
    let key = this.getAttribute('key');
    itens[key].quantidade++;
    atualizarCarinho()
  })
}

//Funcionalidade 5 
/*Esta funcionalidade pega o valor do item selecionado coloca em um array 
onde e somado e o valor e impreso na tela   */
const valorCompra = []
somarCompra = (valor) => {
  valorCompra.push(Number(valor))
  const valorApagar = valorCompra.reduce((apagar, valor) => apagar + valor, 0).toFixed(2)
  const resutado = document.getElementById('resultado');

  resutado.innerHTML = `<span>R$${valorApagar}</span>`
}
/*[PROXIMAS FUNCIONALIDADES A SEREM IMPLEMENTADAS]
*Excluir compras do carrinho
*Melhorias no layout
*Adicionar um filtro por seguimento de produtos 
*Adicionar um filtro por nome de cada produto */




















