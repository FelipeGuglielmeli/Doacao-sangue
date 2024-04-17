// Importa o módulo sqlite3 e habilita o modo verbose, que ajuda a obter mais informações sobre o que o banco de dados está fazendo, 
// registrando mais detalhes sobre as operações no console.
const sqlite3 = require('sqlite3').verbose();

// Cria uma nova instância de banco de dados SQLite. O arquivo do banco de dados usado é 'doacao_sangue.db'.
// Se o arquivo não existir, SQLite o criará automaticamente no local especificado ('./doacao_sangue.db').
const db = new sqlite3.Database('./doacao_sangue.db', (err) => {
    // Este callback é chamado quando a tentativa de conexão com o banco de dados é concluída.
    // 'err' contém erros que podem ter ocorrido durante a conexão.
    if (err) {
        // Se houver um erro ao tentar conectar ao banco de dados, ele é registrado no console.
        console.error('Erro ao conectar ao banco de dados', err);
    } else {
        // Se a conexão for bem-sucedida, uma mensagem de sucesso é registrada no console.
        console.log('Conectado ao banco de dados SQLite.');

        // Executa um comando SQL PRAGMA para habilitar o suporte a chaves estrangeiras.
        // Chaves estrangeiras são usadas para impor a integridade referencial entre tabelas.
        db.exec('PRAGMA foreign_keys = ON', (error) => {
            // Este callback é chamado após a tentativa de executar o comando PRAGMA.
            if (error) {
                // Se houver um erro ao tentar habilitar as chaves estrangeiras, ele é registrado no console.
                console.error("Pragma statement didn't work.");
            } else {
                // Se o comando PRAGMA for bem-sucedido, uma mensagem confirmando a ativação das chaves estrangeiras é registrada.
                console.log("Foreign Key Enforcement is on.");
            }
        });
    }
});

// Exporta a instância do banco de dados para que possa ser usada em outras partes do aplicativo.
module.exports = db;
