const numberService = require('../../../server/services/numberService');

describe('numberService', () => {
  let reqMock;

  beforeEach(() => {
    reqMock = {
      query: {
        page: 2,
        perPage: 2,
      },
    };
  });

  it('list', async () => {
    const result = await numberService.list(reqMock);
    expect(result).toEqual({
      data: [
        { costs: 1.02, number: 555000002 },
        { costs: 1.03, number: 555000003 },
      ],
      meta: {
        page: 2,
        perPage: 2,
        totalPages: 500,
      },
    });
  });
});
