import * as Numbers from '../../src/store/modules/numbers';
import NumberService from '../../src/services/numbers';

jest.mock('../../src/services/numbers.js', () => ({
  get: jest.fn(),
}));

describe('Store Numbers', () => {
  let state;
  let collection;
  let meta;
  let response;

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
    response = { meta, data: collection };
  });

  describe('reduce', () => {
    it('default', () => {
      const action = {
        type: '@@INIT',
      };

      expect(Numbers.default(undefined, action)).toEqual({
        meta: null,
        loading: false,
        data: [],
      });
    });

    it('RECEIVE', () => {
      const payload = {
        loading: false,
        ...response,
      };

      const action = {
        type: Numbers.RECEIVE,
        payload,
      };
      expect(Numbers.default(state, action)).toEqual({
        loading: false,
        ...response,
      });
    });

    it('ERROR', () => {
      const action = {
        type: Numbers.ERROR,
        payload: {
          error: new Error('Async Error'),
          loading: false,
        },
      };
      expect(Numbers.default(state, action)).toEqual({
        ...Numbers.init,
        loading: false,
      });
    });

    it('LOADING', () => {
      const action = {
        type: Numbers.LOADING,
        payload: {
          loading: true,
        },
      };
      expect(Numbers.default(state, action)).toEqual({
        ...Numbers.init,
        loading: true,
      });
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
          loading: false,
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
      expect(dispatch.mock.calls[0][0]).toEqual({
        payload: {
          loading: true,
        },
        type: Numbers.LOADING,
      });

      expect(dispatch.mock.calls[1][0]).toEqual({
        payload: {
          error: new Error('Async Error'),
          loading: false,
        },
        type: Numbers.ERROR,
      });
    });
  });

  describe('actions', () => {
    it('receive', () => {
      expect(Numbers.receive(response)).toEqual({
        type: Numbers.RECEIVE,
        payload: {
          loading: false,
          ...response,
        },
      });
    });

    it('error', () => {
      const error = new Error('This is an error');
      expect(Numbers.error(error)).toEqual({
        type: Numbers.ERROR,
        payload: {
          error,
          loading: false,
        },
      });
    });

    it('loading', () => {
      expect(Numbers.loading()).toEqual({
        type: Numbers.LOADING,
        payload: {
          loading: true,
        },
      });
    });
  });
});
