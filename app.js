require('./config/mongoose');
const express = require('express');
const validator = require('express-joi-validation').createValidator({passError: true});

const PostRoutes = require('./routes/PostRoutes');
const UsuarioController = require('./controllers/UsuarioController');
const AuthController = require('./controllers/AuthController');

const app = express();
app.use(express.json()); //Middleware para o express realizar o Parse de JSONs

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/usuarios', validator.body(require('./validators/UsuarioValidator')), UsuarioController.store);
app.post('/auth', validator.body(require('./validators/AuthValidator')), AuthController.store);

app.use('/posts', PostRoutes);


//Error Handler
app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
      res.status(400).json({
        tipo: err.type,
        mensagem: err.error.toString() //verificar API para traduzir e passar conforme desejar
      });
    } else {
      next(err);
    }
});

app.listen('3000');