import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import warning from './utils/warning';

import FormControlStatic from './FormControlStatic';
// import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

const propTypes = {
  componentClass: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: React.PropTypes.string,
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: React.PropTypes.string,
};

const defaultProps = {
  componentClass: 'input',
  className: 'u-input',
  type: 'text'
};

const contextTypes = {
  $bs_formGroup: React.PropTypes.object,
};

class FormControl extends React.Component {
  render() {
    const formGroup = this.context.$bs_formGroup;
    const controlId = formGroup && formGroup.controlId;

    const {
      componentClass: Component,
      type,
      id = controlId,
      className,
      ...others
    } = this.props;

    // const [bsProps, elementProps] = splitBsProps(props);

    warning(
      controlId == null || id === controlId,
      '`controlId` is ignored on `<FormControl>` when `id` is specified.'
    );

    // input[type="file"] should not have .form-control.
    let classes;
    // if (type !== 'file') {
    //   classes = getClassSet(bsProps);
    // }

    return (
      <Component
        {...others}
        type={type}
        id={id}
        className={classNames(className, classes)}
      />
    );
  }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
FormControl.contextTypes = contextTypes;

FormControl.Static = FormControlStatic;

export default FormControl;