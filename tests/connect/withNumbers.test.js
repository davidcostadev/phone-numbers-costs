import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import withNumbers from '../../src/connect/withNumbers';

const mockStore = configureMockStore([thunk]);

describe('withNumbers', () => {
  let store;
  let ComponentMock;
  let collection;

  beforeEach(() => {
    collection = [
      { number: 555000001, costs: 1.01 },
    ];
    store = mockStore({
      numbers: collection,
    });
    ComponentMock = () => <span>mock</span>;
  });


  it('default', () => {
    const ComponentMockWithNumbers = withNumbers(ComponentMock);

    const tree = renderer.create((
      <Provider store={store}>
        <ComponentMockWithNumbers />
      </Provider>
    )).toTree();

    expect(tree.rendered.rendered.props.numbers).toEqual(collection);
  });
});
