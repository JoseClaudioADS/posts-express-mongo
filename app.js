const express = require('express');
const mongoose = require('./config/mongoose');

const PostRoutes = require('./routes/PostRoutes');

const app = express();
app.use(express.json()); //Middleware para o express realizar o Parse de JSONs

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/posts', PostRoutes);

app.listen('3000');