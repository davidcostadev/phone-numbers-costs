const { paginationParse } = require('./pagination');
const { numberType } = require('./selectorTypes');
const { selector } = require('./selector');

const list = async ({ query }, Model) => {
  const {
    perPage,
    page,
  } = selector({
    perPage: {
      ...numberType,
      default: 100,
    },
    page: {
      ...numberType,
      default: 1,
    },
  }, query);

  const select = {
    limit: perPage,
    offset: perPage * (page - 1),
  };

  try {
    const data = await Model.findAll(select);
    const { count } = await Model.findAndCountAll();
    const meta = paginationParse(count, page, perPage);

    return {
      meta,
      data,
    };
  } catch (e) {
    throw new Error('NOT_FOUND');
  }
};

module.exports = {
  list,
};
