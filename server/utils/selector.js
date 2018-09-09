const R = require('ramda');

const configDefault = R.propOr({}, 'default');

const configConvert = R.propOr(R.identity, 'convert');

const configValidation = R.propOr(null, 'validation');

const getConfig = (definitions, key) => R.prop(key, definitions);

const queryOrDefault = (config, key) => R.propOr(configDefault(getConfig(config, key)), key);

const checkValue = (key, config) => R.compose(
  R.objOf(key),
  R.ifElse(
    configValidation(config),
    configConvert(config),
    R.always(configDefault(config)),
  ),
);

const checkQuery = (key, config) => R.ifElse(
  R.isEmpty,
  R.always({}),
  checkValue(key, config),
);

const addSelector = definitions => query => key => checkQuery(
  key,
  getConfig(definitions, key),
)(queryOrDefault(definitions, key)(query));

const selector = (definitions, query) => R.mergeAll(Object
  .keys(definitions)
  .map(addSelector(definitions)(query)));

module.exports = {
  selector,
};

