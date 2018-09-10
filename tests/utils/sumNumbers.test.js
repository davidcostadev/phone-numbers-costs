import sumNumbers from '../../src/utils/sumNumbers';

describe('sumNumbers', () => {
  let state;
  beforeAll(() => {
    state = [
      { number: 555000000, costs: 1 },
    ];
  });

  it('sum payload', () => {
    const payload = [
      { number: 555000001, costs: 1.01 },
    ];
    expect(sumNumbers(state, payload)).toEqual([
      { number: 555000000, costs: 1 },
      { number: 555000001, costs: 1.01 },
    ]);
  });

  it('numbers duplicated', () => {
    const payload = [
      { number: 555000000, costs: 1 },
    ];
    expect(sumNumbers(state, payload)).toEqual([
      { number: 555000000, costs: 1 },
    ]);
  });
});
