import React from 'react';
import PropTypes from 'prop-types';
import { numbersType, numberType } from '../types';
import { floatToDolar, formatPhone } from '../utils/parse';

const Number = ({ number }) => (
  <div className="numbers__item">
    <div className="numbers__number">{formatPhone(number.number)}</div>
    <div className="numbers__costs">{floatToDolar(number.costs)}</div>
  </div>
);

Number.propTypes = {
  number: numberType.isRequired,
};

const NumberList = ({ children }) => (
  <div className="numbers__list">
    {children}
  </div>
);

NumberList.propTypes = {
  children: PropTypes.any.isRequired,
};

const Numbers = ({ numbers }) => {
  if (!numbers.length) {
    return (
      <NumberList>
        <div className="numbers__empty">no numbers found</div>
      </NumberList>
    );
  }

  return (
    <NumberList>
      {numbers.map(number => (
        <Number key={number.number} number={number} />
      ))}
    </NumberList>
  );
};

Numbers.propTypes = {
  numbers: numbersType,
};

Numbers.defaultProps = {
  numbers: [],
};

export default Numbers;
