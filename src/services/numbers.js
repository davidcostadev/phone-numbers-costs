import axios from 'axios';
import mountQuery from '../utils/parse';

const get = (query = { page: 1, perPage: 100 }) => axios
  .get(mountQuery('/numbers', query));

export default { get };
