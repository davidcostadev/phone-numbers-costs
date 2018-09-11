import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import setPerPage from '../../src/connect/setPerPage';
import { request } from '../../src/store/modules/numbers';

const mockStore = configureMockStore([thunk]);

jest.mock('../../src/store/modules/numbers', () => ({
  request: jest.fn(),
}));

describe('setPerPage', () => {
  let store;
  let ComponentMock;

  beforeEach(() => {
    store = mockStore();
    ComponentMock = () => <span>mock</span>;
  });


  it('default', () => {
    const props = {
      dispatch: 'dispatch',
      history: {
        push: jest.fn(),
      },
    };
    const ComponentMockSetPerPage = setPerPage(ComponentMock);
    const tree = renderer.create((
      <Provider store={store}>
        <ComponentMockSetPerPage {...props} />
      </Provider>
    )).toTree();

    tree.rendered.rendered.props.onChangePerPage(500);

    expect(request).toBeCalledWith('dispatch', {
      page: 1,
      perPage: 500,
    });

    expect(props.history.push).toBeCalledWith({
      search: '?page=1&perPage=500',
    });
  });
});
