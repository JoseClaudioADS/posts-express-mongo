const Usuario = require('../models/Usuario');

class UsuarioController {

    async store (req, res) {
        const { email } = req.body;

        //Esse { email } ---> é igual a {email : email}
        if (await Usuario.findOne({ email })) {
            return res.status(400).json({ error: 'E-mail já cadastrado'});
        }

        //O schema de usuário "bate" com o model de usuário, por isso o req.body já serve
        const usuarioCadastado = await Usuario.create(req.body);

        return res.sendStatus(201);
    }

}

module.exports = new UsuarioController();