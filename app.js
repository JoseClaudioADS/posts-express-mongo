const express = require('express');
const mongoose = require('./config/mongoose');

const Post = require('./models/Post'); 

const app = express();
app.use(express.json()); //Middleware para o express realizar o Parse de JSONs

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/posts', async (req, res) => {
    await Post.create(req.body);
    res.sendStatus(200);
});

app.listen('3000');