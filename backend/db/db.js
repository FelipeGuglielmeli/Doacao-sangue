const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./doacao_sangue.db', (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        db.exec('PRAGMA foreign_keys = ON', (error) => {
            if (error) {
                console.error("Pragma statement didn't work.");
            } else {
                console.log("Foreign Key Enforcement is on.");
            }
        });
    }
});

module.exports = db;
