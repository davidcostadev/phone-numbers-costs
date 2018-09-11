import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../../../../client/components/forms/Select';

configure({ adapter: new Adapter() });

describe('Select Component', () => {
  let options;
  let onChange;

  beforeEach(() => {
    options = [
      { value: 1, text: 'One' },
      { value: 2, text: 'Two' },
    ];
    onChange = jest.fn();
  });

  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Select
          id="id"
          onChange={onChange}
        />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('with props', () => {
      const tree = renderer.create((
        <Select
          id="id"
          options={options}
          onChange={onChange}
        />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });


  describe('Behavior', () => {
    it('click on onChangePerPage', () => {
      const wrapper = shallow((<Select
        id="id"
        options={options}
        onChange={onChange}
      />));

      wrapper.find('#id').simulate('change', { target: { value: 50 } });
      expect(onChange).toBeCalledWith({ target: { value: 50 } });
    });
  });
});
