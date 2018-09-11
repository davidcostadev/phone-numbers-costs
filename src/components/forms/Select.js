import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: props.value,
    };
  }


  handleChange(e) {
    this.setState({ value: e.target.value });

    this.props.onChange(e);
  }

  render() {
    const { id, options, ...otherProps } = this.props;

    return (
      <select
        {...otherProps}
        id={id}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Options options={options} />
      </select>
    );
  }
}

Select.propTypes = {
  value: PropTypes.any,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
};

Select.defaultProps = {
  value: '',
  options: [],
};


export default Select;
