const routes = require('express').Router();
const PostController = require('../controllers/PostController');
const validator = require('express-joi-validation').createValidator({passError: true});
const PostValidator = require('../validators/PostValidator');

routes.get('/', PostController.index);
routes.get('/:postId', PostController.show);
routes.post('/', validator.body(PostValidator), PostController.store);
routes.put('/:postId', validator.body(PostValidator), PostController.update);
routes.delete('/:postId', PostController.delete);

module.exports = routes;