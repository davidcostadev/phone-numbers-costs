import React from 'react';
import PropTypes from 'prop-types';
import Select from './forms/Select';

const options = [10, 50, 100, 250, 500].map(option => ({
  value: option,
  text: option,
}));

const SelectPerPage = ({ value, onChangePerPage }) => (
  <div className="select-per-page">
    <Select
      id="per-page"
      options={options}
      value={value}
      onChange={onChangePerPage}
    />
  </div>
);

SelectPerPage.propTypes = {
  onChangePerPage: PropTypes.func.isRequired,
  value: PropTypes.number,
};

SelectPerPage.defaultProps = {
  value: 100,
};


export default SelectPerPage;
