import * as Numbers from '../../src/store/modules/numbers';
import NumberService from '../../src/services/numbers';

jest.mock('../../src/services/numbers.js', () => ({
  get: jest.fn(),
}));

describe('Store Numbers', () => {
  let state;
  let collection;
  let meta;

  beforeEach(() => {
    state = Numbers.init;
    meta = {
      page: 1,
      perPage: 100,
      totalPages: 10,
    };
    collection = [
      { number: 555000000, costs: 1 },
    ];
  });

  describe('reduce', () => {
    it('default', () => {
      const action = {
        type: '@@INIT',
      };

      expect(Numbers.default(undefined, action)).toEqual({
        meta: null,
        data: [],
      });
    });

    it('RECEIVE', () => {
      const payload = [
        { number: 555000000, costs: 1 },
      ];
      const action = {
        type: Numbers.RECEIVE,
        payload,
      };
      expect(Numbers.default(state, action)).toEqual([
        { number: 555000000, costs: 1 },
      ]);
    });
  });

  describe('request', () => {
    it('receive with default args', async () => {
      const dispatch = jest.fn();
      NumberService.get.mockResolvedValue({
        data: {
          meta,
          data: collection,
        },
      });

      await Numbers.request(dispatch);

      expect(NumberService.get).toBeCalled();
      expect(dispatch).toBeCalledWith({
        payload: {
          meta,
          data: [
            { costs: 1, number: 555000000 },
          ],
        },
        type: Numbers.RECEIVE,
      });
    });

    it('receive with query', async () => {
      const dispatch = jest.fn();
      NumberService.get.mockResolvedValue({
        data: {
          meta,
          data: collection,
        },
      });

      await Numbers.request(dispatch, { page: 2, perPage: 10 });

      expect(NumberService.get).toBeCalledWith({
        page: 2,
        perPage: 10,
      });
    });

    it('error', async () => {
      const dispatch = jest.fn();
      NumberService.get.mockRejectedValue(new Error('Async Error'));

      await Numbers.request(dispatch);

      expect(NumberService.get).toBeCalled();
      expect(dispatch).toBeCalledWith({
        payload: new Error('Async Error'),
        type: Numbers.ERROR,
      });
    });
  });

  describe('actions', () => {
    it('receive', () => {
      expect(Numbers.receive(collection)).toEqual({
        type: Numbers.RECEIVE,
        payload: collection,
      });
    });

    it('error', () => {
      const error = new Error('This is an error');
      expect(Numbers.error(error)).toEqual({
        type: Numbers.ERROR,
        payload: error,
      });
    });
  });
});
