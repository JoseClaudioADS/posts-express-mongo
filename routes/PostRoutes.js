const routes = require('express').Router();
const PostController = require('../controllers/PostController');

routes.get('/', PostController.index);
routes.get('/:postId', PostController.show);
routes.post('/', PostController.store);
routes.put('/:postId', PostController.update);
routes.delete('/:postId', PostController.delete);

module.exports = routes;