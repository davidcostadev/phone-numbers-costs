const { mergeAll, objOf } = require('ramda');

const calcTotalPages = (totalItems, perPage) => Math.ceil(totalItems / perPage);

const getTotalPages = (...a) => objOf('totalPages')(calcTotalPages(...a));

const getPerPage = objOf('perPage');

const getPage = objOf('page');

const paginationParse = (totalItens, page, perPage) => mergeAll([
  getPage(page),
  getPerPage(perPage),
  getTotalPages(totalItens, perPage),
]);


module.exports = {
  paginationParse,
  calcTotalPages,
};
