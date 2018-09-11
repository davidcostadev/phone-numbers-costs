import React from 'react';
import PropTypes from 'prop-types';

const Bottombar = ({ children }) => (
  <div className="bottombar">
    {children}
  </div>
);

Bottombar.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Bottombar;
