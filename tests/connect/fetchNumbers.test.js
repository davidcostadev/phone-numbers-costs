import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchNumbers from '../../src/connect/fetchNumbers';
import { request } from '../../src/store/modules/numbers';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

jest.mock('../../src/store/modules/numbers', () => ({
  request: jest.fn(),
}));

describe('fetchNumbers', () => {
  let store;
  let ComponentMock;
  let collection;

  beforeEach(() => {
    collection = [
      { number: 555000001, costs: 1.01 },
    ];
    store = mockStore({
      numbers: {
        data: collection,
      },

    });

    ComponentMock = () => <span>mock</span>;
  });


  it('default', () => {
    const props = {
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
    const ComponentMockSetPage = fetchNumbers(ComponentMock);
    mount((
      <Provider store={store}>
        <ComponentMockSetPage {...props} />
      </Provider>
    ));

    expect(request).toBeCalledWith(store.dispatch, {
      page: '1',
      perPage: '10',
    });
  });
});
