// Importa o módulo Express. Express é um framework web para Node.js que fornece ferramentas robustas para criar 
// servidores web e APIs de forma rápida e fácil. 
const express = require('express');

// Cria um objeto Router. O Router é uma parte do Express que permite definir rotas em um objeto separado,
// que depois pode ser incorporado ao aplicativo principal. Isso ajuda a manter as rotas organizadas e 
// facilita a manutenção do código ao separar diferentes partes da lógica de roteamento em arquivos diferentes.
const router = express.Router();

// Importa o controlador de doadores. Este módulo contém funções que são executadas em resposta a rotas específicas.
// Neste caso, 'addDoador' é uma função que lidará com a lógica de adicionar um novo doador ao sistema.
const doadorController = require('../controllers/doadores');

// Define uma rota POST no caminho base ('/'). 
// A função 'addDoador' do controlador 'doadorController' é designada para lidar com requisições POST nesse caminho.
// Quando uma requisição POST é feita para esta rota, 'addDoador' é chamada para processar a requisição,
// geralmente envolvendo receber dados do corpo da requisição e usar esses dados para adicionar um novo doador ao banco de dados.
router.post('/', doadorController.addDoador);

// Exporta o objeto 'router'. Isso permite que este arquivo de roteador seja importado em outras partes da aplicação,
// como o arquivo principal do servidor, onde este roteador pode ser montado em um caminho específico.
// Ao montar este roteador, todas as rotas definidas aqui estarão sob um caminho base comum, 
// ajudando a organizar melhor a estrutura da API.
module.exports = router;
