// Importa o módulo Express, que é um framework para criar aplicações web e APIs em Node.js.
const express = require('express');

// Importa o módulo CORS, utilizado para permitir ou restringir recursos solicitados em um servidor web 
// dependendo de onde a solicitação HTTP foi iniciada.
const cors = require('cors');

// Importa o módulo bodyParser, que é usado para analisar o corpo das requisições HTTP recebidas.
// Isso ajuda a converter o corpo da requisição em um formato JSON ou outros formatos facilmente acessíveis.
const bodyParser = require('body-parser');

// Importa as rotas para os doadores, definindo como as requisições para URLs relacionadas a doadores serão manipuladas.
const doadoresRoutes = require('./routes/doadores');

// Importa as rotas para as doações, definindo como as requisições para URLs relacionadas a doações serão manipuladas.
const doacoesRoutes = require('./routes/doacoes');

// Cria uma instância do aplicativo Express.
const app = express();

// Define a porta que o servidor usará para ouvir as solicitações.
const port = 3000;

// Aplica o middleware CORS ao aplicativo, o que permite que requisições de diferentes origens sejam aceitas.
app.use(cors());

// Configura o bodyParser como middleware para analisar o corpo das requisições em formato JSON.
app.use(bodyParser.json());

// Configura as rotas para '/doadores'. Todas as requisições para URLs que começam com '/doadores' serão encaminhadas para doadoresRoutes.
app.use('/doadores', doadoresRoutes);

// Configura as rotas para '/doacoes'. Todas as requisições para URLs que começam com '/doacoes' serão encaminhadas para doacoesRoutes.
app.use('/doacoes', doacoesRoutes);

// Inicia o servidor na porta definida e registra uma mensagem no console assim que o servidor começar a rodar.
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
