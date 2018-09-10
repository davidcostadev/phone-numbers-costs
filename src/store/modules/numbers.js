import Number from '../../services/numbers';
import sumNumbers from '../../utils/sumNumbers';

export const RECEIVE = 'number/receive';
export const ERROR = 'number/error';

export const init = [];

export const receive = payload => ({
  type: RECEIVE,
  payload,
});

export const error = payload => ({
  type: ERROR,
  payload,
});

export const request = (dispatch, query = { page: 1, perPage: 100 }) => Number.get(query)
  .then(({ data }) => dispatch(receive(data.data)))
  .catch(err => dispatch(error(err)));

export default (state = init, { type, payload }) => {
  switch (type) {
    case RECEIVE:
      return sumNumbers(state, payload);
    default:
      return state;
  }
};
