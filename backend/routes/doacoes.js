// Importa o módulo Express, uma biblioteca de roteamento e middleware para aplicações web Node.js.
const express = require('express');

// Cria um novo objeto Router que é um manipulador de rota isolado, um mini-aplicativo capaz de realizar 
// funções de middleware e roteamento. Esse Router pode ser montado como um middleware em qualquer caminho 
// na aplicação principal.
const router = express.Router();

// Importa o controlador de doações que contém a lógica de negócios associada às rotas de doações.
// Este controlador define funções para adicionar e listar doações, que são usadas aqui para manipular
// as requisições que correspondem a essas ações.
const doacaoController = require('../controllers/doacoes');

// Define uma rota POST no caminho base do roteador ('/'). 
// Quando uma requisição POST para o caminho '/' é recebida, o método 'addDoacao' do 'doacaoController' é chamado.
// Este método é responsável por adicionar uma nova doação ao banco de dados.
router.post('/', doacaoController.addDoacao);

// Define uma rota GET no caminho base do roteador ('/').
// Quando uma requisição GET para o caminho '/' é recebida, o método 'listDoacoes' do 'doacaoController' é chamado.
// Este método é responsável por listar todas as doações existentes no banco de dados e enviá-las como resposta.
router.get('/', doacaoController.listDoacoes);

// Exporta o roteador configurado para que possa ser usado pelo módulo principal da aplicação ou outro submódulo.
// Isso permite que as rotas definidas aqui sejam montadas em um caminho específico na aplicação principal,
// mantendo a organização e modularidade do código.
module.exports = router;
