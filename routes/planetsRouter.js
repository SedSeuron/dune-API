const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        id_planet: 1,
        name: 'Caladan'

    });

});

module.exports = router;