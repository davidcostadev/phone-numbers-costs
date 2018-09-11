import { withProps } from 'recompose';
import metaPaginator from '../utils/metaPaginator';

const paginator = meta => (
  meta ? metaPaginator(meta) : null
);

export default withProps(({ meta }) => ({
  paginator: paginator(meta),
  meta,
}));

