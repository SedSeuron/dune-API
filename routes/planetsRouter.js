const express = require('express');

const PlanetsServices = require('./../services/planetsServices');
const validatorHandler = require("./../middlewares/validatorHandler");
const {createPlanetSchema, updatePlanetSchema, getPlanetSchema} = require ("./../schemas/planetSchema");


const router = express.Router();
const service = new PlanetsServices();


router.get('/', async  (req, res) => {
    const planets = await service.find();
    res.status(200).json(planets);
});

router.get('/:id_planet',
    validatorHandler(getPlanetSchema, 'params'), 
    async (req, res, next) => {
        try {
            const { id_planet } = req.params;
            const planet = await service.findOne(id_planet);
            res.status(200).json(planet);
        } catch (error) {
            next(error);
        };
});

router.post('/', 
    validatorHandler(createPlanetSchema, 'body'),
    async (req, res) => {
    const body = req.body;
    const newPlanet = await service.create(body);
    res.status(201).json({newPlanet});
});

router.patch('/:id_planet',
    validatorHandler(getPlanetSchema, 'params'),
    validatorHandler(updatePlanetSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_planet } = req.params;
            const body = req.body;
            const planet = await service.update(id_planet, body);
            res.status(202).json({planet});
        } catch (error) {
            next(error);
        };
});
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
         res.status(200).json(rta);
    } catch (error) {
        next(error);
    };
});



module.exports = router;