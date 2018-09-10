import React from 'react';
import { numbersType } from './types';
import Numbers from './components/Numbers';
import SelectPerPage from './components/SelectPerPage';
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import Paginator from './components/Paginator';
import withNumbers from './connect/withNumbers';

const App = ({ numbers }) => (
  <div id="page">
    <Topbar title="Phone and Costs">
      <SelectPerPage />
    </Topbar>
    <main id="wrap">
      <Numbers numbers={numbers} />
    </main>
    <Bottombar>
      <Paginator />
    </Bottombar>
  </div>
);

App.propTypes = {
  numbers: numbersType.isRequired,
};


export default withNumbers(App);
