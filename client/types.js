import {
  shape,
  number,
  arrayOf,
  bool,
} from 'prop-types';

export const numberType = shape({
  number: number.isRequired,
  costs: number.isRequired,
});

export const paginatorType = shape({
  page: number,
  perPage: number,
  totalItens: number,
  maxPage: number,
  minPage: number,
  nextPageExists: bool,
  previusPageExists: bool,
  previusPage: number,
  nextPage: number,
  pagesList: arrayOf(number),
});

export const numbersType = arrayOf(numberType);
