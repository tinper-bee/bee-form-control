import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

// import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

const propTypes = {
  componentClass: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
};

const defaultProps = {
  componentClass: 'p',
};

class FormControlStatic extends React.Component {
  render() {
    const { componentClass: Component, className, ...others } = this.props;
    // const [bsProps, elementProps] = splitBsProps(props);

    // const classes = getClassSet(bsProps);

    return (
      <Component
        {...others}
        className={classNames(className, classes)}
      />
    );
  }
}

FormControlStatic.propTypes = propTypes;
FormControlStatic.defaultProps = defaultProps;

export default FormControlStatic;