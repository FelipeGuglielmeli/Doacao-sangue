const db = require('../db/db');

exports.addDoador = (req, res) => {
    const { nome, cpf, contato, tipo_sanguineo, rh, tipo_e_rh_corretos, situacao } = req.body;
    const sql = 'INSERT INTO Doador (nome, cpf, contato, tipo_sanguineo, rh, tipo_e_rh_corretos, situacao) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.run(sql, [nome, cpf, contato, tipo_sanguineo, rh, tipo_e_rh_corretos, situacao], function (error) {
        if (error) {
            res.status(500).send({ message: 'Erro ao cadastrar doador', error });
        } else {
            res.status(201).send({ message: 'Doador cadastrado com sucesso', doadorId: this.lastID });
        }
    });
};
