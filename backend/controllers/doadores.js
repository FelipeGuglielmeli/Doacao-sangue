// Importa a configuração do banco de dados a partir do módulo localizado em '../db/db'.
// Este módulo configura e fornece uma conexão ao banco de dados SQLite.
const db = require('../db/db');

// Exporta a função 'addDoador' para ser usada como um controlador de rota em uma aplicação Express.
// Essa função será chamada quando uma requisição HTTP do tipo POST for recebida na rota associada a esse controlador.
exports.addDoador = (req, res) => {
    // Extrai os dados do corpo da requisição. Esses dados são enviados pelo cliente e incluem informações
    // sobre o doador como nome, CPF, contato, tipo sanguíneo, fator RH, se o tipo e RH estão corretos, e a situação (ativo ou inativo).
    const { nome, cpf, contato, tipo_sanguineo, rh, tipo_e_rh_corretos, situacao } = req.body;

    // Prepara a string SQL para inserir um novo doador no banco de dados.
    // '?' são placeholders que serão substituídos pelos valores reais em uma operação segura para evitar injeção de SQL.
    const sql = 'INSERT INTO Doador (nome, cpf, contato, tipo_sanguineo, rh, tipo_e_rh_corretos, situacao) VALUES (?, ?, ?, ?, ?, ?, ?)';

    // Executa a consulta SQL para inserir os dados no banco.
    // Os valores para substituir os placeholders são fornecidos em um array.
    db.run(sql, [nome, cpf, contato, tipo_sanguineo, rh, tipo_e_rh_corretos, situacao], function (error) {
        // Este callback é chamado após a tentativa de execução da consulta.
        if (error) {
            // Se houver um erro durante a inserção, envia uma resposta com status HTTP 500 (Erro Interno do Servidor)
            // e uma mensagem indicando o erro.
            res.status(500).send({ message: 'Erro ao cadastrar doador', error });
        } else {
            // Se a inserção for bem-sucedida, envia uma resposta com status HTTP 201 (Criado)
            // e uma mensagem de sucesso, incluindo o ID do doador recém-criado, acessível através de 'this.lastID'.
            res.status(201).send({ message: 'Doador cadastrado com sucesso', doadorId: this.lastID });
        }
    });
};
