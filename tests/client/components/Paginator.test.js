import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paginator from '../../../client/components/Paginator';

configure({ adapter: new Adapter() });

describe('Paginator Component', () => {
  let onClickPage;
  let paginator;

  beforeEach(() => {
    onClickPage = jest.fn();
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
  });

  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Paginator onClickPage={onClickPage} />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('with props', () => {
      const tree = renderer.create((
        <Paginator onClickPage={onClickPage} paginator={paginator} />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Behavior', () => {
    it('click on onClickPage', () => {
      const wrapper = mount((
        <Paginator onClickPage={onClickPage} paginator={paginator} />
      ));

      wrapper.find('#paginator-1').simulate('click');
      expect(onClickPage).toBeCalledWith(1);

      wrapper.find('#paginator-2').simulate('click');
      expect(onClickPage).toBeCalledWith(2);

      wrapper.find('#paginator-3').simulate('click');
      expect(onClickPage).toBeCalledWith(3);

      wrapper.find('#paginator-next').simulate('click');
      expect(onClickPage).toBeCalledWith(2);

      wrapper.find('#paginator-previous').simulate('click');
      expect(onClickPage).toBeCalledWith(2);
    });
  });
});
