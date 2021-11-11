const express = require('express');

const PlanetsServices = require('./../services/planetsServices');
const router = express.Router();

const service = new PlanetsServices();


router.get('/', (req, res) => {
    const planets = service.find();
    res.status(200).json(planets);
});

router.get('/:id_planet', (req, res) => {
    const { id_planet } = req.params;
    const planet = service.findOne(id_planet);
    res.status(200).json(planet);
});

router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'Created',
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(202).json({
        message: 'Updated',
        data: body,
        id,
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Deleted',
        id,
    });
});



module.exports = router;