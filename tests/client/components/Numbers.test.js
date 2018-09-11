import React from 'react';
import renderer from 'react-test-renderer';
import Numbers from '../../../client/components/Numbers';

describe('Numbers Component', () => {
  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Numbers>
          <div>children</div>
        </Numbers>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('with props', () => {
      const numbers = [
        { number: 555000000, costs: 1 },
        { number: 555000001, costs: 1.01 },
      ];

      const tree = renderer.create((
        <Numbers numbers={numbers}>
          <div>children</div>
        </Numbers>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
