const { findAll, findAndCountAll } = require('../../../server/models/Number');

describe('Number Model', () => {
  it('findAll', async () => {
    const result = await findAll({ offset: 0, limit: 2 });

    expect(result).toEqual([
      { costs: 1, number: 555000000 },
      { costs: 1.01, number: 555000001 },
    ]);
  });

  it('findAndCountAll', async () => {
    const result = await findAndCountAll();

    expect(result).toEqual({ count: 1000 });
  });
});
