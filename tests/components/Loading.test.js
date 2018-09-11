import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../src/components/Loading';

describe('Loading Component', () => {
  describe('Render', () => {
    it('is loading', () => {
      const loading = true;
      const tree = renderer.create((
        <Loading loading={loading}>
          <div>children</div>
        </Loading>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('not loading', () => {
      const loading = false;
      const tree = renderer.create((
        <Loading loading={loading}>
          <div>children</div>
        </Loading>
      )).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
