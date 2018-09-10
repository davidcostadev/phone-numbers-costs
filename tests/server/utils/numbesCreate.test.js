const {
  applyList,
  formartItem,
  formartToObj,
  generateNumbers,
  getNumberCosts,
} = require('../../../server/utils/numbesCreate');

describe('numbesCreate', () => {
  it('generateNumbers should works', () => {
    expect(generateNumbers(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(generateNumbers(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });

  it('getNumberCosts should works', () => {
    expect(getNumberCosts(50)).toEqual([50, 50]);
    expect(getNumberCosts(150)).toEqual([150, 50]);
    expect(getNumberCosts(999)).toEqual([999, 99]);
  });

  it('formartItem should works', () => {
    expect(formartItem([14, 14])).toEqual([555000014, 1.14]);
    expect(formartItem([50, 50])).toEqual([555000050, 1.5]);
    expect(formartItem([150, 50])).toEqual([555000150, 1.5]);
    expect(formartItem([250, 50])).toEqual([555000250, 1.5]);
    expect(formartItem([999, 99])).toEqual([555000999, 1.99]);
  });

  it('formartToObj should works', () => {
    expect(formartToObj([555000050, 1.5])).toEqual({
      number: 555000050,
      costs: 1.5,
    });
  });

  it('applyList should works', () => {
    expect(applyList([0, 1, 2])).toEqual([
      {
        number: 555000000,
        costs: 1,
      },
      {
        number: 555000001,
        costs: 1.01,
      },
      {
        number: 555000002,
        costs: 1.02,
      },
    ]);
  });
});
