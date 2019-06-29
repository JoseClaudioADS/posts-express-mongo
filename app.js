require('./config/mongoose');
const express = require('express');
const validator = require('express-joi-validation').createValidator({passError: true});

const rotas = require('./routes');
const controllers = require('./controllers');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(express.json()); //Middleware para o express realizar o Parse de JSONs

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/usuarios', validator.body(require('./validators/UsuarioValidator')), controllers.UsuarioController.store);
app.post('/auth', validator.body(require('./validators/AuthValidator')), controllers.AuthController.store);

//Toda rota abaixo do middleware vai precisar de autenticação
app.use(authMiddleware);

app.use('/posts', rotas.PostRoutes);
app.use('/comentarios', rotas.ComentarioRoutes);


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