const { validateNumber } = require('../../../server/utils/selectorTypes');

describe('selectorTypes', () => {
  it('validateNumber', () => {
    expect(validateNumber('0')).toBe(false);
  });
});
