import qs from 'query-string';
import { withProps } from 'recompose';
import { request } from '../store/modules/numbers';

const event = ({ query, dispatch, history }) => (page) => {
  const queryNew = {
    ...query,
    page,
  };

  request(dispatch, queryNew);

  history.push({
    search: `?${qs.stringify(queryNew)}`,
  });
};

export default withProps(props => ({
  onClickPage: event(props),
}));

