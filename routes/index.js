const charactersRouter = require('./charactersRouter');
const factionsRouter = require('./factionsRouter');
const planetsRouter = require('./planetsRouter');
const documentationRouter = require('./documentationRouter');
const aboutRouter = require('./aboutRouter');
const usersRouter = require('./usersRouter');




function routerApi(app) {
  app.use('/characters', charactersRouter);
  app.use('/factions', factionsRouter);
  app.use('/planets', planetsRouter);
  app.use('/documentation', documentationRouter);
  app.use('/about', aboutRouter);
  app.use('/users', usersRouter);
};

module.exports = routerApi;