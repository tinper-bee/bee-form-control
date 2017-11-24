import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from 'bee-icon';
import PropTypes from  'prop-types';

const propTypes = {
  componentClass: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.string
	]),
  type: PropTypes.string,
  size: PropTypes.oneOf(['sm','md','lg']),
  onSearch: PropTypes.func,
  onChange: PropTypes.func
};

const defaultProps = {
  componentClass: 'input',
  clsPrefix: 'u-form-control',
  type: 'text',
  size: 'md'
};


class FormControl extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          showSearch: true,
          value: props.value == null ? "" : props.value
      }
      console.log(props.onSearch1);
      this.input = {};
  }

  componentWillReceiveProps(nextProp) {
    if(nextProp.value !== this.state.value) {
      this.setState({value: nextProp.value});
    }
  }

    handleChange = (e) => {
    let value = e.target.value;
    const {onChange} = this.props;
    this.setState({
        value:value,
        showSearch: value == null || value === ""
    });
    if(onChange) {
      onChange(value);
    }
  }

  clearValue = () => {
    const {onChange} = this.props;
    this.setState({showSearch:true,value:""});
    if(onChange) {
      onChange("");
    }

  }

  handleKeyDown = (e) => {
    const {onSearch} = this.props;
    if(e.keyCode == 13 && this.props.type=="search") {
      if(onSearch) {
        onSearch(this.state.value);
      }
    } 
  }

  render() {
    const {
      componentClass: Component,
      type,
      className,
      size,
      clsPrefix,
      onChange,
      onSearch,
      ...others
    } = this.props;
    // input[type="file"] 不应该有类名 .form-control.
    let classes={};
    if(size) {
        classes[`${size}`] = true;
    }
    if(type === "search") {
        classes[`u-input-search`] = true;
    }

    let classNames;
    if (type !== 'file') {
      classNames = classnames(clsPrefix,classes);
    }

    if(type === "search") {

      return (
        <span className="u-input-search u-input-affix-wrapper">
          <Component
              {...others}
              type={type}
              ref = {(el) => this.input = el }
              onChange={this.handleChange}
              value={this.state.value}
              onKeyDown={this.handleKeyDown}
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
        type={type}
        ref = {(el) => this.input = el }
        value= {this.state.value}
        onChange={this.handleChange}
        className={classnames(className, classNames)}
      />
    );
  }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;