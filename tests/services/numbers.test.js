import axios from 'axios';
import numbers from '../../src/services/numbers';

jest.mock('axios');

describe('Numbers Service', () => {
  let collection;

  beforeAll(() => {
    collection = [
      { number: 555000000, costs: 1 },
    ];
  });

  describe('get', () => {
    it('then', async () => {
      axios.get.mockResolvedValue({
        data: {
          data: collection,
        },
      });

      const result = await numbers.get();

      expect(axios.get).toBeCalledWith('/numbers?page=1&perPage=100');
      expect(result).toEqual({
        data: {
          data: collection,
        },
      });
    });

    it('catch', async () => {
      axios.get.mockRejectedValue(new Error('Async Error'));

      try {
        await numbers.get();
      } catch (e) {
        expect(e.message).toBe('Async Error');
      }

      expect(axios.get).toBeCalledWith('/numbers?page=1&perPage=100');
    });
  });
});
