import React, {Component} from 'react';
import classnames from 'classnames';
import Icon from 'bee-icon';
import PropTypes from  'prop-types';

const propTypes = {
    componentClass: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    type: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
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
            showSearch: !props.value,
            value: props.value == null ? "" : props.value
        }
        this.input = {};
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.value !== this.state.value) {
            this.setState({value: nextProp.value});
        }
    }

    handleSearchChange = (e) => {
        const {onChange} = this.props;
        const value = this.input.value;
        this.setState({
            value: value,
            showSearch: value == null || value === ""
        });
        if (onChange) {
            onChange(value,e);
        }
    }

    handleChange = (e) => {
        const {onChange} = this.props;
        let value = this.input.value;

        if (onChange) {
            onChange(value,e);
        }
    }

    clearValue = () => {
        const {onChange} = this.props;
        this.setState({showSearch: true, value: ""});
        if (onChange) {
            onChange("");
        }
        this.input.focus();

    }

    handleKeyDown = (e) => {
        const {onSearch, value, type} = this.props;
        if (e.keyCode === 13 && type === "search") {
            if (onSearch) {
                onSearch(value);
            }
        }
    }

    renderInput = () => {
        const {
            componentClass: Component,
            type,
            className,
            size,
            clsPrefix,
            value,
            onChange,
            onSearch,
            ...others
        } = this.props;
        // input[type="file"] 不应该有类名 .form-control.
        let classes = {};
        if (size) {
            classes[`${size}`] = true;
        }

        let classNames;
        if (type !== 'file') {
            classNames = classnames(clsPrefix, classes);
        }

        return (
            <Component
                {...others}
                type={type}
                ref={(el) => this.input = el }
                value={value}
                onChange={this.handleChange}
                className={classnames(className, classNames)}
            />
        );
    }

    renderSearch = () => {
        const {
            componentClass: Component,
            type,
            className,
            size,
            clsPrefix,
            value,
            onChange,
            onSearch,
            ...others
        } = this.props;
        // input[type="file"] 不应该有类名 .form-control.
        let classes = {};
        if (size) {
            classes[`${size}`] = true;
        }
        classes[`${clsPrefix}-search`] = true;

        if (type === "search") {
            return (
                <div className={classnames(`${clsPrefix}-search`,`${clsPrefix}-affix-wrapper`, className)}>
                    <Component
                        {...others}
                        type={type}
                        ref={(el) => this.input = el }
                        onChange={this.handleSearchChange}
                        value={value}
                        onKeyDown={this.handleKeyDown}
                        className={classnames(className, clsPrefix, classes)}
                    />
                    <div className={`${clsPrefix}-suffix`}>
                        {this.state.showSearch ? <Icon type="uf-search"/>:<Icon onClick={this.clearValue} type="uf-close-c"/>}
                    </div>
                </div>
            );
        }
    }

    render() {

        if (this.props.type === "search") {
            return this.renderSearch()
        }

        return this.renderInput()
    }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;