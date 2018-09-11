import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

const Loading = ({ children, loading }) => (
  <div className="page">
    <div className={classname(
      'page__loader',
      { 'page__loader--loading': loading },
    )}
    >
      loading...
    </div>
    {children}
  </div>
);

Loading.propTypes = {
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Loading;
