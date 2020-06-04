import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuários');

  // response.send('Hello world!');

  response.json(['Diego', 'Cleiton', 'Robson']);
});
app.listen(3333);
