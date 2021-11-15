const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(40);
const faction = Joi.string().min(3).max(20);
const planet = Joi.string().min(3).max(20);

const createCharacterSchema = Joi.object({
    name: name.required(),
    faction: faction.required(),
    planet: planet.required(),
});

const updateCharacterSchema = Joi.object({
    name: name,
    faction: faction,
    planet: planet,
});

const getCharacterSchema = Joi.object({
    id: id.required(),
});


module.exports = {createCharacterSchema, updateCharacterSchema, getCharacterSchema}