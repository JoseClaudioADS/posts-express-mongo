const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UsuarioSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
        maxlength: 200
    },
    email: {
        type: String,
        required: true,
        maxlength: 250,
        lowercase: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }

}, {timestamps: true});

UsuarioSchema.pre('save', async function (next) {
    if (!this.isModified('senha')) {
        return next();
    }

    this.senha = await bcrypt.hash(this.senha, 8);
});

UsuarioSchema.methods = {
    compararHashSenha (senha) {
        return bcrypt.compare(senha, this.senha);
    }
}

UsuarioSchema.statics = {
    gerarToken ({id}) {
        //aqui passaremos como "claims" o id do usuário
        return jwt.sign({id}, authConfig.secret, {
            expiresIn: authConfig.ttl
        });
    }
}

module.exports = mongoose.model('Usuario', UsuarioSchema);