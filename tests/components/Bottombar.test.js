import React from 'react';
import renderer from 'react-test-renderer';
import Bottombar from '../../src/components/Bottombar';

describe('Bottombar Component', () => {
  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Bottombar>
          <div>children</div>
        </Bottombar>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
