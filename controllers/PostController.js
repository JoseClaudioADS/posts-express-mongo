const Post = require('../models/Post');

class PostController {

    async index (req, res) {
        return res.send(await Post.find({}));
    }

    async show (req, res) {

        const postEncontrado = await Post.findById(req.params.postId);

        if (postEncontrado) {
            return res.send(postEncontrado);
        }

        return res.sendStatus(404);
    }

    async store (req, res) {
        await Post.create(req.body);
        return res.sendStatus(201);
    }

    async update (req, res) {
        
        try {
            await Post.findByIdAndUpdate(req.params.postId, req.body);
            return res.sendStatus(200);
        } catch (err) {
            console.error(err);
            return res.status(400).json({error: err.message}); //Erro de exemplo. Deveria ser uma mensagem mais amigavel
        }
    }

    async delete (req, res) {

        try {
            await Post.findByIdAndDelete(req.params.postId);
            return res.sendStatus(200);
        } catch (err) {
            console.error(err);
            return res.status(400).json({error: err.message}); //Erro de exemplo. Deveria ser uma mensagem mais amigavel
        }
    }
}

module.exports = new PostController();