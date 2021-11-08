const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('About the web and me');

});


module.exports = router;