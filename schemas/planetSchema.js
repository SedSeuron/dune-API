const Joi = require('joi');

const id_planet = Joi.number().integer();
const name = Joi.string().min(3).max(40);


const createPlanetSchema = Joi.object({
    name: name.required(),
});

const updatePlanetSchema = Joi.object({
    name: name,
});

const getPlanetSchema = Joi.object({
    id_planet: id_planet.required(),
});


module.exports = {createPlanetSchema, updatePlanetSchema, getPlanetSchema}