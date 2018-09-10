import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { compose } from 'ramda';

export default compose(
  composeWithDevTools,
  applyMiddleware,
)(thunk);

