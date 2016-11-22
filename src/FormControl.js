import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import warning from 'warning';


const propTypes = {
  componentClass: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
  type: React.PropTypes.string,
  id: React.PropTypes.string,
};

const defaultProps = {
  componentClass: 'input',
  clsPrefix: 'u-form-control',
  type: 'text'
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
      clsPrefix,
      ...others
    } = this.props;


    warning(
      controlId == null || id === controlId,
      '`controlId` is ignored on `<FormControl>` when `id` is specified.'
    );

    // input[type="file"] 不应该有类名 .form-control.
    let classes={};
    let classNames;
    if (type !== 'file') {
      classNames = classnames(clsPrefix,classes);
    }

    return (
      <Component
        {...others}
        type={type}
        id={id}
        className={classnames(className, classNames)}
      />
    );
  }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;