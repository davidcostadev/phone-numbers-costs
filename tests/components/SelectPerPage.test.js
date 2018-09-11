import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPerPage from '../../src/components/SelectPerPage';

configure({ adapter: new Adapter() });

describe('SelectPerPage Component', () => {
  let onChangePerPage;
  let paginator;

  beforeEach(() => {
    paginator = {
      maxPage: 3,
      minPage: 1,
      nextPage: 2,
      nextPageExists: true,
      page: 1,
      pagesList: [1, 2, 3],
      perPage: 10,
      previousPage: null,
      previousPageExists: false,
      totalPages: 100,
    };

    onChangePerPage = jest.fn();
  });

  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <SelectPerPage onChangePerPage={onChangePerPage} />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('with props', () => {
      const tree = renderer.create((
        <SelectPerPage
          value={50}
          onChangePerPage={onChangePerPage}
          paginator={paginator}
        />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('click on onChangePerPage', () => {
      const wrapper = shallow((
        <SelectPerPage
          onChangePerPage={onChangePerPage}
          paginator={paginator}
        />));

      wrapper.find('#per-page').simulate('change', { target: { value: 50 } });
      expect(onChangePerPage).toBeCalledWith(50);
    });
  });
});
