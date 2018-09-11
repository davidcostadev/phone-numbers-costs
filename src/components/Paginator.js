import React from 'react';
import PropTypes from 'prop-types';

const Paginator = ({ onClickPage }) => (
  <div className="paginator">
    <button type="button" className="paginator__item paginator__item--disabled">Previews</button>
    <button type="button" id="paginator-1" className="paginator__item paginator__item--active" onClick={() => onClickPage(1)}>1</button>
    <button type="button" id="paginator-2" className="paginator__item" onClick={() => onClickPage(2)}>2</button>
    <button type="button" id="paginator-3" className="paginator__item" onClick={() => onClickPage(3)}>3</button>
    <button type="button" className="paginator__item">Next</button>
  </div>
);

Paginator.propTypes = {
  onClickPage: PropTypes.func.isRequired,
};

export default Paginator;
