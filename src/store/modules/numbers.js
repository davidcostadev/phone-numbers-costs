import Number, { defaultQuery } from '../../services/numbers';

export const RECEIVE = 'number/receive';
export const ERROR = 'number/error';

export const init = {
  meta: null,
  data: [],
};

export const receive = payload => ({
  type: RECEIVE,
  payload,
});

export const error = payload => ({
  type: ERROR,
  payload,
});

export const request = (dispatch, query = defaultQuery) => Number.get(query)
  .then(({ data }) => dispatch(receive(data)))
  .catch(err => dispatch(error(err)));

export default (state = init, { type, payload }) => {
  switch (type) {
    case RECEIVE:
      return payload;
    default:
      return state;
  }
};
