import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { request } from '../store/modules/numbers';
import withQuery from './withQuery';

export default compose(
  connect(null, null),
  withQuery,
  lifecycle({
    componentDidMount() {
      request(this.props.dispatch, this.props.query);
    },
  }),
);
