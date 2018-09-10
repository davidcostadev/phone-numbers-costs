const { compose, map } = require('ramda');

const generateNumbers = (start, end) => {
  const list = [];

  for (let i = start; i <= end; i += 1) {
    list.push(i);
  }

  return list;
};

const getNumberCosts = c => ([
  c,
  c % 100,
]);

const fixPrecision = n => parseFloat(n.toFixed(2));

const formartItem = ([number, costs]) => ([
  number + 555000000,
  fixPrecision((costs * 0.01) + 1),
]);

const formartToObj = ([number, costs]) => ({
  number,
  costs,
});


const applyList = map(compose(
  formartToObj,
  formartItem,
  getNumberCosts,
));

module.exports = {
  generateNumbers,
  getNumberCosts,
  formartItem,
  formartToObj,
  applyList,
};
