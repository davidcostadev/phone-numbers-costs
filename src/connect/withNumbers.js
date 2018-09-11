import { connect } from 'react-redux';

const mapStateToProps = ({ numbers }) => ({ numbers });

export default connect(mapStateToProps, null);
