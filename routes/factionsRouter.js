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
    })
})


module.exports = router;