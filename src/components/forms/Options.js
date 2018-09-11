import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ options }) => {
  if (!options.length) {
    return null;
  }

  return options.map(option => (
    <option key={option.value} value={option.value}>{option.text}</option>
  ));
};

Options.propTypes = {
  options: PropTypes.array,
};

Options.defaultProps = {
  options: [],
};

export default Options;
