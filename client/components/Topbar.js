import React from 'react';
import PropTypes from 'prop-types';

const Topbar = ({ title, children }) => (
  <header className="topbar">
    <h1 className="topbar__title">{title}</h1>
    <div className="topbar__right">
      {children}
    </div>
  </header>
);

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Topbar;
