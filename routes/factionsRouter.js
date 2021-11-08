const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        id_faction: 1,
        faction: 'Atreides'
    });

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