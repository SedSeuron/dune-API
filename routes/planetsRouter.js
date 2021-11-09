const express = require('express');

const router = express.Router();

let planets = [
    {
        id_planet: 1,
        name: 'Arrakis',
    },
    {
        id_planet: 2,
        name: 'Bela Tegeuse',
    },
    {
        id_planet: 3,
        name: 'Caladan',
    },
    {
        id_planet: 4,
        name: 'Corrin',
    },
    {
        id_planet: 5,
        name: 'Ecaz',
    },
    {
        id_planet: 6,
        name: 'Giedi Prime',
    },
    {
        id_planet: 7,
        name: 'Ix',
    },  {
        id_planet: 8, 
        name: 'Kaitain'
    },
    {
        id_planet: 9,
        name: 'Richese',
    },
    {
        id_planet: 10,
        name: 'Salusa Secundus',
    },
    {
        id_planet: 11,
        name: 'Tleilax',
    },
    {
        id_planet: 12,
        name: 'Wallach IX'
    },
];

router.get('/', (req, res) => {
    res.json(planets);
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    id--
    if (id > planets.length) {
        res.json({
            message: 'ID no encontrado, el número total de IDs es de: ' + planets.length,
        });
    } else {
        res.json(planets[id]);
    };
    });

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Created',
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
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