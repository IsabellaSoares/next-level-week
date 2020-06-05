import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
    // __dirname --> variável global que retorna o caminho do diretório que está executando o comando
  },
});

export default connection;
