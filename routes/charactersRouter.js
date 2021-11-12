const express = require('express');

const CharactersServices = require("./../services/characterServices")

const router = express.Router();
const service = new CharactersServices();

router.get('/', async (req, res) => {
    const characters = await service.find();
    res.status(200).json(characters);
    
});

router.get('/filter', (req, res) => {
    res.send('Soy un filtro');
});

/*router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Jessica Atreides',
        faction: 'Bene Gesserit',
        planet: 'Caladan'
    })
});*/
router.get('/:id_name', async (req, res) => {
    try {
        const { id_name } = req.params;
        const character = await service.findOne(id_name);
        res.status(200).json(character);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
});

router.post('/', async (req, res) => {
    const body = req.body;
    const newCharacter = await service.create(body);
    res.status(201).json({newCharacter});
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const character = await service.update(id, body);
        res.status(202).json(character);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
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
    }
});


module.exports = router;