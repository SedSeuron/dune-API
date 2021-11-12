const express = require('express');
const FactionServices = require('../services/factionServices');

const service = new FactionServices();

const router = express.Router();

router.get('/', async (req, res) => {
    const factions = await service.find();
    res.status(200).json(factions);
});

router.get('/:id_faction', async (req, res, next) => {
    try {
        const { id_faction } = req.params;
        const faction = await service.findOne(id_faction);
        res.status(200).json(faction);
    } catch (error) {
        next(error);
    }
    
});
/*
router.get('/:factionsId/characters/:charactersId',  (req, res) => {
    const { factionsId, charactersId } = req.params;
    res.json({
        factionsId,
        charactersId,
    });
});*/

router.post('/', async (req, res) => {
    const body = req.body;
    const newFaction = await service.create(body);
    res.status(201).json({newFaction});
});

router.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const faction = await service.update(id, body);
        res.status(202).json({faction});
    } catch (error) {
        next(error);
    };
    
});

router.delete('/:id', async (req, res, next) => {
    try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.status(200).json({
        rta,
        message: "deleted"});
    } catch (error) {
        next(error);
    }
});



module.exports = router;    