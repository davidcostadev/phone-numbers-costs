import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../../src/pages/Home';

const mockStore = configureMockStore([thunk]);

describe('Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      numbers: [],
    });
  });

  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <MemoryRouter>
          <Provider store={store}>
            <Route render={props => (
              <Home {...props} />
            )}
            />
          </Provider>
        </MemoryRouter>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
