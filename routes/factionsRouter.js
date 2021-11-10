const express = require('express');
const FactionServices = require('../services/factionServices');

const service = new FactionServices();

const router = express.Router();

router.get('/', (req, res) => {
    const factions = service.find();
    res.status(200).json(factions);
});

router.get('/:id_faction', (req, res) => {
    const { id_faction } = req.params;
    const factions = service.findOne(id_faction);
    res.status(200).json(factions);
});

router.get('/:factionsId/characters/:charactersId', (req, res) => {
    const { factionsId, charactersId } = req.params;
    res.json({
        factionsId,
        charactersId,
    });
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