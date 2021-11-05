const express = require('express');
const app = express();
const port = 3030;

app.get('/documentation', (req, res) => {
    res.send('Bienvenido a la documentación de DUNE API');

});

app.get('/about', (req, res) => {
    res.send('About the web and me');

});

app.get('/login', (req, res) => {
    res.send('Login a Dune API REST');

});

app.get('/characters', (req, res) => {
    res.json({
        id_name: 1,
        name: 'Paul Atreides',
        faction: 'Atreides',
        planet: 'Caladan'
    });

});

app.get('/factions', (req, res) => {
    res.json({
        id_faction: 1,
        faction: 'Atreides'
    });

});

app.get('/Planets', (req, res) => {
    res.json({
        id_planet: 1,
        name: 'Caladan'

    });

});


app.listen(port, () => {
    console.log('Mi puerto ' + port);
});