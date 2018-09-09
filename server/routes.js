const Numbers = require('./controllers/numbers');

module.exports = (app) => {
  app.get('/numbers', Numbers.list);
};

