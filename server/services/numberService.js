const Model = require('../models/Number');
const Service = require('../utils/Service');

const list = req => Service.list(req, Model);

module.exports = {
  list,
};
