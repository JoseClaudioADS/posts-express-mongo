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
    }

}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);