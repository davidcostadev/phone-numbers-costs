import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paginator from '../../src/components/Paginator';

configure({ adapter: new Adapter() });

describe('Paginator Component', () => {
  let onClickPage;

  beforeEach(() => {
    onClickPage = jest.fn();
  });

  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Paginator onClickPage={onClickPage} />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('click on onClickPage', () => {
      const wrapper = shallow(<Paginator onClickPage={onClickPage} />);

      wrapper.find('#paginator-1').simulate('click');
      expect(onClickPage).toBeCalledWith(1);

      wrapper.find('#paginator-2').simulate('click');
      expect(onClickPage).toBeCalledWith(2);

      wrapper.find('#paginator-3').simulate('click');
      expect(onClickPage).toBeCalledWith(3);
    });
  });
});
