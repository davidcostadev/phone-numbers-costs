import React from 'react';
import PropTypes from 'prop-types';
import Select from './forms/Select';
import { paginatorType } from '../types';

const options = [10, 50, 100, 250, 500].map(option => ({
  value: option,
  text: option,
}));

const SelectPerPage = ({ onChangePerPage, paginator }) => {
  if (!paginator) {
    return null;
  }

  return (
    <div className="select-per-page">
      <Select
        id="per-page"
        options={options}
        value={paginator.perPage}
        onChange={({ target }) => onChangePerPage(target.value)}
      />
    </div>
  );
};

SelectPerPage.propTypes = {
  onChangePerPage: PropTypes.func.isRequired,
  paginator: paginatorType,
};

SelectPerPage.defaultProps = {
  paginator: null,
};


export default SelectPerPage;
