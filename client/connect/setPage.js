import qs from 'query-string';
import { withProps, compose } from 'recompose';
import { request } from '../store/modules/numbers';
import withQuery from './withQuery';

const event = ({
  query,
  meta,
  dispatch,
  history,
}) => (page) => {
  const queryNew = {
    ...query,
    page,
  };

  if (meta.page !== page) {
    request(dispatch, queryNew);
  }

  history.push({
    search: `?${qs.stringify(queryNew)}`,
  });
};


export default compose(
  withQuery,
  withProps(props => ({
    onClickPage: event(props),
  })),
);
