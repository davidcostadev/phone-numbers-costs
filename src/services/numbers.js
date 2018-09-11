import axios from 'axios';
import { mountQuery } from '../utils/parse';

export const defaultQuery = {
  page: 1,
  perPage: 100,
};

const get = (query = defaultQuery) => axios
  .get(mountQuery('/numbers', query));

export default { get };
