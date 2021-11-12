const express = require('express');

const PlanetsServices = require('./../services/planetsServices');
const router = express.Router();

const service = new PlanetsServices();


router.get('/', async  (req, res) => {
    const planets = await service.find();
    res.status(200).json(planets);
});

router.get('/:id_planet', async (req, res) => {
    try {
        const { id_planet } = req.params;
        const planet = await service.findOne(id_planet);
        res.status(200).json(planet);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    };
});

router.post('/', async (req, res) => {
    const body = req.body;
    const newPlanet = await service.create(body);
    res.status(201).json({newPlanet});
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const planet = await service.update(id, body);
        res.status(202).json({planet});
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    };
});
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rta = await service.delete(id);
         res.status(200).json(rta);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    };
});



module.exports = router;