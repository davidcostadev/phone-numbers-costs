import { mountQuery, floatToDolar, formatPhone } from '../../src/utils/parse';

describe('parse', () => {
  describe('formatPhone', () => {
    it('should format phonenumber', () => {
      expect(formatPhone(555000000)).toEqual('555 000 000');
      expect(formatPhone(555123456)).toBe('555 123 456');
    });
  });

  describe('floatToDolar', () => {
    it('should work', () => {
      expect(floatToDolar(1)).toBe('$1.00');
      expect(floatToDolar(1.01)).toBe('$1.01');
    });
  });

  describe('mountQuery', () => {
    let url;
    beforeAll(() => {
      url = '/endpoint';
    });

    it('without params', () => {
      expect(mountQuery(url)).toBe('/endpoint');
    });

    it('with params', () => {
      const query = {
        page: 1,
        perPage: 10,
      };

      expect(mountQuery(url, query)).toBe('/endpoint?page=1&perPage=10');
    });
  });
});
