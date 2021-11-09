const express = require('express');

const router = express.Router();

const factions = [
    {
        id_faction: 1,
        faction: 'Bene Gesserit',
    },
    {
        id_faction: 2, 
        faction: 'Bene Tleilax',
    },
    {
        id_faction: 3,
        faction: 'Cofradía Espacial',
    },
    {
        id_faction: 4,
        faction: 'Fremen',
    },
    {
        id_faction: 5,
        faction: 'Combine Honnete Ober Advancer Mercantiles (CHOAM)',
    },
    {
        id_faction: 6,
        faction: 'Sardaukar',
    },
    {
        id_faction: 7,
        faction: 'Mentats',
    },
    {
        id_faction: 8,
        faction: 'Landsraad',
    },
    {
        id_faction: 9,
        faction: 'Escuela Suk',
    },

];
router.get('/', (req, res) => {
    res.json(factions);
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    id--
    if (id > factions.length) {
        res.json({
            message: 'ID no encontrado, el número total de IDs es de: ' + factions.length,
        });
    } else {
        res.json(factions[id]);
    };
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