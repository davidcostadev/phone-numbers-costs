const { selector } = require('../../../server/utils/selector');
const { numberType } = require('../../../server/utils/selectorTypes');

describe('selector', () => {
  let config;

  beforeEach(() => {
    config = {
      page: {
        ...numberType,
        default: 100,
      },
      perPage: {
        validation: numberType.validation,
      },
    };
  });

  it('all args correctly', () => {
    const query = {
      page: 1,
      perPage: 10,
    };

    expect(selector(config, query)).toEqual({
      page: 1,
      perPage: 10,
    });
  });

  it('page with zero', () => {
    const query = {
      page: 0,
    };
    expect(selector(config, query)).toEqual({ page: 100 });
  });

  it('page with a word', () => {
    const query = {
      page: 'work',
    };

    expect(selector(config, query)).toEqual({ page: 100 });
  });

  it('page with a number string', () => {
    const query = {
      page: '1',
    };

    expect(selector(config, query)).toEqual({ page: 1 });
  });

  it('with arg without config', () => {
    const query = {
      another: 5,
    };

    expect(selector(config, query)).toEqual({ page: 100 });
  });
});
