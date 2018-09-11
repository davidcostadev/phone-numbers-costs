import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { numbersType, paginatorType } from '../types';
import Numbers from '../components/Numbers';
import SelectPerPage from '../components/SelectPerPage';
import Topbar from '../components/Topbar';
import Bottombar from '../components/Bottombar';
import Paginator from '../components/Paginator';

import withNumbers from '../connect/withNumbers';
import withPaginator from '../connect/withPaginator';
import setPerPage from '../connect/setPerPage';
import setPage from '../connect/setPage';
import fetchNumbers from '../connect/fetchNumbers';

const App = ({
  numbers,
  onChangePerPage,
  onClickPage,
  paginator,
}) => (
  <div className="page">
    <Topbar title="Phone and Costs">
      <SelectPerPage paginator={paginator} onChangePerPage={onChangePerPage} />
    </Topbar>
    <main className="wrap">
      <Numbers numbers={numbers} />
    </main>
    <Bottombar>
      <Paginator paginator={paginator} onClickPage={onClickPage} />
    </Bottombar>
  </div>
);

App.propTypes = {
  numbers: numbersType.isRequired,
  paginator: paginatorType,
  onChangePerPage: PropTypes.func.isRequired,
  onClickPage: PropTypes.func.isRequired,
};

App.defaultProps = {
  paginator: null,
};


export default compose(
  withNumbers,
  withPaginator,
  setPerPage,
  setPage,
  fetchNumbers,
)(App);
