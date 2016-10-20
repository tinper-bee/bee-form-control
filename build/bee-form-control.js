'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

var propTypes = {
  componentClass: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: _react2["default"].PropTypes.string,
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: _react2["default"].PropTypes.string
};

var defaultProps = {
  componentClass: 'input',
  className: 'u-input',
  type: 'text'
};

var contextTypes = {
  $bs_formGroup: _react2["default"].PropTypes.object
};

var FormControl = function (_React$Component) {
  _inherits(FormControl, _React$Component);

  function FormControl() {
    _classCallCheck(this, FormControl);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  FormControl.prototype.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props;
    var Component = _props.componentClass;
    var type = _props.type;
    var _props$id = _props.id;
    var id = _props$id === undefined ? controlId : _props$id;
    var className = _props.className;

    var others = _objectWithoutProperties(_props, ['componentClass', 'type', 'id', 'className']);

    // const [bsProps, elementProps] = splitBsProps(props);

    (0, _warning2["default"])(controlId == null || id === controlId, '`controlId` is ignored on `<FormControl>` when `id` is specified.');

    // input[type="file"] should not have .form-control.
    var classes = {};
    if (type !== 'file') {
      classes['form-control'] = true;
    }

    return _react2["default"].createElement(Component, _extends({}, others, {
      type: type,
      id: id,
      className: (0, _classnames2["default"])(className, classes)
    }));
  };

  return FormControl;
}(_react2["default"].Component);

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;
FormControl.contextTypes = contextTypes;

exports["default"] = FormControl;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FormControl = require('./FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _FormControl2["default"];
module.exports = exports['default'];