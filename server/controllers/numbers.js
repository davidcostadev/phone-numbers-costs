const Controller = require('../utils/Controller');
const service = require('../services/numberService');

const list = Controller(service.list);

module.exports = {
  list,
};
