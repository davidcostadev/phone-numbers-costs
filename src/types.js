import {
  shape,
  number,
  arrayOf,
} from 'prop-types';

export const numberType = shape({
  number: number.isRequired,
  costs: number.isRequired,
});

export const numbersType = arrayOf(numberType);
