import {
  calcTotalPages,
  paginationParse,
} from '../../../server/utils/pagination';

describe('paginationParse', () => {
  it('calcTotalPages should works', () => {
    expect(calcTotalPages(1000, 100)).toBe(10);
  });

  it('paginationParse should works', () => {
    expect(paginationParse(1000, 2, 100)).toEqual({
      page: 2,
      perPage: 100,
      totalPages: 10,
    });
  });
});
