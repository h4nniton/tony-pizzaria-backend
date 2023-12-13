/*******************************************************************************************
 * Objetivo: Criar uma API para integração com o front-end
 * Data: 06/12/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
***********************************************************************************************/
//Import das bibliotecas para criar a API
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


//Criando um objeto para manipular as requisições da API  (como instância de objeto no JAVA)
const app = express()

//request - Entrada de dados na API (recebe)
//response - Saída(return) de dados na API (devolve)

//pacotes no protocolo http - cabeçalho(header) - onde ficam as referências (de onde vem, pra onde, permissões)
//                          - corpo(body)


//Dizendo com o objeto app vai ser utilizado -> configuração de permissões, como a 
//api poderá ser utilizada  --- Função para manipular as retrições da API
app.use((request, response, next) =>{
    // (relacionado ao erro do cors no front-end)
    //a requisição é feita onde o front está hospedado (o servidor)
    //Permite especificar quem poderá acessar a API (* = liberar acesso público / IP = libera acesso apenas a máquna especificada)
    response.header('Access-Control-Allow-Origin', '*')
    //Quais métodos podem ser usados 
    response.header('Acesss-Control-Allow-Methods', 'GET')

    //Ativa as configurações de permissão no cors
    app.use(cors());

    //Passa para a próxima função, continuar o processamento 
    next()
})