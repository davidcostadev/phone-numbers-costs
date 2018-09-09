const { applyList, generateNumbers } = require('../utils/numbesCreate');

const limiter = (offset, limit) => data => data.splice(offset, limit);

const getNumbers = () => applyList(generateNumbers(0, 999));

module.exports = {
  limiter,
  getNumbers,
};
