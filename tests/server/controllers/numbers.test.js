const numbers = require('../../../server/controllers/numbers');

describe('numbers', () => {
  let reqMock;
  let resMock;

  beforeEach(() => {
    const status = jest.fn();

    reqMock = {
      query: {},
      params: {},
      body: {},
    };
    resMock = {
      status,
      send: jest.fn(),
      json: jest.fn(),
    };

    status.mockReturnValue(resMock);
  });
  it('.list', async () => {
    reqMock.query = {
      page: 0,
      perPage: 2,
    };

    await numbers.list(reqMock, resMock);

    expect(resMock.json).toBeCalledWith({
      data: [
        { costs: 1, number: 555000000 },
        { costs: 1.01, number: 555000001 },
      ],
      meta: {
        page: 1,
        perPage: 2,
        totalPages: 500,
      },
    });
  });
});
