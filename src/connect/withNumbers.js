import { connect } from 'react-redux';

const mapStateToProps = ({ numbers }) => ({
  meta: numbers.meta,
  numbers: numbers.data,
});

export default connect(mapStateToProps, null);
