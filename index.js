const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');
const path = require('path');

const {  logErrors, errorHandler, boomErrorHandler  } = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
const whitelist = [''];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido'));
        }
    }
}
app.use(cors(options));

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Bienvenido a la DUNE API",
        message: "https://pacific-dawn-62610.herokuapp.com/api/v1/factions"
    });
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler); //Detiene el proceso al no tener el next.


app.listen(port, () => {
    console.log('Mi puerto ' + port);
});