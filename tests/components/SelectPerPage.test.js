import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectPerPage from '../../src/components/SelectPerPage';

configure({ adapter: new Adapter() });

describe('SelectPerPage Component', () => {
  let onChangePerPage;

  beforeEach(() => {
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
        <SelectPerPage value={50} onChangePerPage={onChangePerPage} />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('click on onChangePerPage', () => {
      const wrapper = shallow(<SelectPerPage onChangePerPage={onChangePerPage} />);

      wrapper.find('#per-page').simulate('change', { target: { value: 50 } });
      expect(onChangePerPage).toBeCalledWith(50);
    });
  });
});
