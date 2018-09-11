import qs from 'query-string';
import { withProps } from 'recompose';
import { defaultQuery } from '../services/numbers';

const query = ({ history }) => ({
  ...defaultQuery,
  ...qs.parse(history.location.search),
});


export default withProps(props => ({
  query: query(props),
}));

