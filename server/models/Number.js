const { limiter, getNumbers } = require('../utils/Model');

const findAll = ({ offset, limit }) => Promise
  .resolve(limiter(offset, limit)(getNumbers()));

const findAndCountAll = () => Promise
  .resolve({
    count: getNumbers().length,
  });

module.exports = {
  findAll,
  findAndCountAll,
};
