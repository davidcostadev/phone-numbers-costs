import React from 'react';
import renderer from 'react-test-renderer';
import Topbar from '../../../client/components/Topbar';

describe('Topbar Component', () => {
  describe('Render', () => {
    it('default', () => {
      const tree = renderer.create((
        <Topbar title="Titulo">
          <div>children</div>
        </Topbar>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
