import qs from 'querystring';
import * as R from 'ramda';

export const mountQuery = (url, query = {}) => {
  if (Object.keys(query).length) {
    return `${url}?${qs.stringify(query)}`;
  }

  return url;
};

export const floatToDolar = new Intl
  .NumberFormat('en', { style: 'currency', currency: 'USD' }).format;

export const formatPhone = R.compose(
  R.join(' '),
  R.splitEvery(3),
  R.toString(),
);
