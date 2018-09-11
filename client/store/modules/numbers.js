import Number, { defaultQuery } from '../../services/numbers';

export const RECEIVE = 'number/receive';
export const LOADING = 'number/loading';
export const ERROR = 'number/error';

export const init = {
  loading: false,
  meta: null,
  data: [],
};

export const receive = payload => ({
  type: RECEIVE,
  payload: {
    ...payload,
    loading: false,
  },
});

export const error = payload => ({
  type: ERROR,
  payload: {
    error: payload,
    loading: false,
  },
});

export const loading = () => ({
  type: LOADING,
  payload: {
    loading: true,
  },
});


export const request = (dispatch, query = defaultQuery) => {
  dispatch(loading());

  return Number.get(query)
    .then(({ data }) => dispatch(receive(data)))
    .catch(err => dispatch(error(err)));
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case RECEIVE:
      return payload;
    case ERROR:
    case LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    default:
      return state;
  }
};
