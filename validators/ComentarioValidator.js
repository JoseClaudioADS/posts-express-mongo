const Joi = require('@hapi/joi');

const ComentarioSchema = Joi.object({
    texto: Joi.string().max(500).required()
});

module.exports = ComentarioSchema;