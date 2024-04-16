const db = require('../db/db');

exports.addDoacao = (req, res) => {
    const { data, hora, volume, nomeDoador, situacao } = req.body;
    const sqlFindDoador = 'SELECT codigo FROM Doador WHERE nome = ?';
    const sqlInsertDoacao = 'INSERT INTO Doacao (data, hora, volume, doador, situacao) VALUES (?, ?, ?, ?, ?)';

    db.get(sqlFindDoador, [nomeDoador], (err, row) => {
        if (err) {
            return res.status(500).send({ message: 'Erro ao encontrar doador', err });
        }
        if (row) {
            db.run(sqlInsertDoacao, [data, hora, volume, row.codigo, situacao], function (error) {
                if (error) {
                    res.status(500).send({ message: 'Erro ao cadastrar doação', error });
                } else {
                    res.status(201).send({ message: 'Doação cadastrada com sucesso', doacaoId: this.lastID });
                }
            });
        } else {
            res.status(404).send({ message: 'Doador não encontrado' });
        }
    });
};

exports.listDoacoes = (req, res) => {
    const sql = `
    SELECT Doacao.codigo, Doacao.data, Doacao.hora, Doacao.volume, Doador.nome AS nomeDoador, Doacao.situacao
    FROM Doacao
    INNER JOIN Doador ON Doacao.doador = Doador.codigo`;

    db.all(sql, (error, results) => {
        if (error) {
            return res.status(500).send({ message: 'Erro ao obter doações', error });
        }
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
