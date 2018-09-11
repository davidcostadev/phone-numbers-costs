import qs from 'query-string';
import { withProps } from 'recompose';
import { request } from '../store/modules/numbers';
import { defaultQuery } from '../services/numbers';

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

export default withProps(props => ({
  onChangePerPage: event(props),
}));

