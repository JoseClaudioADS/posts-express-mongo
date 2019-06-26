const Post = require('../models/Post');

class PostController {

    async index (req, res) {
        return res.send(await Post.find({}));
    }

    async store (req, res) {
        await Post.create(req.body);
        return res.sendStatus(200);
    }

}

module.exports = new PostController();