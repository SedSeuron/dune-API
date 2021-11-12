const express = require('express');
const routerApi = require('./routes');
const path = require('path');

const {  logErrors, errorHandler, boomErrorHandler  } = require("./middlewares/errorHandler");

const app = express();
const port = 3030;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Bienvenido a la DUNE API"
    });
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler); //Detiene el proceso al no tener el next.


app.listen(port, () => {
    console.log('Mi puerto ' + port);
});