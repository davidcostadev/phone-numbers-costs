import mountQuery from '../../src/utils/parse';

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
