const Joi = require('joi');

const id_faction = Joi.number().integer();
const faction = Joi.string().min(3).max(40);


const createFactionSchema = Joi.object({
    faction: faction.required(),
});

const updateFactionSchema = Joi.object({
    faction: faction.required(),
});

const getFactionSchema = Joi.object({
    id_faction: id_faction.required(),
});


module.exports = {createFactionSchema, updateFactionSchema, getFactionSchema}