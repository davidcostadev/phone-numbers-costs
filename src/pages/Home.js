import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { numbersType } from '../types';
import Numbers from '../components/Numbers';
import SelectPerPage from '../components/SelectPerPage';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Paginator from '../components/Paginator';

import withNumbers from '../connect/withNumbers';
import setPerPage from '../connect/setPerPage';
import setPage from '../connect/setPage';
import fetchNumbers from '../connect/fetchNumbers';

const App = ({ numbers, onChangePerPage, onClickPage }) => (
  <div id="page">
    <Topbar title="Phone and Costs">
      <SelectPerPage onChangePerPage={onChangePerPage} />
    </Topbar>
    <main id="wrap">
      <Numbers numbers={numbers} />
    </main>
    <Bottombar>
      <Paginator onClickPage={onClickPage} />
    </Bottombar>
  </div>
);

App.propTypes = {
  numbers: numbersType.isRequired,
  onChangePerPage: PropTypes.func.isRequired,
  onClickPage: PropTypes.func.isRequired,
};


export default compose(
  fetchNumbers,
  withNumbers,
  setPerPage,
  setPage,
)(App);
