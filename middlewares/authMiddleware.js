const jwt = require('jsonwebtoken');
const { promisify } = require('util'); //pacote do node
const authConfig = require('../config/auth');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({error: 'Token não fornecido'});
    }

    //Realizando split por ' ', para separar o Bearer e pegar só o que vem depois, ou seja
    //o token
    const [, token] = authHeader.split(' ');

    try {
        //promisify transforma o verify numa promise (todo o contexto dele)
        const tokenDecodificado = await promisify(jwt.verify)(token, authConfig.secret);

        //o ".id" vem do método "gerarToken" do Usuario --> {id} no sign
        req.usuarioId - tokenDecodificado.id;
        return next();
    } catch (err) {
        return res.status(401).json({error: 'Token inválido'});
    }

}