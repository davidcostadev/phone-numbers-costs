import React from 'react';
import renderer from 'react-test-renderer';
import Options from '../../../src/components/forms/Options';

describe('Options Component', () => {
  let options;

  beforeEach(() => {
    options = [
      { value: 1, text: 'One' },
      { value: 2, text: 'Two' },
    ];
  });

  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Options />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('with props', () => {
      const tree = renderer.create((
        <Options options={options} />
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
