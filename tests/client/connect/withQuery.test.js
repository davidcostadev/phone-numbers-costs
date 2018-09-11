import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import withQuery from '../../../client/connect/withQuery';

const mockStore = configureMockStore([thunk]);

describe('withQuery', () => {
  let store;
  let ComponentMock;

  beforeEach(() => {
    store = mockStore();
    ComponentMock = () => <span>mock</span>;
  });


  it('default', () => {
    const ComponentMockWithQuery = withQuery(ComponentMock);
    const tree = renderer.create((
      <MemoryRouter>
        <Provider store={store}>
          <Route render={props => (
            <ComponentMockWithQuery {...props} />
          )}
          />
        </Provider>
      </MemoryRouter>
    )).toTree();

    expect(tree.rendered.rendered.rendered.rendered.rendered.props.query).toEqual({
      page: 1,
      perPage: 100,
    });
  });
});
