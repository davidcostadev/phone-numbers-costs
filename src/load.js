import * as Numbers from './store/modules/numbers';

export default dispatch => Promise.all([
  Numbers.request(dispatch),
]);
