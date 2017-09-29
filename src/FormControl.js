import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Icon from 'bee-icon';

const propTypes = {
  componentClass: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
  type: PropTypes.string,
  size: PropTypes.oneOf(['sm','md','lg']),
  id: PropTypes.string,
};

const defaultProps = {
  componentClass: 'input',
  clsPrefix: 'u-form-control',
  type: 'text',
  defaultValue: "",
  size: 'md'
};


class FormControl extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showSearch: true,
          value: 'value' in props ? props.value : props.defaultValue
      }
  }

  componentWillReceiveProps(nextProp) {
      if(nextProp.defaultValue !== this.state.value)
      {
          this.setState({
              value: nextProp.defaultValue
          });
      }
    }

  onChange = (e) => {
    let value = ReactDOM.findDOMNode(this.refs.inputValue).value;
    const {onChange} = this.props;
    this.setState({value:value,showSearch:false,showSearch:value==""});
    if(onChange) {
      onChange(value);
    }
  }

  clearValue = () => {
    ReactDOM.findDOMNode(this.refs.inputValue).value= "";
    this.refs.inputValue.focus();
    this.setState({showSearch:true});
    
  }

  render() {

    const {
      componentClass: Component,
      type,
      id,
      className,
      defaultValue,
      value,
      size,
      clsPrefix,
      ...others
    } = this.props;


    // input[type="file"] 不应该有类名 .form-control.
    let classes={};
    if(size) {
        classes[`${size}`] = true;
    }
    if(type=="search") {
        classes[`u-input-search`] = true;
    }

    let classNames;
    if (type !== 'file') {
      classNames = classnames(clsPrefix,classes);
    }

    if(type=="search") {

      return (
        <span className="u-input-search u-input-affix-wrapper" {...others}>
          <Component
              ref="inputValue"
              type={type}
              onChange={this.onChange}
              defaultValue={defaultValue}
              value={value}
              id={id}
              className={classnames(className, classNames)}
          />
          <span className="u-input-suffix">
            {this.state.showSearch && <Icon type="uf-search" />}
            {!this.state.showSearch && <Icon onClick={this.clearValue}  type="uf-close-c" />}
          </span>
        </span>
      );
    }

    return (
      <Component
        {...others}
        ref="inputValue"
        type={type}
        defaultValue={defaultValue}
        value={value}
        id={id}
        onChange={this.onChange}
        className={classnames(className, classNames)}
      />
    );
  }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;