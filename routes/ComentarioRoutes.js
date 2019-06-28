const routes = require('express').Router();
const ComentarioController = require('../controllers/ComentarioController');
const validator = require('express-joi-validation').createValidator({passError: true});
const ComentarioValidator = require('../validators/ComentarioValidator');

routes.post('/post/:postId', validator.body(ComentarioValidator), ComentarioController.store);
routes.patch('/like/:comentarioId', ComentarioController.like);

module.exports = routes;