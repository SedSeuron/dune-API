const express = require('express');

const CharactersServices = require("./../services/characterServices")

const router = express.Router();
const service = new CharactersServices();

router.get('/', (req, res) => {
    const characters = service.find();
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
router.get('/:id_name', (req, res) => {
    const { id_name } = req.params;
    const character = service.findOne(id_name);
    res.status(200).json(character);
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