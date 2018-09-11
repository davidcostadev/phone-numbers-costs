import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import setPage from '../../src/connect/setPage';
import { request } from '../../src/store/modules/numbers';

const mockStore = configureMockStore([thunk]);

jest.mock('../../src/store/modules/numbers', () => ({
  request: jest.fn(),
}));

describe('setPage', () => {
  let store;
  let ComponentMock;

  beforeEach(() => {
    store = mockStore();
    ComponentMock = () => <span>mock</span>;
  });

  it('default', () => {
    const props = {
      dispatch: 'dispatch',
      query: {
        page: 1,
        perPage: 10,
      },
      history: {
        push: jest.fn(),
        location: {
          search: '?page=1&perPage=10',
        },
      },
      meta: {
        page: 1,
        perPage: 10,
      },
    };
    const ComponentMockSetPage = setPage(ComponentMock);

    const tree = renderer.create((
      <Provider store={store}>
        <ComponentMockSetPage {...props} />
      </Provider>
    )).toTree();

    tree.rendered.rendered.rendered.props.onClickPage(1);

    expect(props.history.push).toBeCalledWith({
      search: '?page=1&perPage=10',
    });

    tree.rendered.rendered.rendered.props.onClickPage(2);

    expect(request).toBeCalledWith('dispatch', {
      page: 2,
      perPage: '10',
    });

    expect(props.history.push).toBeCalledWith({
      search: '?page=2&perPage=10',
    });
  });
});
