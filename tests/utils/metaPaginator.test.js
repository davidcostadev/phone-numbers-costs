import metaPaginator, {
  isNotLast,
  isNotFirst,
  getNextPageExists,
  getPreviousPageExists,
  getNextPage,
  getPreviousPage,
  getLoopPage,
} from '../../src/utils/metaPaginator';


describe('metaPaginator', () => {
  let meta;

  beforeEach(() => {
    meta = {
      page: 1,
      totalPages: 15,
      perPage: 10,
    };
  });

  describe('isNotLast', () => {
    it('is not the last', () => {
      expect(isNotLast(meta)).toBe(true);

      meta.page = 14;
      expect(isNotLast(meta)).toBe(true);
    });

    it('is the last', () => {
      meta.page = 15;
      expect(isNotLast(meta)).toBe(false);
    });
  });

  describe('isNotFirst', () => {
    it('is not the first', () => {
      meta.page = 14;
      expect(isNotFirst(meta)).toBe(true);

      meta.page = 2;
      expect(isNotFirst(meta)).toBe(true);
    });

    it('is the first', () => {
      expect(isNotFirst(meta)).toEqual(false);
    });
  });

  describe('getNextPageExists', () => {
    it('get nextPageExists prop', () => {
      expect(getNextPageExists(meta)).toEqual({
        nextPageExists: true,
      });
    });
  });

  describe('getPreviousPageExists', () => {
    it('get previousPageExists prop', () => {
      expect(getPreviousPageExists(meta)).toEqual({
        previousPageExists: false,
      });
    });
  });

  describe('getNextPage', () => {
    it('get nextPage prop', () => {
      expect(getNextPage(meta)).toEqual({ nextPage: 2 });

      meta.page = 14;
      expect(getNextPage(meta)).toEqual({ nextPage: 15 });

      meta.page = 15;
      expect(getNextPage(meta)).toEqual({ nextPage: null });
    });
  });

  describe('getPreviousPage', () => {
    it('get previousPage prop', () => {
      expect(getPreviousPage(meta)).toEqual({ previousPage: null });

      meta.page = 2;

      expect(getPreviousPage(meta)).toEqual({ previousPage: 1 });

      meta.page = 15;
      expect(getPreviousPage(meta)).toEqual({ previousPage: 14 });
    });
  });

  describe('getLoopPage', () => {
    it('in the first', () => {
      expect(getLoopPage(meta)).toEqual({
        minPage: 1,
        maxPage: 3,
        pagesList: [1, 2, 3],
      });
    });

    it('in the middle', () => {
      meta.page = 7;

      expect(getLoopPage(meta)).toEqual({
        minPage: 5,
        maxPage: 9,
        pagesList: [5, 6, 7, 8, 9],
      });
    });

    it('in the last', () => {
      meta.page = 15;
      expect(getLoopPage(meta)).toEqual({
        minPage: 13,
        maxPage: 15,
        pagesList: [13, 14, 15],
      });
    });
  });

  describe('metaPaginator', () => {
    it('get new meta', () => {
      expect(metaPaginator(meta)).toEqual({
        nextPage: 2,
        nextPageExists: true,
        previousPage: null,
        previousPageExists: false,
        maxPage: 3,
        minPage: 1,
        pagesList: [1, 2, 3],
        page: 1,
        totalPages: 15,
        perPage: 10,
      });
    });
  });
});
