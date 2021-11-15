const express = require('express');

const CharactersServices = require("./../services/characterServices");
const validatorHandler = require("./../middlewares/validatorHandler");
const {createCharacterSchema, updateCharacterSchema, getCharacterSchema} = require ("./../schemas/characterSchema");

const router = express.Router();
const service = new CharactersServices();

router.get('/', async (req, res) => {
    const characters = await service.find();
    res.status(200).json(characters);
    
});

router.get('/filter', (req, res) => {
    res.send('Soy un filtro');
});

router.get('/:id', 
    validatorHandler(getCharacterSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const character = await service.findOne(id);
            res.status(200).json(character);
        } catch (error) {
            next(error);
        }
});

router.post('/',
    validatorHandler(createCharacterSchema, 'body'),
    async (req, res) => {
    const body = req.body;
    const newCharacter = await service.create(body);
    res.status(201).json({newCharacter});
});

router.patch('/:id',
    validatorHandler(getCharacterSchema, 'params'),
    validatorHandler(updateCharacterSchema, 'body'),
    async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const character = await service.update(id, body);
        res.status(202).json(character);
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
    }
});


module.exports = router;