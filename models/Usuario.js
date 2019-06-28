const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

module.exports = mongoose.model('Usuario', UsuarioSchema);