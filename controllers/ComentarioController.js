const models = require('../models');

class ComentarioController {

    async store (req, res) {
        const comentarioCadastrado = await models.Comentario.create({...req.body, likes: 0, 
            autor: req.usuarioId, post: req.params.postId});

        const post = await models.Post.findById(req.params.postId);
        post.comentarios.push(comentarioCadastrado.id);
        await post.save();

        return res.sendStatus(201);
    }

    async like (req, res) {
        //ao inves de like: like + 1
        //dessa forma utilizamos um operador do MongoDB de incremento, neste caso em 1
        await models.Comentario.findByIdAndUpdate(req.params.comentarioId, {$inc : {likes: 1}});
        return res.send();
    }
}

module.exports = new ComentarioController();