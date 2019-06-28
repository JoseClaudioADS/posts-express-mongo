const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({

    texto: {
        type: String,
        required: true,
        maxlength: 500
    },
    likes: {
        type: Number,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId, //tipo uma FK
        ref: 'Usuario',
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId, //tipo uma FK
        ref: 'Post',
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Comentario', ComentarioSchema);