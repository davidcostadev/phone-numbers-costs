import qs from 'query-string';
import { withProps, compose } from 'recompose';
import { request } from '../store/modules/numbers';
import { defaultQuery } from '../services/numbers';
import withQuery from './withQuery';

const event = props => (perPage) => {
  const query = {
    ...defaultQuery,
    perPage,
  };

  request(props.dispatch, query);

  props.history.push({
    search: `?${qs.stringify(query)}`,
  });
};

export default compose(
  withQuery,
  withProps(props => ({
    onChangePerPage: event(props),
  })),
);

