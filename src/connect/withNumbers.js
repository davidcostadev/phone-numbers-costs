import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = ({ numbers }) => ({ numbers });

export default compose(connect(mapStateToProps));
