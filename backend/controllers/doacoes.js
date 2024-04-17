// Importa a configuração do banco de dados a partir do módulo '../db/db'.
const db = require('../db/db');

// Exporta a função 'addDoacao' para adicionar uma nova doação ao banco de dados.
exports.addDoacao = (req, res) => {
    // Extrai os dados necessários do corpo da requisição.
    const { data, hora, volume, nomeDoador, situacao } = req.body;

    // Prepara uma consulta SQL para encontrar o código do doador pelo nome.
    const sqlFindDoador = 'SELECT codigo FROM Doador WHERE nome = ?';

    // Prepara uma consulta SQL para inserir uma nova doação no banco de dados.
    const sqlInsertDoacao = 'INSERT INTO Doacao (data, hora, volume, doador, situacao) VALUES (?, ?, ?, ?, ?)';

    // Executa a consulta para encontrar o doador.
    db.get(sqlFindDoador, [nomeDoador], (err, row) => {
        if (err) {
            // Retorna erro 500 se ocorrer um erro ao executar a consulta.
            return res.status(500).send({ message: 'Erro ao encontrar doador', err });
        }
        if (row) {
            // Se o doador for encontrado, executa a consulta para inserir a doação.
            db.run(sqlInsertDoacao, [data, hora, volume, row.codigo, situacao], function (error) {
                if (error) {
                    // Retorna erro 500 se ocorrer um erro ao inserir a doação.
                    res.status(500).send({ message: 'Erro ao cadastrar doação', error });
                } else {
                    // Retorna sucesso 201 e o ID da nova doação se for inserida com sucesso.
                    res.status(201).send({ message: 'Doação cadastrada com sucesso', doacaoId: this.lastID });
                }
            });
        } else {
            // Retorna erro 404 se o doador não for encontrado.
            res.status(404).send({ message: 'Doador não encontrado' });
        }
    });
};

// Exporta a função 'listDoacoes' para listar todas as doações registradas no banco de dados.
exports.listDoacoes = (req, res) => {
    // Prepara uma consulta SQL para obter todas as doações, incluindo o nome do doador.
    const sql = `
    SELECT Doacao.codigo, Doacao.data, Doacao.hora, Doacao.volume, Doador.nome AS nomeDoador, Doacao.situacao
    FROM Doacao
    INNER JOIN Doador ON Doacao.doador = Doador.codigo`;

    // Executa a consulta para listar todas as doações.
    db.all(sql, (error, results) => {
        if (error) {
            // Retorna erro 500 se ocorrer um erro ao obter as doações.
            return res.status(500).send({ message: 'Erro ao obter doações', error });
        }
        // Retorna sucesso 200 e os dados das doações.
        res.status(200).send(results.map(doacao => ({
            codigo: doacao.codigo,
            data: doacao.data,
            hora: doacao.hora,
            volume: doacao.volume,
            nomeDoador: doacao.nomeDoador,
            situacao: doacao.situacao
        })));
    });
};
