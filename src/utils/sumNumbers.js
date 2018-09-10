import * as R from 'ramda';

const sumNumbers = R.curry(R.compose(
  R.dropRepeats,
  R.sortBy(R.prop('number')),
  R.concat,
));

export default sumNumbers;
