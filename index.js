const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3030;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola mi Dune API en express');
});

app.listen(port, () => {
    console.log('Mi puerto ' + port);
});

routerApi(app);