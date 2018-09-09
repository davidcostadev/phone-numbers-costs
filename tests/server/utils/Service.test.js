const Service = require('../../../server/utils/Service');

describe('Service', () => {
  let reqMock;
  let entity;

  beforeEach(() => {
    reqMock = {
      query: {},
    };
    entity = {
      number: 555000123,
      costs: 1.23,
    };
  });

  describe('list', () => {
    it('should works', async () => {
      const modelMock = {
        findAll: jest.fn().mockResolvedValue([entity]),
        findAndCountAll: jest.fn().mockResolvedValue({ count: 1 }),
      };

      const result = await Service.list(reqMock, modelMock);

      expect(modelMock.findAll).toBeCalled();
      expect(modelMock.findAndCountAll).toBeCalled();

      expect(modelMock.findAll.mock.calls).toEqual([
        [
          {
            limit: 100,
            offset: 0,
          },
        ],
      ]);
      expect(result).toEqual({
        data: [entity],
        meta: {
          page: 1,
          perPage: 100,
          totalPages: 1,
        },
      });
    });

    it('get a error', async () => {
      const modelMock = {
        findAll: jest.fn().mockReturnValue(Promise.reject(new Error('Async error'))),
      };

      try {
        await Service.list(reqMock, modelMock);
      } catch (e) {
        expect(e.message).toBe('NOT_FOUND');
      }
    });
  });
});
