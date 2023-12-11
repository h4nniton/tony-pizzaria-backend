var categoria = {
    arrayCategorias: [
        {id: 1, nome: 'pizza salgada'},
        {id: 2, nome: 'pizza salgada'},
        {id: 3, nome: 'cupcakes'},
        {id: 4, nome: 'sorvetes'},
        {id: 5, nome: 'frutas'},
        {id: 6, nome: 'bebidas'}
    ]
};

var produtos = {
    arrayProdutos: [
        {
        id: 1,
            nome: 'Pizza peperoni com queijo e tomate',
            preco: '19,65',
            imagem: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categorias: categoria.arrayCategorias[2],
            comentarios: [
                {
                id: 1,
                usuario:'Maria da Silva',
                data: '15/03/2022',
                titulo: 'Pizza muito boa!',
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                estrelas: 3 
                },
                {
                    id: 2,
                    usuario:'Pedro Gomes Dias',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais, recomendo.',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    estrelas: 4
                    }
            ]},

        {
            id: 2,
            nome: 'Pizza de calabreza com queijo',
            preco: '16,00',
            imagem: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categorias: categoria.arrayCategorias[2],
            comentarios: [
                {
                    id: 3,
                    usuario: 'Emily Crepaldi',
                    data: '19/06/2023',
                    titulo: 'Top demais!!!',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    estrelas: 5
                }

    ]},

        {
            id: 3,
            nome: 'Pizza brotinho com queijo e tomate',
            preco: '12,00',
            imagem: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            categorias: categoria.arrayCategorias[2],
            comentarios: [
                {
                    id: 4,
                    usuario: 'Nycolle Lima',
                    data: '01/08/2023',
                    titulo: 'Poderia melhorar!!',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    estrelas: 3
             }
         ]},

         {
            id: 4,
            nome: 'Pizza de peperoni com queijo e tomate',
            preco: '16,00',
            imagem: '',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            categorias: categoria.arrayCategorias[2],
            comentarios: [
                {
                    id: 5,
                    usuario: 'Giovanna Belo',
                    data: '12/06/2023',
                    titulo: 'Muuito boa, recomendo.',
                    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    estrelas: 5
                }
            ]},
]};

var usuario = {
    arrayUsuario: [
        {
            id: 1,
            imagem: './img/maria.webp',
            nome: 'Maria da Silva',
            email: 'maria@dasilva.com',
            senha: '12345678',
            telefone: '11 98765-4321',
            localizacao: {
                id: 1,
                estado: 'SP',
                rua: 'Rua Pedro Paulino',
                bairro: 'Jardim Julieta',
                pais: 'Brasil'
                }
        },
        {
            id: 2,
            imagem: './img/pedro.webp',
            nome: 'Pedro Gomes Dias',
            email: 'pedro@gomes.com',
            senha: '1234567',
            telefone: '11 99999-8888',
            localizacao: {
                id: 2,
                estado: 'SP',
                rua: 'Rua   Joao Paulino',
                bairro: 'Jardim Paulista',
                pais: 'Brasil'
            }
        },
]};

var carrinho = {
    arrayCarrinho: [
        {
            id: 1,
            produto: '',
            valorProduto: ''
        }
]};

var pagamento = {
    arrayPagamento: [
        {
        id: 1,
        formaPagamento: '',
        idCarrinho: 1,
        idProduto: 1,
        valorProduto: ''
        }
    ]
}

