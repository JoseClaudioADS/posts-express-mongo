const express = require('express');
const mongoose = require('./config/mongoose');

const PostController = require('./controllers/PostController');

const app = express();
app.use(express.json()); //Middleware para o express realizar o Parse de JSONs

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/posts', PostController.index);
app.post('/posts', PostController.store); //atuará como middleware passando os parametros para o metodo

app.listen('3000');