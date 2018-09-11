import { connect } from 'react-redux';

const mapStateToProps = ({ numbers }) => ({
  meta: numbers.meta,
  numbers: numbers.data,
  loading: numbers.loading,
});

export default connect(mapStateToProps, null);
