const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true,
        maxlength: 120
    },
    texto: {
        type: String,
        required: true,
        maxlength: 500
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId, //tipo uma FK
        ref: 'Usuario',
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);