const express = require('express');

const charactersRouter = require('./charactersRouter');
const factionsRouter = require('./factionsRouter');
const planetsRouter = require('./planetsRouter');
const documentationRouter = require('./documentationRouter');
const aboutRouter = require('./aboutRouter');
const usersRouter = require('./usersRouter');




function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/characters', charactersRouter);
    router.use('/factions', factionsRouter);
    router.use('/planets', planetsRouter);
    router.use('/documentation', documentationRouter);
    router.use('/about', aboutRouter);
    router.use('/users', usersRouter);
};

module.exports = routerApi;