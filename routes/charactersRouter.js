const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const characters = [
        {
            id_name: 1,
            name: 'Paul Atreides',
            faction: 'Atreides',
            planet: 'Caladan'
            },
            {
            id_name: 2,
            name: 'Duncan Idaho',
            faction: 'Atreides',
            planet: 'Ginaz'
            }, 
            {
            id_name: 3,
            name: 'Jessica Atreides',
            faction: 'Bene Gesserit',
            planet: 'Caladan'
            },
    ];
    res.json(characters);
    
});

router.get('/filter', (req, res) => {
    res.send('Soy un filtro');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Jessica Atreides',
        faction: 'Bene Gesserit',
        planet: 'Caladan'
    })
});


module.exports = router;