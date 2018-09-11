import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../../../client/pages/Home';

const mockStore = configureMockStore([thunk]);

describe('Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      numbers: {
        data: [],
        meta: null,
        loading: false,
      },
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

    it('with props', () => {
      store = mockStore({
        numbers: {
          data: [
            { number: 555000000, costs: 1 },
            { number: 555000001, costs: 2 },
          ],
          meta: {
            page: 1,
            perPage: 2,
            totalPages: 10,
          },
          loading: false,
        },
      });

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
