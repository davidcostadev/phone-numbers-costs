const Controller = require('../../../server/utils/Controller');

describe('Controller', () => {
  let reqMock;
  let resMock;
  let service;

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
    service = jest.fn().mockResolvedValue(true);

    status.mockReturnValue(resMock);
  });

  it('get success', async () => {
    await Controller(service)(reqMock, resMock);


    expect(resMock.json).toBeCalledWith(true);
  });

  it('wit error async', async () => {
    service = jest.fn().mockRejectedValue(new Error('Async Error'));

    await Controller(service)(reqMock, resMock);


    expect(resMock.status).toBeCalledWith(500);
    expect(resMock.json).toBeCalledWith({ error: 'Async Error' });
  });
});
