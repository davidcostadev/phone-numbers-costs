/* eslint "no-underscore-dangle": "off" */
import * as R from 'ramda';

export const isNotLast = ({ page, totalPages }) => R.lt(page, totalPages);

export const isNotFirst = ({ page }) => R.gt(page, 1);

export const getNextPageExists = R.compose(
  R.objOf('nextPageExists'),
  isNotLast,
);

export const getPreviousPageExists = R.compose(
  R.objOf('previousPageExists'),
  isNotFirst,
);

export const getNextPage = R.compose(
  R.objOf('nextPage'),
  R.ifElse(
    isNotLast,
    R.compose(
      R.add(1),
      R.prop('page'),
    ),
    R.always(null),
  ),
);

export const getPreviousPage = R.compose(
  R.objOf('previousPage'),
  R.ifElse(
    isNotFirst,
    R.compose(
      R.subtract(R.__, 1),
      R.prop('page'),
    ),
    R.always(null),
  ),
);

export const getLoopPage = ({ page, totalPages }) => {
  const limit = 2;
  const minPage = R.max(1, R.subtract(page, limit));
  const maxPage = R.min(totalPages, R.add(page, limit));

  return {
    minPage,
    maxPage,
    pagesList: R.range(minPage, R.add(1, maxPage)),
  };
};

const metaPaginator = meta => R.mergeAll([
  meta,
  getNextPageExists(meta),
  getPreviousPageExists(meta),
  getLoopPage(meta),
  getNextPage(meta),
  getPreviousPage(meta),
]);

export default metaPaginator;

