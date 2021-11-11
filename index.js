const express = require('express');
const routerApi = require('./routes');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log('Mi puerto ' + port);
});

routerApi(app);