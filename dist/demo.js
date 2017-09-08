/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _beeLayout = __webpack_require__(1);

	var _beePanel = __webpack_require__(7);

	var _beeButton = __webpack_require__(60);

	var _beeButton2 = _interopRequireDefault(_beeButton);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _src = __webpack_require__(62);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var CARET = _react2['default'].createElement('i', { className: 'uf uf-arrow-down' });

	var CARETUP = _react2['default'].createElement('i', { className: 'uf uf-arrow-up' });

	var Demo1 = __webpack_require__(66);var Demo2 = __webpack_require__(67);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 常用三种尺寸 Input", "code": "/**\n * @title 常用三种尺寸 Input\n * @description \n */\n\nimport React, { Component } from 'react';\nimport FormControl from 'tinper-bee';\n\n\n\t\n\trender () {\n\t\treturn (\n\t\t\t<div className=\"demo-form-control\">\n\t\t\t\t<button onClick={this.onChange}></button>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\" size=\"sm\"/>\t</span>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\"/>\t</span>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\" size=\"lg\"/></span>\n\t\t\t\t<span className=\"wraper\"><FormControl placeholder=\"Enter text\" type=\"search\" size=\"lg\"/></span>\t\n\t\t\t</div>\n\t\t)\n\t}\n}", "desc": " " }, { "example": _react2['default'].createElement(Demo2, null), "title": " 不可用 Input", "code": "/**\n * @title 不可用 Input\n * @description \n */\n\nimport React, { Component } from 'react';\nimport FormControl from 'tinper-bee';\n\n\n\trender () {\n\t\treturn (\n\t\t\t<FormControl disabled placeholder=\"Enter text\"/>\t\n\t\t)\n\t}\n}", "desc": " " }];

	var Demo = function (_Component) {
	    _inherits(Demo, _Component);

	    function Demo(props) {
	        _classCallCheck(this, Demo);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

	        _this.state = {
	            open: false
	        };
	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    Demo.prototype.handleClick = function handleClick() {
	        this.setState({ open: !this.state.open });
	    };

	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc;

	        var caret = this.state.open ? CARETUP : CARET;
	        var text = this.state.open ? "隐藏代码" : "查看代码";

	        var footer = _react2['default'].createElement(
	            _beeButton2['default'],
	            { shape: 'block', onClick: this.handleClick },
	            caret,
	            text
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12 },
	            _react2['default'].createElement(
	                'h3',
	                null,
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { collapsible: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0, borderColor: "transparent" } },
	                _react2['default'].createElement(
	                    'pre',
	                    null,
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                )
	            )
	        );
	    };

	    return Demo;
	}(_react.Component);

	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);

	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);

	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }

	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {

	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
	            })
	        );
	    };

	    return DemoGroup;
	}(_react.Component);

		_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Con = exports.Row = exports.Col = undefined;

	var _Col2 = __webpack_require__(2);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Row2 = __webpack_require__(5);

	var _Row3 = _interopRequireDefault(_Row2);

	var _Layout = __webpack_require__(6);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Col = _Col3["default"];
	exports.Row = _Row3["default"];
	exports.Con = _Layout2["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),

	  /**
	   * xs显示列数
	   */
	  xs: _react.PropTypes.number,
	  /**
	   * sm显示列数
	   */
	  sm: _react.PropTypes.number,
	  /**
	   * md显示列数
	   */
	  md: _react.PropTypes.number,
	  /**
	   * lg显示列数
	   */
	  lg: _react.PropTypes.number,
	  /**
	   * xs偏移列数
	   */
	  xsOffset: _react.PropTypes.number,
	  /**
	   * sm偏移列数
	   */
	  smOffset: _react.PropTypes.number,
	  /**
	   * md偏移列数
	   */
	  mdOffset: _react.PropTypes.number,
	  /**
	   * lg偏移列数
	   */
	  lgOffset: _react.PropTypes.number,
	  /**
	   * xs右偏移列数
	   */
	  xsPush: _react.PropTypes.number,
	  /**
	   * sm右偏移列数
	   */
	  smPush: _react.PropTypes.number,
	  /**
	   * md右偏移列数
	   */
	  mdPush: _react.PropTypes.number,
	  /**
	   * lg右偏移列数
	   */
	  lgPush: _react.PropTypes.number,
	  /**
	   * xs左偏移列数
	   */
	  xsPull: _react.PropTypes.number,
	  /**
	   * sm左偏移列数
	   */
	  smPull: _react.PropTypes.number,
	  /**
	   * md左偏移列数
	   */
	  mdPull: _react.PropTypes.number,
	  /**
	   * lg左偏移列数
	   */
	  lgPull: _react.PropTypes.number
	};

	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-col'
	};

	var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

	var Col = function (_Component) {
	  _inherits(Col, _Component);

	  function Col() {
	    _classCallCheck(this, Col);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Col.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        className = _props.className,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'className', 'clsPrefix']);

	    var tbClass = [];
	    /**
	     * 对传入props做样式转化
	     * @type {[type]}
	     */
	    DEVICE_SIZES.forEach(function (size) {
	      function popProp(propSuffix, modifier) {
	        var propName = '' + size + propSuffix;
	        var propValue = others[propName];

	        if (propValue != undefined && propValue != null) {
	          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
	        }

	        delete others[propName];
	      }

	      popProp('', '');
	      popProp('Offset', '-offset');
	      popProp('Push', '-push');
	      popProp('Pull', '-pull');
	    });

	    return _react2["default"].createElement(
	      Component,
	      _extends({
	        className: (0, _classnames2["default"])(tbClass, className)
	      }, others),
	      this.props.children
	    );
	  };

	  return Col;
	}(_react.Component);

	Col.propTypes = propTypes;
	Col.defaultProps = defaultProps;

	exports["default"] = Col;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div',
	  clsPrefix: 'u-row'
	};

	var Row = function (_Component) {
	  _inherits(Row, _Component);

	  function Row() {
	    _classCallCheck(this, Row);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Row.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['componentClass', 'clsPrefix', 'className']);

	    var bsclass = '' + clsPrefix;

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(bsclass, className)
	      }),
	      this.props.children
	    );
	  };

	  return Row;
	}(_react.Component);

	Row.propTypes = propTypes;
	Row.defaultProps = defaultProps;

	exports["default"] = Row;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Adds `container-fluid` class.
	   */
	  fluid: _react.PropTypes.bool,
	  /**
	   * You can use a custom element for this component
	   */
	  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
	};

	var defaultProps = {
	  componentClass: 'div',
	  fluid: false,
	  clsPrefix: 'u-container'
	};

	var Con = function (_React$Component) {
	  _inherits(Con, _React$Component);

	  function Con() {
	    _classCallCheck(this, Con);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Con.prototype.render = function render() {
	    var _tbclass;

	    var _props = this.props,
	        fluid = _props.fluid,
	        Component = _props.componentClass,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'clsPrefix', 'className']);

	    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

	    return _react2["default"].createElement(
	      Component,
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(tbclass, className)
	      }),
	      this.props.children
	    );
	  };

	  return Con;
	}(_react2["default"].Component);

	Con.propTypes = propTypes;
	Con.defaultProps = defaultProps;

	exports["default"] = Con;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;

	var _Panel2 = __webpack_require__(8);

	var _Panel3 = _interopRequireDefault(_Panel2);

	var _PanelGroup2 = __webpack_require__(59);

	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _beeTransition = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否添加折叠
	  collapsible: _react2["default"].PropTypes.bool,
	  onSelect: _react2["default"].PropTypes.func,
	  //头部组件
	  header: _react2["default"].PropTypes.node,
	  headerStyle: _react2["default"].PropTypes.object,
	  id: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
	  headerContent: _react2["default"].PropTypes.bool,
	  //footer组件
	  footer: _react2["default"].PropTypes.node,
	  footerStyle: _react2["default"].PropTypes.object,
	  //默认是否打开
	  defaultExpanded: _react2["default"].PropTypes.bool,
	  //是否打开
	  expanded: _react2["default"].PropTypes.bool,
	  //每个panel的标记
	  eventKey: _react2["default"].PropTypes.any,
	  headerRole: _react2["default"].PropTypes.string,
	  panelRole: _react2["default"].PropTypes.string,
	  //颜色
	  colors: _react2["default"].PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),

	  // From Collapse.的扩展动画
	  onEnter: _react2["default"].PropTypes.func,
	  onEntering: _react2["default"].PropTypes.func,
	  onEntered: _react2["default"].PropTypes.func,
	  onExit: _react2["default"].PropTypes.func,
	  onExiting: _react2["default"].PropTypes.func,
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};

	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);

	  function Panel(props, context) {
	    _classCallCheck(this, Panel);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);

	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }

	  //头部点击事件


	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;

	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }

	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };

	  //渲染panelheader


	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';

	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }

	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }

	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };

	  //如果使用链接，渲染为a标签


	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };

	  //如果有折叠动画，渲染折叠动画


	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix)
	      )
	    );
	  };

	  //渲染panelbody


	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix) {
	    var children = [];
	    var bodyChildren = [];

	    var bodyClassName = clsPrefix + '-body';

	    //添加到body的children中
	    function maybeAddBody() {
	      if (!bodyChildren.length) {
	        return;
	      }

	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren
	      ));

	      bodyChildren = [];
	    }

	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody();

	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));

	        return;
	      }

	      bodyChildren.push(child);
	    });

	    maybeAddBody();

	    return children;
	  };

	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        style = _props.style,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'style', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect']);

	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;

	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;

	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };

	  return Panel;
	}(_react2["default"].Component);

	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;

	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;

	var _Transition2 = __webpack_require__(10);

	var _Transition3 = _interopRequireDefault(_Transition2);

	var _Collapse2 = __webpack_require__(15);

	var _Collapse3 = _interopRequireDefault(_Collapse2);

	var _Fade2 = __webpack_require__(58);

	var _Fade3 = _interopRequireDefault(_Fade2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _properties = __webpack_require__(12);

	var _properties2 = _interopRequireDefault(_properties);

	var _on = __webpack_require__(14);

	var _on2 = _interopRequireDefault(_on);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var transitionEndEvent = _properties2["default"].end;

	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;

	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _react.PropTypes.bool,

	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _react.PropTypes.bool,

	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _react.PropTypes.bool,

	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _react.PropTypes.number,

	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _react.PropTypes.string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _react.PropTypes.string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _react.PropTypes.string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _react.PropTypes.string,

	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _react.PropTypes.func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _react.PropTypes.func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _react.PropTypes.func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _react.PropTypes.func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _react.PropTypes.func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _react.PropTypes.func
	};

	function noop() {}

	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};

	/**
	 * 动画组件
	 */

	var Transition = function (_Component) {
	  _inherits(Transition, _Component);

	  function Transition(props, context) {
	    _classCallCheck(this, Transition);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };

	    _this.nextCallback = null;
	    return _this;
	  }

	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };

	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };

	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;

	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }

	      return;
	    }

	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;

	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };

	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.cancelNextCallback();
	  };

	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    // 这里接收新props
	    props.onEnter(node);

	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);

	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;

	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);

	    props.onExit(node);

	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);

	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };

	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };

	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };

	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;

	    var active = true;

	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;

	        callback(event);
	      }
	    };

	    this.nextCallback.cancel = function () {
	      active = false;
	    };

	    return this.nextCallback;
	  };

	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);

	    if (node) {
	      (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      setTimeout(this.nextCallback, 0);
	    }
	  };

	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }

	    var _props = this.props;
	    var children = _props.children;
	    var className = _props.className;

	    var childProps = _objectWithoutProperties(_props, ['children', 'className']);

	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });

	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }

	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };

	  return Transition;
	}(_react.Component);

	Transition.propTypes = propTypes;

	Transition.defaultProps = defaultProps;

	exports["default"] = Transition;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var transform = 'transform';
	var prefix = void 0,
	    transitionEnd = void 0,
	    animationEnd = void 0;
	var transitionProperty = void 0,
	    transitionDuration = void 0,
	    transitionTiming = void 0,
	    transitionDelay = void 0;
	var animationName = void 0,
	    animationDuration = void 0,
	    animationTiming = void 0,
	    animationDelay = void 0;

	if (_inDOM2.default) {
	  var _getTransitionPropert = getTransitionProperties();

	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


	  exports.transform = transform = prefix + '-' + transform;
	  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
	  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
	  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
	  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

	  exports.animationName = animationName = prefix + '-animation-name';
	  exports.animationDuration = animationDuration = prefix + '-animation-duration';
	  exports.animationTiming = animationTiming = prefix + '-animation-delay';
	  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
	}

	exports.transform = transform;
	exports.transitionProperty = transitionProperty;
	exports.transitionTiming = transitionTiming;
	exports.transitionDelay = transitionDelay;
	exports.transitionDuration = transitionDuration;
	exports.transitionEnd = transitionEnd;
	exports.animationName = animationName;
	exports.animationDuration = animationDuration;
	exports.animationTiming = animationTiming;
	exports.animationDelay = animationDelay;
	exports.animationEnd = animationEnd;
	exports.default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};


	function getTransitionProperties() {
	  var style = document.createElement('div').style;

	  var vendorMap = {
	    O: function O(e) {
	      return 'o' + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return 'moz' + e;
	    },
	    Webkit: function Webkit(e) {
	      return 'webkit' + e;
	    },
	    ms: function ms(e) {
	      return 'MS' + e;
	    }
	  };

	  var vendors = Object.keys(vendorMap);

	  var transitionEnd = void 0,
	      animationEnd = void 0;
	  var prefix = '';

	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];

	    if (vendor + 'TransitionProperty' in style) {
	      prefix = '-' + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }

	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

	  if (!animationEnd && 'animationName' in style) transitionEnd = 'animationend';

	  style = null;

	  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inDOM = __webpack_require__(13);

	var _inDOM2 = _interopRequireDefault(_inDOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var on = function on() {};
	if (_inDOM2.default) {
	  on = function () {

	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}

	exports.default = on;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _style = __webpack_require__(16);

	var _style2 = _interopRequireDefault(_style);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _capitalize = __webpack_require__(24);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};

	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}

	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];

	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}

	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _react2["default"].PropTypes.func,

	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.oneOf(['height', 'width']), _react2["default"].PropTypes.func]),

	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _react2["default"].PropTypes.func,

	  /**
	   * ARIA role of collapsible element
	   */
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,

	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};

	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);

	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }

	  /* -- Expanding -- */


	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };

	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };

	  /* -- Collapsing -- */


	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };

	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };

	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };

	  // for testing


	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };

	  Collapse.prototype.render = function render() {
	    var _props = this.props;
	    var onEnter = _props.onEnter;
	    var onEntering = _props.onEntering;
	    var onEntered = _props.onEntered;
	    var onExit = _props.onExit;
	    var onExiting = _props.onExiting;
	    var className = _props.className;

	    var props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);

	    delete props.dimension;
	    delete props.getDimensionValue;

	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);

	    var classes = {
	      width: this._dimension() === 'width'
	    };

	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };

	  return Collapse;
	}(_react2["default"].Component);

	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;

	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = style;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	var _hyphenateStyle = __webpack_require__(19);

	var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

	var _getComputedStyle2 = __webpack_require__(21);

	var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

	var _removeStyle = __webpack_require__(22);

	var _removeStyle2 = _interopRequireDefault(_removeStyle);

	var _properties = __webpack_require__(12);

	var _isTransform = __webpack_require__(23);

	var _isTransform2 = _interopRequireDefault(_isTransform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;

	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }

	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	    if (!value && value !== 0) {
	      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
	    } else if ((0, _isTransform2.default)(key)) {
	      transforms += key + '(' + value + ') ';
	    } else {
	      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
	    }
	  });

	  if (transforms) {
	    css += _properties.transform + ': ' + transforms + ';';
	  }

	  node.style.cssText += ';' + css;
	}
	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelizeStyleName;

	var _camelize = __webpack_require__(18);

	var _camelize2 = _interopRequireDefault(_camelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^-ms-/; /**
	                          * Copyright 2014-2015, Facebook, Inc.
	                          * All rights reserved.
	                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	                          */
	function camelizeStyleName(string) {
	  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
	}
	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = camelize;
	var rHyphen = /-(.)/g;

	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenateStyleName;

	var _hyphenate = __webpack_require__(20);

	var _hyphenate2 = _interopRequireDefault(_hyphenate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var msPattern = /^ms-/; /**
	                         * Copyright 2013-2014, Facebook, Inc.
	                         * All rights reserved.
	                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	                         */

	function hyphenateStyleName(string) {
	  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
	}
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = hyphenate;

	var rUpper = /([A-Z])/g;

	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = _getComputedStyle;

	var _camelizeStyle = __webpack_require__(17);

	var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;

	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;

	      prop = (0, _camelizeStyle2.default)(prop);

	      if (prop == 'float') prop = 'styleFloat';

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) current = style[prop];

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) runStyle.left = node.currentStyle.left;

	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px';

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }

	      return current;
	    }
	  };
	}
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeStyle;
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;

	var _all2 = __webpack_require__(26);

	var _all3 = _interopRequireDefault(_all2);

	var _componentOrElement2 = __webpack_require__(28);

	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);

	var _deprecated2 = __webpack_require__(29);

	var _deprecated3 = _interopRequireDefault(_deprecated2);

	var _elementType2 = __webpack_require__(32);

	var _elementType3 = _interopRequireDefault(_elementType2);

	var _isRequiredForA11y2 = __webpack_require__(33);

	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);

	var _splitComponent2 = __webpack_require__(34);

	var _splitComponent3 = _interopRequireDefault(_splitComponent2);

	var _createChainedFunction2 = __webpack_require__(35);

	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);

	var _keyCode = __webpack_require__(36);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _contains2 = __webpack_require__(37);

	var _contains3 = _interopRequireDefault(_contains2);

	var _addEventListener2 = __webpack_require__(38);

	var _addEventListener3 = _interopRequireDefault(_addEventListener2);

	var _cssAnimation2 = __webpack_require__(43);

	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);

	var _toArray2 = __webpack_require__(47);

	var _toArray3 = _interopRequireDefault(_toArray2);

	var _Align2 = __webpack_require__(48);

	var _Align3 = _interopRequireDefault(_Align2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';

	exports.Align = _Align3.default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = all;

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }

	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var error = null;

	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }

	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });

	    return error;
	  }

	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	// Mostly taken from ReactPropTypes.

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }

	      return null;
	    }

	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }

	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }

	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = deprecated;

	var _warning = __webpack_require__(30);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;

	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));

	      warned[messageKey] = true;
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}

	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _createChainableTypeChecker = __webpack_require__(27);

	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }

	  return null;
	}

	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;

	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }

	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }

	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;

	  var parentProps = {};
	  var childProps = {};

	  Object.entries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];

	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });

	  return [parentProps, childProps];
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }

	    if (acc === null) {
	      return f;
	    }

	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */

	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};

	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	module.exports = KeyCode;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = contains;
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = addEventListenerWrap;

	var _addDomEventListener = __webpack_require__(39);

	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventObject = __webpack_require__(40);

	var _EventObject2 = _interopRequireDefault(_EventObject);

	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }

	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}

	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _EventBaseObject = __webpack_require__(41);

	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

	var _objectAssign = __webpack_require__(42);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}

	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }

	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;

	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }

	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }

	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }

	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }

	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }

	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }

	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }

	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;

	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }

	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }

	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }

	    return event;
	  }
	}];

	function retTrue() {
	  return TRUE;
	}

	function retFalse() {
	  return FALSE;
	}

	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;

	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

	  _EventBaseObject2['default'].call(this);

	  this.nativeEvent = nativeEvent;

	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }

	  this.isDefaultPrevented = isDefaultPrevented;

	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();

	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });

	  l = props.length;

	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }

	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }

	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }

	  l = fixFns.length;

	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }

	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}

	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,

	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;

	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }

	    EventBaseObjectProto.preventDefault.call(this);
	  },

	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;

	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }

	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});

	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}

	function returnTrue() {
	  return true;
	}

	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}

	EventBaseObject.prototype = {
	  isEventObject: 1,

	  constructor: EventBaseObject,

	  isDefaultPrevented: returnFalse,

	  isPropagationStopped: returnFalse,

	  isImmediatePropagationStopped: returnFalse,

	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },

	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },

	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },

	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};

	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Event = __webpack_require__(44);

	var _Event2 = _interopRequireDefault(_Event);

	var _componentClasses = __webpack_require__(45);

	var _componentClasses2 = _interopRequireDefault(_componentClasses);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;


	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);

	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}

	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}

	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}

	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);

	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }

	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);

	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);

	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};

	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }

	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }

	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }

	    clearBrowserBugTimeout(node);

	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;

	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };

	  _Event2.default.addEndEventListener(node, node.rcEndListener);

	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};

	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};

	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

	exports.default = cssAnimation;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },


	  endEvents: endEvents,

	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	exports.default = TransitionEvents;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var index = __webpack_require__(46);
	} catch (err) {
	  var index = __webpack_require__(46);
	}

	/**
	 * Whitespace regexp.
	 */

	var re = /\s+/;

	/**
	 * toString reference.
	 */

	var toString = Object.prototype.toString;

	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */

	module.exports = function(el){
	  return new ClassList(el);
	};

	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */

	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}

	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }

	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }

	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};

	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */

	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};

	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }

	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }

	  return this;
	};

	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */

	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};

	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */

	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = toArray;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(49);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(38);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import isWindow from './isWindow';

	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	var Align = _react2.default.createClass({
	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},

	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2.default)(window, 'resize', this.bufferMonitor);
	    }
	  },
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	  forceAlign: function forceAlign() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;

	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports.default = Align;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(53);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(54);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(55);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(56);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// http://yiminghe.iteye.com/blog/1124720

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2["default"].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2["default"])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2["default"])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2["default"].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2["default"].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2["default"];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

	exports["default"] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _propertyUtils = __webpack_require__(51);

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	function force(x, y) {
	  return x + y;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports["default"] = utils;
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2["default"].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2["default"].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports["default"] = getOffsetParent;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(52);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2["default"])(element);
	  var scrollX = void 0;
	  var scrollY = void 0;
	  var winSize = void 0;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2["default"].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2["default"])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2["default"].getWindowScrollLeft(win);
	  scrollY = _utils2["default"].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2["default"].viewportWidth(win),
	    height: _utils2["default"].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports["default"] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2["default"].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2["default"].mix(pos, size);
	}

	exports["default"] = adjustForViewport;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(50);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2["default"].offset(node);
	    w = _utils2["default"].outerWidth(node);
	    h = _utils2["default"].outerHeight(node);
	  } else {
	    var win = _utils2["default"].getWindow(node);
	    offset = {
	      left: _utils2["default"].getWindowScrollLeft(win),
	      top: _utils2["default"].getWindowScrollTop(win)
	    };
	    w = _utils2["default"].viewportWidth(win);
	    h = _utils2["default"].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports["default"] = getRegion;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(57);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = void 0;
	  var diff = void 0;
	  var p1 = void 0;
	  var p2 = void 0;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports["default"] = getElFuturePos;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = void 0;
	  var y = void 0;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports["default"] = getAlignOffset;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _Transition = __webpack_require__(10);

	var _Transition2 = _interopRequireDefault(_Transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _react2["default"].PropTypes.bool,

	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _react2["default"].PropTypes.bool,

	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _react2["default"].PropTypes.bool,

	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _react2["default"].PropTypes.number,

	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _react2["default"].PropTypes.func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _react2["default"].PropTypes.func
	};

	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};

	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);

	  function Fade() {
	    _classCallCheck(this, Fade);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };

	  return Fade;
	}(_react2["default"].Component);

	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;

	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _tinperBeeCore = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  //是否是手风琴效果
	  accordion: _react2["default"].PropTypes.bool,
	  //激活的项
	  activeKey: _react2["default"].PropTypes.any,
	  //默认的激活的项
	  defaultActiveKey: _react2["default"].PropTypes.any,
	  //选中函数
	  onSelect: _react2["default"].PropTypes.func,
	  role: _react2["default"].PropTypes.string
	};

	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};

	// TODO: Use uncontrollable.

	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);

	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

	    _this.handleSelect = _this.handleSelect.bind(_this);

	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }

	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();

	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }

	    if (this.state.activeKey === key) {
	      key = null;
	    }

	    this.setState({ activeKey: key });
	  };

	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);

	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }

	    var classes = {};
	    classes['' + clsPrefix] = true;

	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };

	        if (accordion) {
	          Object.assign(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }

	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };

	  return PanelGroup;
	}(_react2["default"].Component);

	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;

	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(61);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _react.PropTypes.oneOf(['sm', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _react.PropTypes.object,
	    /**
	     * @title 形状
	     */
	    shape: _react.PropTypes.oneOf(['block', 'round', 'squared', 'floating', 'pillRight', 'pillLeft', 'border', 'icon']),
	    /**
	    * @title 类型
	    */
	    colors: _react.PropTypes.oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _react.PropTypes.string,

	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _react.PropTypes.oneOf(['submit', 'button', 'reset'])
	};

	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button'

	};

	var sizeMap = {
	    sm: 'sm',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button(props) {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }

	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'children', 'htmlType', 'clsPrefix']);

	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };

	    return Button;
	}(_react.Component);

	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;

	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FormControl = __webpack_require__(63);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	exports['default'] = _FormControl2['default'];
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(11);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _beeIcon = __webpack_require__(64);

	var _beeIcon2 = _interopRequireDefault(_beeIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
	  componentClass: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
	  type: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['sm', 'md', 'lg']),
	  id: _react.PropTypes.string
	};

	var defaultProps = {
	  componentClass: 'input',
	  clsPrefix: 'u-form-control',
	  type: 'text',
	  size: 'md'
	};

	var FormControl = function (_React$Component) {
	  _inherits(FormControl, _React$Component);

	  function FormControl(props) {
	    _classCallCheck(this, FormControl);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.onChange = function (e) {
	      _this.setState({ value: e, showSearch: false });
	    };

	    _this.clearValue = function () {
	      debugger;
	      _reactDom2['default'].findDOMNode(_this.refs.inputValue).value = "";
	      _this.refs.inputValue.focus();
	      _this.setState({ showSearch: true });
	    };

	    _this.state = {
	      showSearch: true
	    };
	    return _this;
	  }

	  FormControl.prototype.render = function render() {
	    var _props = this.props,
	        Component = _props.componentClass,
	        type = _props.type,
	        id = _props.id,
	        className = _props.className,
	        size = _props.size,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['componentClass', 'type', 'id', 'className', 'size', 'clsPrefix']);

	    // input[type="file"] 不应该有类名 .form-control.


	    var classes = {};
	    if (size) {
	      classes['' + size] = true;
	    }
	    if (type == "search") {
	      classes['u-input-search'] = true;
	    }

	    var classNames = void 0;
	    if (type !== 'file') {
	      classNames = (0, _classnames2['default'])(clsPrefix, classes);
	    }

	    if (type == "search") {
	      console.log(this.state.showSearch);
	      return _react2['default'].createElement(
	        'span',
	        _extends({ className: 'u-input-search u-input-affix-wrapper' }, others),
	        _react2['default'].createElement(Component, {
	          ref: 'inputValue',
	          type: type,
	          onChange: this.onChange,
	          id: id,
	          className: (0, _classnames2['default'])(className, classNames)
	        }),
	        _react2['default'].createElement(
	          'span',
	          { className: 'u-input-suffix' },
	          this.state.showSearch && _react2['default'].createElement(_beeIcon2['default'], { type: 'uf-search' }),
	          !this.state.showSearch && _react2['default'].createElement(_beeIcon2['default'], { onClick: this.clearValue, type: 'uf-close-c' })
	        )
	      );
	    }

	    return _react2['default'].createElement(Component, _extends({}, others, {
	      type: type,
	      id: id,
	      onChange: this.onChange,
	      className: (0, _classnames2['default'])(className, classNames)
	    }));
	  };

	  return FormControl;
	}(_react2['default'].Component);

	FormControl.propTypes = propTypes;
	FormControl.defaultProps = defaultProps;

	exports['default'] = FormControl;
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var propTypes = {
		type: _react.PropTypes.string

	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};

	var Icon = function (_Component) {
		_inherits(Icon, _Component);

		function Icon(props) {
			_classCallCheck(this, Icon);

			return _possibleConstructorReturn(this, _Component.call(this, props));
		}

		Icon.prototype.render = function render() {
			var _props = this.props,
			    type = _props.type,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);

			var clsObj = {};

			var classNames = (0, _classnames2["default"])(clsPrefix, type);

			return _react2["default"].createElement('i', _extends({}, others, { className: (0, _classnames2["default"])(classNames, className) }));
		};

		return Icon;
	}(_react.Component);

	Icon.defaultProps = defaultProps;
	Icon.PropTypes = _react.PropTypes;

	exports["default"] = Icon;
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _src = __webpack_require__(62);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 常用三种尺寸 Input
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Demo1 = function (_Component) {
		_inherits(Demo1, _Component);

		function Demo1() {
			_classCallCheck(this, Demo1);

			return _possibleConstructorReturn(this, _Component.apply(this, arguments));
		}

		Demo1.prototype.render = function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'demo-form-control' },
				_react2['default'].createElement('button', { onClick: this.onChange }),
				_react2['default'].createElement(
					'span',
					{ className: 'wraper' },
					_react2['default'].createElement(_src2['default'], { placeholder: 'Enter text', size: 'sm' }),
					' '
				),
				_react2['default'].createElement(
					'span',
					{ className: 'wraper' },
					_react2['default'].createElement(_src2['default'], { placeholder: 'Enter text' }),
					' '
				),
				_react2['default'].createElement(
					'span',
					{ className: 'wraper' },
					_react2['default'].createElement(_src2['default'], { placeholder: 'Enter text', size: 'lg' })
				),
				_react2['default'].createElement(
					'span',
					{ className: 'wraper' },
					_react2['default'].createElement(_src2['default'], { placeholder: 'Enter text', type: 'search', size: 'lg' })
				)
			);
		};

		return Demo1;
	}(_react.Component);

	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _src = __webpack_require__(62);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 不可用 Input
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var Demo2 = function (_Component) {
		_inherits(Demo2, _Component);

		function Demo2() {
			_classCallCheck(this, Demo2);

			return _possibleConstructorReturn(this, _Component.apply(this, arguments));
		}

		Demo2.prototype.render = function render() {
			return _react2['default'].createElement(_src2['default'], { disabled: true, placeholder: 'Enter text' });
		};

		return Demo2;
	}(_react.Component);

	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZGM4NmZmYjE0OTE2MzJiOWFiNiIsIndlYnBhY2s6Ly8vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2JlZS1sYXlvdXQvYnVpbGQvUm93LmpzIiwid2VicGFjazovLy8uL34vYmVlLWxheW91dC9idWlsZC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9ldmVudHMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZVN0eWxlLmpzIiwid2VicGFjazovLy8uL34vZG9tLWhlbHBlcnMvdXRpbC9jYW1lbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3V0aWwvaHlwaGVuYXRlU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2dldENvbXB1dGVkU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20taGVscGVycy9zdHlsZS9yZW1vdmVTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb21wb25lbnRPckVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2RlcHJlY2F0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy91c3IvbG9jYWwvbGliL34vYmVlLXRvb2xzL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9lbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvaXNSZXF1aXJlZEZvckExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL3NwbGl0Q29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbnBlci1iZWUtY29yZS9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL34vdGlucGVyLWJlZS1jb3JlL2xpYi9BbGlnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9wcm9wZXJ0eVV0aWxzLmpzIiwid2VicGFjazovLy8uL34vZG9tLWFsaWduL2xpYi9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvYWRqdXN0Rm9yVmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvbS1hbGlnbi9saWIvZ2V0RWxGdXR1cmVQb3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9kb20tYWxpZ24vbGliL2dldEFsaWduT2Zmc2V0LmpzIiwid2VicGFjazovLy8uL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvRmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbEdyb3VwLmpzIiwid2VicGFjazovLy8uL34vYmVlLWJ1dHRvbi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1idXR0b24vYnVpbGQvQnV0dG9uLmpzIiwid2VicGFjazovLy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9Gb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlZS1pY29uL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmVlLWljb24vYnVpbGQvSWNvbi5qcyIsIndlYnBhY2s6Ly8vZGVtby9kZW1vbGlzdC9EZW1vMS5qcyIsIndlYnBhY2s6Ly8vZGVtby9kZW1vbGlzdC9EZW1vMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZGM4NmZmYjE0OTE2MzJiOWFiNiIsIlxuaW1wb3J0IHsgQ29uLCBSb3csIENvbCB9IGZyb20gJ2JlZS1sYXlvdXQnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdiZWUtcGFuZWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdiZWUtYnV0dG9uJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi9zcmMnO1xuXG5cbmNvbnN0IENBUkVUID0gPGkgY2xhc3NOYW1lPVwidWYgdWYtYXJyb3ctZG93blwiPjwvaT47XG5cbmNvbnN0IENBUkVUVVAgPSA8aSBjbGFzc05hbWU9XCJ1ZiB1Zi1hcnJvdy11cFwiPjwvaT47XG5cblxudmFyIERlbW8xID0gcmVxdWlyZShcIi4vZGVtb2xpc3QvRGVtbzFcIik7dmFyIERlbW8yID0gcmVxdWlyZShcIi4vZGVtb2xpc3QvRGVtbzJcIik7dmFyIERlbW9BcnJheSA9IFt7XCJleGFtcGxlXCI6PERlbW8xIC8+LFwidGl0bGVcIjpcIiDluLjnlKjkuInnp43lsLrlr7ggSW5wdXRcIixcImNvZGVcIjpcIi8qKlxcbiAqIEB0aXRsZSDluLjnlKjkuInnp43lsLrlr7ggSW5wdXRcXG4gKiBAZGVzY3JpcHRpb24gXFxuICovXFxuXFxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAndGlucGVyLWJlZSc7XFxuXFxuXFxuXFx0XFxuXFx0cmVuZGVyICgpIHtcXG5cXHRcXHRyZXR1cm4gKFxcblxcdFxcdFxcdDxkaXYgY2xhc3NOYW1lPVxcXCJkZW1vLWZvcm0tY29udHJvbFxcXCI+XFxuXFx0XFx0XFx0XFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlfT48L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzc05hbWU9XFxcIndyYXBlclxcXCI+PEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0ZXh0XFxcIiBzaXplPVxcXCJzbVxcXCIvPlxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzc05hbWU9XFxcIndyYXBlclxcXCI+PEZvcm1Db250cm9sIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0ZXh0XFxcIi8+XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzTmFtZT1cXFwid3JhcGVyXFxcIj48Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRleHRcXFwiIHNpemU9XFxcImxnXFxcIi8+PC9zcGFuPlxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzTmFtZT1cXFwid3JhcGVyXFxcIj48Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRleHRcXFwiIHR5cGU9XFxcInNlYXJjaFxcXCIgc2l6ZT1cXFwibGdcXFwiLz48L3NwYW4+XFx0XFxuXFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0KVxcblxcdH1cXG59XCIsXCJkZXNjXCI6XCIgXCJ9LHtcImV4YW1wbGVcIjo8RGVtbzIgLz4sXCJ0aXRsZVwiOlwiIOS4jeWPr+eUqCBJbnB1dFwiLFwiY29kZVwiOlwiLyoqXFxuICogQHRpdGxlIOS4jeWPr+eUqCBJbnB1dFxcbiAqIEBkZXNjcmlwdGlvbiBcXG4gKi9cXG5cXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICd0aW5wZXItYmVlJztcXG5cXG5cXG5cXHRyZW5kZXIgKCkge1xcblxcdFxcdHJldHVybiAoXFxuXFx0XFx0XFx0PEZvcm1Db250cm9sIGRpc2FibGVkIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0ZXh0XFxcIi8+XFx0XFxuXFx0XFx0KVxcblxcdH1cXG59XCIsXCJkZXNjXCI6XCIgXCJ9XVxuXG5cbmNsYXNzIERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICF0aGlzLnN0YXRlLm9wZW4gfSlcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7IHRpdGxlLCBleGFtcGxlLCBjb2RlLCBkZXNjICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGNhcmV0ID0gdGhpcy5zdGF0ZS5vcGVuID8gQ0FSRVRVUCA6IENBUkVUO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuc3RhdGUub3BlbiA/IFwi6ZqQ6JeP5Luj56CBXCIgOiBcIuafpeeci+S7o+eggVwiO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IChcbiAgICAgICAgICAgIDxCdXR0b24gc2hhcGU9XCJibG9ja1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0+XG4gICAgICAgICAgICAgICAgeyBjYXJldCB9XG4gICAgICAgICAgICAgICAgeyB0ZXh0IH1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgICAgIDxoMz57IHRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICAgIDxwPnsgZGVzYyB9PC9wPlxuICAgICAgICAgICAgICAgIDxQYW5lbCBjb2xsYXBzaWJsZSBleHBhbmRlZD17IHRoaXMuc3RhdGUub3BlbiB9IGNvbG9ycz0nYm9yZGVyZWQnIGhlYWRlcj17IGV4YW1wbGUgfSBmb290ZXI9e2Zvb3Rlcn0gZm9vdGVyU3R5bGUgPSB7e3BhZGRpbmc6IDAsYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIn19ID5cbiAgICAgICAgICAgICAgICAgICAgPHByZT48Y29kZSBjbGFzc05hbWU9XCJobGpzIGphdmFzY3JpcHRcIj57IGNvZGUgfTwvY29kZT48L3ByZT5cbiAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNsYXNzIERlbW9Hcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICB7RGVtb0FycmF5Lm1hcCgoY2hpbGQsaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtbyBleGFtcGxlPSB7Y2hpbGQuZXhhbXBsZX0gdGl0bGU9IHtjaGlsZC50aXRsZX0gY29kZT0ge2NoaWxkLmNvZGV9IGRlc2M9IHtjaGlsZC5kZXNjfSBrZXk9IHtpbmRleH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICApXG4gICAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPERlbW9Hcm91cC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGlucGVyQmVlRGVtbycpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZW1vL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db24gPSBleHBvcnRzLlJvdyA9IGV4cG9ydHMuQ29sID0gdW5kZWZpbmVkO1xuXG52YXIgX0NvbDIgPSByZXF1aXJlKCcuL0NvbCcpO1xuXG52YXIgX0NvbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2wyKTtcblxudmFyIF9Sb3cyID0gcmVxdWlyZSgnLi9Sb3cnKTtcblxudmFyIF9Sb3czID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm93Mik7XG5cbnZhciBfTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcblxudmFyIF9MYXlvdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGF5b3V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQ29sID0gX0NvbDNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5Sb3cgPSBfUm93M1tcImRlZmF1bHRcIl07XG5leHBvcnRzLkNvbiA9IF9MYXlvdXQyW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWxheW91dC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBjb21wb25lbnRDbGFzczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5lbGVtZW50LCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIHhz5pi+56S65YiX5pWwXG4gICAqL1xuICB4czogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeaYvuekuuWIl+aVsFxuICAgKi9cbiAgc206IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTmmL7npLrliJfmlbBcbiAgICovXG4gIG1kOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIGxn5pi+56S65YiX5pWwXG4gICAqL1xuICBsZzogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB4c+WBj+enu+WIl+aVsFxuICAgKi9cbiAgeHNPZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogc23lgY/np7vliJfmlbBcbiAgICovXG4gIHNtT2Zmc2V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1k5YGP56e75YiX5pWwXG4gICAqL1xuICBtZE9mZnNldDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+WBj+enu+WIl+aVsFxuICAgKi9cbiAgbGdPZmZzZXQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogeHPlj7PlgY/np7vliJfmlbBcbiAgICovXG4gIHhzUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBzbeWPs+WBj+enu+WIl+aVsFxuICAgKi9cbiAgc21QdXNoOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIG1k5Y+z5YGP56e75YiX5pWwXG4gICAqL1xuICBtZFB1c2g6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbGflj7PlgY/np7vliJfmlbBcbiAgICovXG4gIGxnUHVzaDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiB4c+W3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgeHNQdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqXG4gICAqIHNt5bem5YGP56e75YiX5pWwXG4gICAqL1xuICBzbVB1bGw6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvKipcbiAgICogbWTlt6blgY/np7vliJfmlbBcbiAgICovXG4gIG1kUHVsbDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBsZ+W3puWBj+enu+WIl+aVsFxuICAgKi9cbiAgbGdQdWxsOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlclxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBjbHNQcmVmaXg6ICd1LWNvbCdcbn07XG5cbnZhciBERVZJQ0VfU0laRVMgPSBbJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5cbnZhciBDb2wgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2woKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENvbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50Q2xhc3MnLCAnY2xhc3NOYW1lJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciB0YkNsYXNzID0gW107XG4gICAgLyoqXG4gICAgICog5a+55Lyg5YWlcHJvcHPlgZrmoLflvI/ovazljJZcbiAgICAgKiBAdHlwZSB7W3R5cGVdfVxuICAgICAqL1xuICAgIERFVklDRV9TSVpFUy5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICBmdW5jdGlvbiBwb3BQcm9wKHByb3BTdWZmaXgsIG1vZGlmaWVyKSB7XG4gICAgICAgIHZhciBwcm9wTmFtZSA9ICcnICsgc2l6ZSArIHByb3BTdWZmaXg7XG4gICAgICAgIHZhciBwcm9wVmFsdWUgPSBvdGhlcnNbcHJvcE5hbWVdO1xuXG4gICAgICAgIGlmIChwcm9wVmFsdWUgIT0gdW5kZWZpbmVkICYmIHByb3BWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGJDbGFzcy5wdXNoKGNsc1ByZWZpeCArICctJyArIHNpemUgKyBtb2RpZmllciArICctJyArIHByb3BWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgb3RoZXJzW3Byb3BOYW1lXTtcbiAgICAgIH1cblxuICAgICAgcG9wUHJvcCgnJywgJycpO1xuICAgICAgcG9wUHJvcCgnT2Zmc2V0JywgJy1vZmZzZXQnKTtcbiAgICAgIHBvcFByb3AoJ1B1c2gnLCAnLXB1c2gnKTtcbiAgICAgIHBvcFByb3AoJ1B1bGwnLCAnLXB1bGwnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKSh0YkNsYXNzLCBjbGFzc05hbWUpXG4gICAgICB9LCBvdGhlcnMpLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Db2wuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtbGF5b3V0L2J1aWxkL0NvbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBjbHNQcmVmaXg6ICd1LXJvdydcbn07XG5cbnZhciBSb3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUm93LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSb3coKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFJvdy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29tcG9uZW50Q2xhc3MnLCAnY2xzUHJlZml4JywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciBic2NsYXNzID0gJycgKyBjbHNQcmVmaXg7XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9leHRlbmRzKHt9LCBvdGhlcnMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoYnNjbGFzcywgY2xhc3NOYW1lKVxuICAgICAgfSksXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUm93O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblJvdy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUm93O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1sYXlvdXQvYnVpbGQvUm93LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxyXG4gICAqIEFkZHMgYGNvbnRhaW5lci1mbHVpZGAgY2xhc3MuXHJcbiAgICovXG4gIGZsdWlkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gdXNlIGEgY3VzdG9tIGVsZW1lbnQgZm9yIHRoaXMgY29tcG9uZW50XHJcbiAgICovXG4gIGNvbXBvbmVudENsYXNzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmVsZW1lbnQsIF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmddKVxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50Q2xhc3M6ICdkaXYnLFxuICBmbHVpZDogZmFsc2UsXG4gIGNsc1ByZWZpeDogJ3UtY29udGFpbmVyJ1xufTtcblxudmFyIENvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90YmNsYXNzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZsdWlkID0gX3Byb3BzLmZsdWlkLFxuICAgICAgICBDb21wb25lbnQgPSBfcHJvcHMuY29tcG9uZW50Q2xhc3MsXG4gICAgICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnZmx1aWQnLCAnY29tcG9uZW50Q2xhc3MnLCAnY2xzUHJlZml4JywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciB0YmNsYXNzID0gKF90YmNsYXNzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfdGJjbGFzcywgJycgKyBjbHNQcmVmaXgsICFmbHVpZCksIF9kZWZpbmVQcm9wZXJ0eShfdGJjbGFzcywgY2xzUHJlZml4ICsgJy1mbHVpZCcsIGZsdWlkKSwgX3RiY2xhc3MpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICBDb21wb25lbnQsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRiY2xhc3MsIGNsYXNzTmFtZSlcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbjtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuQ29uLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1sYXlvdXQvYnVpbGQvTGF5b3V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuUGFuZWxHcm91cCA9IGV4cG9ydHMuUGFuZWwgPSB1bmRlZmluZWQ7XG5cbnZhciBfUGFuZWwyID0gcmVxdWlyZSgnLi9QYW5lbCcpO1xuXG52YXIgX1BhbmVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsMik7XG5cbnZhciBfUGFuZWxHcm91cDIgPSByZXF1aXJlKCcuL1BhbmVsR3JvdXAnKTtcblxudmFyIF9QYW5lbEdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhbmVsR3JvdXAyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuUGFuZWwgPSBfUGFuZWwzW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuUGFuZWxHcm91cCA9IF9QYW5lbEdyb3VwM1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1wYW5lbC9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfYmVlVHJhbnNpdGlvbiA9IHJlcXVpcmUoJ2JlZS10cmFuc2l0aW9uJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmYXVsdHMob2JqLCBkZWZhdWx0cykgeyB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTsgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7IHZhciBrZXkgPSBrZXlzW2ldOyB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpOyBpZiAodmFsdWUgJiYgdmFsdWUuY29uZmlndXJhYmxlICYmIG9ialtrZXldID09PSB1bmRlZmluZWQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7IH0gfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogX2RlZmF1bHRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvL+aYr+WQpua3u+WKoOaKmOWPoFxuICBjb2xsYXBzaWJsZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2VsZWN0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLy/lpLTpg6jnu4Tku7ZcbiAgaGVhZGVyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubm9kZSxcbiAgaGVhZGVyU3R5bGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vYmplY3QsXG4gIGlkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubnVtYmVyXSksXG4gIGhlYWRlckNvbnRlbnQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL2Zvb3Rlcue7hOS7tlxuICBmb290ZXI6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ub2RlLFxuICBmb290ZXJTdHlsZTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9iamVjdCxcbiAgLy/pu5jorqTmmK/lkKbmiZPlvIBcbiAgZGVmYXVsdEV4cGFuZGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcbiAgLy/mmK/lkKbmiZPlvIBcbiAgZXhwYW5kZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuICAvL+avj+S4qnBhbmVs55qE5qCH6K6wXG4gIGV2ZW50S2V5OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYW55LFxuICBoZWFkZXJSb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICBwYW5lbFJvbGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmcsXG4gIC8v6aKc6ImyXG4gIGNvbG9yczogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdhY2NlbnQnLCAnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJywgJ2RlZmF1bHQnLCAnYm9yZGVyZWQnXSksXG5cbiAgLy8gRnJvbSBDb2xsYXBzZS7nmoTmianlsZXliqjnlLtcbiAgb25FbnRlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW50ZXJpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkVudGVyZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkV4aXRpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICBvbkV4aXRlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRlZmF1bHRFeHBhbmRlZDogZmFsc2UsXG4gIGNsc1ByZWZpeDogXCJ1LXBhbmVsXCIsXG4gIGNvbG9yczogXCJkZWZhdWx0XCJcbn07XG5cbnZhciBQYW5lbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUGFuZWwocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFuZWwpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVDbGlja1RpdGxlID0gX3RoaXMuaGFuZGxlQ2xpY2tUaXRsZS5iaW5kKF90aGlzKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLnByb3BzLmRlZmF1bHRFeHBhbmRlZFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLy/lpLTpg6jngrnlh7vkuovku7ZcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5oYW5kbGVDbGlja1RpdGxlID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2tUaXRsZShlKSB7XG4gICAgLy8g5LiN6K6p5LqL5Lu26L+b5YWl5LqL5Lu25rGgXG4gICAgZS5wZXJzaXN0KCk7XG4gICAgZS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnByb3BzLmV2ZW50S2V5LCBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkIH0pO1xuICAgIH1cbiAgfTtcblxuICAvL+a4suafk3BhbmVsaGVhZGVyXG5cblxuICBQYW5lbC5wcm90b3R5cGUucmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGNvbGxhcHNpYmxlLCBoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZCwgY2xzUHJlZml4KSB7XG4gICAgdmFyIHRpdGxlQ2xhc3NOYW1lID0gY2xzUHJlZml4ICsgJy10aXRsZSc7XG5cbiAgICBpZiAoIWNvbGxhcHNpYmxlKSB7XG4gICAgICBpZiAoIV9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGhlYWRlcikpIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIV9yZWFjdDJbXCJkZWZhdWx0XCJdLmlzVmFsaWRFbGVtZW50KGhlYWRlcikpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDQnLFxuICAgICAgICB7IHJvbGU6ICdwcmVzZW50YXRpb24nLCBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lIH0sXG4gICAgICAgIHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlciwgaWQsIHJvbGUsIGV4cGFuZGVkKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuaGVhZGVyQ29udGVudCkge1xuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShoZWFkZXIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGhlYWRlciwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoaGVhZGVyLnByb3BzLmNsYXNzTmFtZSwgdGl0bGVDbGFzc05hbWUpLFxuICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlci5wcm9wcy5jaGlsZHJlbiwgaWQsIHJvbGUsIGV4cGFuZGVkKVxuICAgIH0pO1xuICB9O1xuXG4gIC8v5aaC5p6c5L2/55So6ZO+5o6l77yM5riy5p+T5Li6Yeagh+etvlxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckFuY2hvciA9IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIsIGlkLCByb2xlLCBleHBhbmRlZCkge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICByb2xlOiByb2xlLFxuICAgICAgICBocmVmOiBpZCAmJiAnIycgKyBpZCxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBpZCxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBleHBhbmRlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBleHBhbmRlZCA/IG51bGwgOiAnY29sbGFwc2VkJ1xuICAgICAgfSxcbiAgICAgIGhlYWRlclxuICAgICk7XG4gIH07XG5cbiAgLy/lpoLmnpzmnInmipjlj6DliqjnlLvvvIzmuLLmn5Pmipjlj6DliqjnlLtcblxuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXJDb2xsYXBzaWJsZUJvZHkgPSBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZUJvZHkoaWQsIGV4cGFuZGVkLCByb2xlLCBjaGlsZHJlbiwgY2xzUHJlZml4LCBhbmltYXRpb25Ib29rcykge1xuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX2JlZVRyYW5zaXRpb24uQ29sbGFwc2UsXG4gICAgICBfZXh0ZW5kcyh7ICdpbic6IGV4cGFuZGVkIH0sIGFuaW1hdGlvbkhvb2tzKSxcbiAgICAgIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHNQcmVmaXggKyAnLWNvbGxhcHNlJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAhZXhwYW5kZWRcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJCb2R5KGNoaWxkcmVuLCBjbHNQcmVmaXgpXG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICAvL+a4suafk3BhbmVsYm9keVxuXG5cbiAgUGFuZWwucHJvdG90eXBlLnJlbmRlckJvZHkgPSBmdW5jdGlvbiByZW5kZXJCb2R5KHJhd0NoaWxkcmVuLCBjbHNQcmVmaXgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gW107XG5cbiAgICB2YXIgYm9keUNsYXNzTmFtZSA9IGNsc1ByZWZpeCArICctYm9keSc7XG5cbiAgICAvL+a3u+WKoOWIsGJvZHnnmoRjaGlsZHJlbuS4rVxuICAgIGZ1bmN0aW9uIG1heWJlQWRkQm9keSgpIHtcbiAgICAgIGlmICghYm9keUNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOe7meWtkOe7hOS7tua3u+WKoGtlee+8jOS4uuS6huS5i+WQjuinpuWPkeS6i+S7tuaXtuS9v+eUqFxuICAgICAgY2hpbGRyZW4ucHVzaChfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IGNoaWxkcmVuLmxlbmd0aCwgY2xhc3NOYW1lOiBib2R5Q2xhc3NOYW1lIH0sXG4gICAgICAgIGJvZHlDaGlsZHJlblxuICAgICAgKSk7XG5cbiAgICAgIGJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8v6L2s5o2i5Li65pWw57uE77yM5pa55L6/5aSN55SoXG4gICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4udG9BcnJheShyYXdDaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMuZmlsbCkge1xuICAgICAgICBtYXliZUFkZEJvZHkoKTtcblxuICAgICAgICAvL+Wwhuagh+ekumZpbGzorr7nva7kuLp1bmRlZmluZWRcbiAgICAgICAgY2hpbGRyZW4ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHsgZmlsbDogdW5kZWZpbmVkIH0pKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJvZHlDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIG1heWJlQWRkQm9keSgpO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9O1xuXG4gIFBhbmVsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbGxhcHNpYmxlID0gX3Byb3BzLmNvbGxhcHNpYmxlLFxuICAgICAgICBoZWFkZXIgPSBfcHJvcHMuaGVhZGVyLFxuICAgICAgICBpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgZm9vdGVyID0gX3Byb3BzLmZvb3RlcixcbiAgICAgICAgcHJvcHNFeHBhbmRlZCA9IF9wcm9wcy5leHBhbmRlZCxcbiAgICAgICAgZm9vdGVyU3R5bGUgPSBfcHJvcHMuZm9vdGVyU3R5bGUsXG4gICAgICAgIGhlYWRlclN0eWxlID0gX3Byb3BzLmhlYWRlclN0eWxlLFxuICAgICAgICBoZWFkZXJSb2xlID0gX3Byb3BzLmhlYWRlclJvbGUsXG4gICAgICAgIHBhbmVsUm9sZSA9IF9wcm9wcy5wYW5lbFJvbGUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbG9ycyA9IF9wcm9wcy5jb2xvcnMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBvbkVudGVyID0gX3Byb3BzLm9uRW50ZXIsXG4gICAgICAgIG9uRW50ZXJpbmcgPSBfcHJvcHMub25FbnRlcmluZyxcbiAgICAgICAgb25FbnRlcmVkID0gX3Byb3BzLm9uRW50ZXJlZCxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb25FeGl0ID0gX3Byb3BzLm9uRXhpdCxcbiAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgIG9uRXhpdGluZyA9IF9wcm9wcy5vbkV4aXRpbmcsXG4gICAgICAgIG9uRXhpdGVkID0gX3Byb3BzLm9uRXhpdGVkLFxuICAgICAgICBkZWZhdWx0RXhwYW5kZWQgPSBfcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgICBldmVudEtleSA9IF9wcm9wcy5ldmVudEtleSxcbiAgICAgICAgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3QsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjb2xsYXBzaWJsZScsICdoZWFkZXInLCAnaWQnLCAnZm9vdGVyJywgJ2V4cGFuZGVkJywgJ2Zvb3RlclN0eWxlJywgJ2hlYWRlclN0eWxlJywgJ2hlYWRlclJvbGUnLCAncGFuZWxSb2xlJywgJ2NsYXNzTmFtZScsICdjb2xvcnMnLCAnY2hpbGRyZW4nLCAnb25FbnRlcicsICdvbkVudGVyaW5nJywgJ29uRW50ZXJlZCcsICdjbHNQcmVmaXgnLCAnb25FeGl0JywgJ3N0eWxlJywgJ29uRXhpdGluZycsICdvbkV4aXRlZCcsICdkZWZhdWx0RXhwYW5kZWQnLCAnZXZlbnRLZXknLCAnb25TZWxlY3QnXSk7XG5cbiAgICB2YXIgZXhwYW5kZWQgPSBwcm9wc0V4cGFuZGVkICE9IG51bGwgPyBwcm9wc0V4cGFuZGVkIDogdGhpcy5zdGF0ZS5leHBhbmRlZDtcblxuICAgIHZhciBjbGFzc2VzID0ge307XG4gICAgY2xhc3Nlc1snJyArIGNsc1ByZWZpeF0gPSB0cnVlO1xuICAgIGNsYXNzZXNbY2xzUHJlZml4ICsgJy0nICsgY29sb3JzXSA9IHRydWU7XG5cbiAgICB2YXIgaGVhZGVyQ2xhc3MgPSBfZGVmaW5lUHJvcGVydHkoe30sIGNsc1ByZWZpeCArICctaGVhZGluZycsIHRydWUpO1xuXG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIGNsYXNzZXMpLFxuICAgICAgICBpZDogY29sbGFwc2libGUgPyBudWxsIDogaWRcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyICYmIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGhlYWRlckNsYXNzKSwgc3R5bGU6IGhlYWRlclN0eWxlLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrVGl0bGUgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkZXIoY29sbGFwc2libGUsIGhlYWRlciwgaWQsIGhlYWRlclJvbGUsIGV4cGFuZGVkLCBjbHNQcmVmaXgpXG4gICAgICApLFxuICAgICAgY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlQm9keShpZCwgZXhwYW5kZWQsIHBhbmVsUm9sZSwgY2hpbGRyZW4sIGNsc1ByZWZpeCwgeyBvbkVudGVyOiBvbkVudGVyLCBvbkVudGVyaW5nOiBvbkVudGVyaW5nLCBvbkVudGVyZWQ6IG9uRW50ZXJlZCwgb25FeGl0OiBvbkV4aXQsIG9uRXhpdGluZzogb25FeGl0aW5nLCBvbkV4aXRlZDogb25FeGl0ZWQgfSkgOiB0aGlzLnJlbmRlckJvZHkoY2hpbGRyZW4sIGNsc1ByZWZpeCksXG4gICAgICBmb290ZXIgJiYgX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbHNQcmVmaXggKyAnLWZvb3RlcicsIHN0eWxlOiBmb290ZXJTdHlsZSB9LFxuICAgICAgICBmb290ZXJcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQYW5lbDtcbn0oX3JlYWN0MltcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtcblxuUGFuZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGFuZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBhbmVsO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS1wYW5lbC9idWlsZC9QYW5lbC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkZhZGUgPSBleHBvcnRzLkNvbGxhcHNlID0gZXhwb3J0cy5UcmFuc2l0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX1RyYW5zaXRpb24yID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG5cbnZhciBfVHJhbnNpdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uMik7XG5cbnZhciBfQ29sbGFwc2UyID0gcmVxdWlyZSgnLi9Db2xsYXBzZScpO1xuXG52YXIgX0NvbGxhcHNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbGxhcHNlMik7XG5cbnZhciBfRmFkZTIgPSByZXF1aXJlKCcuL0ZhZGUnKTtcblxudmFyIF9GYWRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZhZGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHMuVHJhbnNpdGlvbiA9IF9UcmFuc2l0aW9uM1tcImRlZmF1bHRcIl07XG5leHBvcnRzLkNvbGxhcHNlID0gX0NvbGxhcHNlM1tcImRlZmF1bHRcIl07XG5leHBvcnRzLkZhZGUgPSBfRmFkZTNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCdkb20taGVscGVycy90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9wcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BlcnRpZXMpO1xuXG52YXIgX29uID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvZXZlbnRzL29uJyk7XG5cbnZhciBfb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb24pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSBfcHJvcGVydGllczJbXCJkZWZhdWx0XCJdLmVuZDtcblxuLy/orr7nva7nirbmgIHnoIFcbnZhciBVTk1PVU5URUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IDA7XG52YXIgRVhJVEVEID0gZXhwb3J0cy5FWElURUQgPSAxO1xudmFyIEVOVEVSSU5HID0gZXhwb3J0cy5FTlRFUklORyA9IDI7XG52YXIgRU5URVJFRCA9IGV4cG9ydHMuRU5URVJFRCA9IDM7XG52YXIgRVhJVElORyA9IGV4cG9ydHMuRVhJVElORyA9IDQ7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiDmmK/lkKbop6blj5HliqjnlLtcbiAgICovXG4gIFwiaW5cIjogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiDkuI3mmL7npLrnmoTml7blgJnmmK/lkKbnp7vpmaTnu4Tku7ZcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICog5aaC5p6c6K6+572u5Li66buY6K6k5pi+56S677yM5oyC6L295pe25pi+56S65Yqo55S7XG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIOiuvue9rui2heaXtuaXtumXtO+8jOmYsuatouWHuueOsOmXrumimO+8jOWPr+iuvue9ruS4uj495Yqo55S75pe26Ze0XG4gICAqL1xuICB0aW1lb3V0OiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICog6YCA5Ye657uE5Lu25pe25re75Yqg55qEY2xhc3NcbiAgICovXG4gIGV4aXRlZENsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDpgIDlh7rnu4Tku7bkuK3mt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZXhpdGluZ0NsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvlkI7mt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZW50ZXJlZENsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvml7bmt7vliqDnmoRjbGFzc1xuICAgKi9cbiAgZW50ZXJpbmdDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiDov5vlhaXliqjnlLvlvIDlp4vml7bnmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRW50ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOi/m+WFpeWKqOeUu+S4reeahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FbnRlcmluZzogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6L+b5YWl5Yqo55S75ZCO55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkVudGVyZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIOmAgOWHuuWKqOeUu+W8gOWni+aXtueahOmSqeWtkOWHveaVsFxuICAgKi9cbiAgb25FeGl0OiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiDpgIDlh7rliqjnlLvkuK3nmoTpkqnlrZDlh73mlbBcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICog6YCA5Ye65Yqo55S75ZCO55qE6ZKp5a2Q5Ye95pWwXG4gICAqL1xuICBvbkV4aXRlZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuICB0aW1lb3V0OiA1MDAwLFxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblxuLyoqXG4gKiDliqjnlLvnu4Tku7ZcbiAqL1xuXG52YXIgVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUcmFuc2l0aW9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYW5zaXRpb24pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICB2YXIgaW5pdGlhbFN0YXR1cyA9IHZvaWQgMDtcbiAgICBpZiAocHJvcHNbXCJpblwiXSkge1xuICAgICAgLy8g5ZyoY29tcG9uZW50ZGlkbW91bnTml7blvIDlp4vmiafooYzliqjnlLtcbiAgICAgIGluaXRpYWxTdGF0dXMgPSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyID8gRVhJVEVEIDogRU5URVJFRDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbFN0YXR1cyA9IHByb3BzLnVubW91bnRPbkV4aXQgPyBVTk1PVU5URUQgOiBFWElURUQ7XG4gICAgfVxuICAgIF90aGlzLnN0YXRlID0geyBzdGF0dXM6IGluaXRpYWxTdGF0dXMgfTtcblxuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyICYmIHRoaXMucHJvcHNbXCJpblwiXSkge1xuICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHNbXCJpblwiXSAmJiB0aGlzLnByb3BzLnVubW91bnRPbkV4aXQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICAgIC8vIOWcqGNvbXBvbmVudERpZFVwZGF0ZeaJp+ihjOWKqOeUuy5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogRVhJVEVEIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICAvLyDlvZPkvb/nlKh1bm1vdW50T25FeGl05pe277yMZXhpdGVk5Li6ZXhpdGluZ+WSjHVubW9udOeahOi/h+a4oeeKtuaAgVxuICAgICAgaWYgKHRoaXMucHJvcHNbXCJpblwiXSkge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcih0aGlzLnByb3BzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFVOTU9VTlRFRCB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOehruS/neWPquWTjeW6lHByb3Dlj5jljJZcbiAgICBpZiAodGhpcy5fbmVlZHNVcGRhdGUpIHtcbiAgICAgIHRoaXMuX25lZWRzVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzW1wiaW5cIl0pIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRVhJVElORykge1xuICAgICAgICAgIHRoaXMucGVyZm9ybUVudGVyKHRoaXMucHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIodGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YW25LuW77yM5b2T5oiR5Lus5bey57uP6L6T5YWl5oiW6L6T5Ye6XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaIkeS7rOW3sue7j+i+k+WFpeaIlui+k+WHuuWujOaIkFxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICAgIHZhciBub2RlID0gX3JlYWN0RG9tMltcImRlZmF1bHRcIl0uZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAvLyDov5nph4zmjqXmlLbmlrBwcm9wc1xuICAgIHByb3BzLm9uRW50ZXIobm9kZSk7XG5cbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7IHN0YXR1czogRU5URVJJTkcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFTlRFUkVEIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gICAgdmFyIG5vZGUgPSBfcmVhY3REb20yW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIHByb3BzLm9uRXhpdChub2RlKTtcblxuICAgIHRoaXMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElUSU5HIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHsgc3RhdHVzOiBFWElURUQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyDnoa7kv53lnKjnu4Tku7bplIDmr4HlkI7mjILotbfnmoRzZXRTdGF0Zeiiq+a2iOmZpFxuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjaykpO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIFRyYW5zaXRpb24ucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgKDAsIF9vbjJbXCJkZWZhdWx0XCJdKShub2RlLCB0cmFuc2l0aW9uRW5kRXZlbnQsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRoaXMucHJvcHMudGltZW91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuICAgIHZhciBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lO1xuXG4gICAgdmFyIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIE9iamVjdC5rZXlzKFRyYW5zaXRpb24ucHJvcFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBkZWxldGUgY2hpbGRQcm9wc1trZXldO1xuICAgIH0pO1xuXG4gICAgdmFyIHRyYW5zaXRpb25DbGFzc05hbWUgPSB2b2lkIDA7XG4gICAgaWYgKHN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5leGl0ZWRDbGFzc05hbWU7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICB0cmFuc2l0aW9uQ2xhc3NOYW1lID0gdGhpcy5wcm9wcy5lbnRlcmluZ0NsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZW50ZXJlZENsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gRVhJVElORykge1xuICAgICAgdHJhbnNpdGlvbkNsYXNzTmFtZSA9IHRoaXMucHJvcHMuZXhpdGluZ0NsYXNzTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyW1wiZGVmYXVsdFwiXS5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY2xvbmVFbGVtZW50KGNoaWxkLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUsIHRyYW5zaXRpb25DbGFzc05hbWUpXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRyYW5zaXRpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlZS10cmFuc2l0aW9uL2J1aWxkL1RyYW5zaXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFuaW1hdGlvbkVuZCA9IGV4cG9ydHMuYW5pbWF0aW9uRGVsYXkgPSBleHBvcnRzLmFuaW1hdGlvblRpbWluZyA9IGV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBleHBvcnRzLmFuaW1hdGlvbk5hbWUgPSBleHBvcnRzLnRyYW5zaXRpb25FbmQgPSBleHBvcnRzLnRyYW5zaXRpb25EdXJhdGlvbiA9IGV4cG9ydHMudHJhbnNpdGlvbkRlbGF5ID0gZXhwb3J0cy50cmFuc2l0aW9uVGltaW5nID0gZXhwb3J0cy50cmFuc2l0aW9uUHJvcGVydHkgPSBleHBvcnRzLnRyYW5zZm9ybSA9IHVuZGVmaW5lZDtcblxudmFyIF9pbkRPTSA9IHJlcXVpcmUoJy4uL3V0aWwvaW5ET00nKTtcblxudmFyIF9pbkRPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbkRPTSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0cmFuc2Zvcm0gPSAndHJhbnNmb3JtJztcbnZhciBwcmVmaXggPSB2b2lkIDAsXG4gICAgdHJhbnNpdGlvbkVuZCA9IHZvaWQgMCxcbiAgICBhbmltYXRpb25FbmQgPSB2b2lkIDA7XG52YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHZvaWQgMCxcbiAgICB0cmFuc2l0aW9uVGltaW5nID0gdm9pZCAwLFxuICAgIHRyYW5zaXRpb25EZWxheSA9IHZvaWQgMDtcbnZhciBhbmltYXRpb25OYW1lID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gdm9pZCAwLFxuICAgIGFuaW1hdGlvblRpbWluZyA9IHZvaWQgMCxcbiAgICBhbmltYXRpb25EZWxheSA9IHZvaWQgMDtcblxuaWYgKF9pbkRPTTIuZGVmYXVsdCkge1xuICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wZXJ0ID0gZ2V0VHJhbnNpdGlvblByb3BlcnRpZXMoKTtcblxuICBwcmVmaXggPSBfZ2V0VHJhbnNpdGlvblByb3BlcnQucHJlZml4O1xuICBleHBvcnRzLnRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LnRyYW5zaXRpb25FbmQ7XG4gIGV4cG9ydHMuYW5pbWF0aW9uRW5kID0gYW5pbWF0aW9uRW5kID0gX2dldFRyYW5zaXRpb25Qcm9wZXJ0LmFuaW1hdGlvbkVuZDtcblxuXG4gIGV4cG9ydHMudHJhbnNmb3JtID0gdHJhbnNmb3JtID0gcHJlZml4ICsgJy0nICsgdHJhbnNmb3JtO1xuICBleHBvcnRzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IHByZWZpeCArICctdHJhbnNpdGlvbi1wcm9wZXJ0eSc7XG4gIGV4cG9ydHMudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLWR1cmF0aW9uJztcbiAgZXhwb3J0cy50cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkgPSBwcmVmaXggKyAnLXRyYW5zaXRpb24tZGVsYXknO1xuICBleHBvcnRzLnRyYW5zaXRpb25UaW1pbmcgPSB0cmFuc2l0aW9uVGltaW5nID0gcHJlZml4ICsgJy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbic7XG5cbiAgZXhwb3J0cy5hbmltYXRpb25OYW1lID0gYW5pbWF0aW9uTmFtZSA9IHByZWZpeCArICctYW5pbWF0aW9uLW5hbWUnO1xuICBleHBvcnRzLmFuaW1hdGlvbkR1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb24gPSBwcmVmaXggKyAnLWFuaW1hdGlvbi1kdXJhdGlvbic7XG4gIGV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gYW5pbWF0aW9uVGltaW5nID0gcHJlZml4ICsgJy1hbmltYXRpb24tZGVsYXknO1xuICBleHBvcnRzLmFuaW1hdGlvbkRlbGF5ID0gYW5pbWF0aW9uRGVsYXkgPSBwcmVmaXggKyAnLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nO1xufVxuXG5leHBvcnRzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbmV4cG9ydHMudHJhbnNpdGlvblByb3BlcnR5ID0gdHJhbnNpdGlvblByb3BlcnR5O1xuZXhwb3J0cy50cmFuc2l0aW9uVGltaW5nID0gdHJhbnNpdGlvblRpbWluZztcbmV4cG9ydHMudHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5O1xuZXhwb3J0cy50cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG5leHBvcnRzLnRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kO1xuZXhwb3J0cy5hbmltYXRpb25OYW1lID0gYW5pbWF0aW9uTmFtZTtcbmV4cG9ydHMuYW5pbWF0aW9uRHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbjtcbmV4cG9ydHMuYW5pbWF0aW9uVGltaW5nID0gYW5pbWF0aW9uVGltaW5nO1xuZXhwb3J0cy5hbmltYXRpb25EZWxheSA9IGFuaW1hdGlvbkRlbGF5O1xuZXhwb3J0cy5hbmltYXRpb25FbmQgPSBhbmltYXRpb25FbmQ7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICBlbmQ6IHRyYW5zaXRpb25FbmQsXG4gIHByb3BlcnR5OiB0cmFuc2l0aW9uUHJvcGVydHksXG4gIHRpbWluZzogdHJhbnNpdGlvblRpbWluZyxcbiAgZGVsYXk6IHRyYW5zaXRpb25EZWxheSxcbiAgZHVyYXRpb246IHRyYW5zaXRpb25EdXJhdGlvblxufTtcblxuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uUHJvcGVydGllcygpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG5cbiAgdmFyIHZlbmRvck1hcCA9IHtcbiAgICBPOiBmdW5jdGlvbiBPKGUpIHtcbiAgICAgIHJldHVybiAnbycgKyBlLnRvTG93ZXJDYXNlKCk7XG4gICAgfSxcbiAgICBNb3o6IGZ1bmN0aW9uIE1veihlKSB7XG4gICAgICByZXR1cm4gJ21veicgKyBlO1xuICAgIH0sXG4gICAgV2Via2l0OiBmdW5jdGlvbiBXZWJraXQoZSkge1xuICAgICAgcmV0dXJuICd3ZWJraXQnICsgZTtcbiAgICB9LFxuICAgIG1zOiBmdW5jdGlvbiBtcyhlKSB7XG4gICAgICByZXR1cm4gJ01TJyArIGU7XG4gICAgfVxuICB9O1xuXG4gIHZhciB2ZW5kb3JzID0gT2JqZWN0LmtleXModmVuZG9yTWFwKTtcblxuICB2YXIgdHJhbnNpdGlvbkVuZCA9IHZvaWQgMCxcbiAgICAgIGFuaW1hdGlvbkVuZCA9IHZvaWQgMDtcbiAgdmFyIHByZWZpeCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2ZW5kb3IgPSB2ZW5kb3JzW2ldO1xuXG4gICAgaWYgKHZlbmRvciArICdUcmFuc2l0aW9uUHJvcGVydHknIGluIHN0eWxlKSB7XG4gICAgICBwcmVmaXggPSAnLScgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRyYW5zaXRpb25FbmQgPSB2ZW5kb3JNYXBbdmVuZG9yXSgnVHJhbnNpdGlvbkVuZCcpO1xuICAgICAgYW5pbWF0aW9uRW5kID0gdmVuZG9yTWFwW3ZlbmRvcl0oJ0FuaW1hdGlvbkVuZCcpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF0cmFuc2l0aW9uRW5kICYmICd0cmFuc2l0aW9uUHJvcGVydHknIGluIHN0eWxlKSB0cmFuc2l0aW9uRW5kID0gJ3RyYW5zaXRpb25lbmQnO1xuXG4gIGlmICghYW5pbWF0aW9uRW5kICYmICdhbmltYXRpb25OYW1lJyBpbiBzdHlsZSkgdHJhbnNpdGlvbkVuZCA9ICdhbmltYXRpb25lbmQnO1xuXG4gIHN0eWxlID0gbnVsbDtcblxuICByZXR1cm4geyBhbmltYXRpb25FbmQ6IGFuaW1hdGlvbkVuZCwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCwgcHJlZml4OiBwcmVmaXggfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdHJhbnNpdGlvbi9wcm9wZXJ0aWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvaW5ET00uanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9pbkRPTSA9IHJlcXVpcmUoJy4uL3V0aWwvaW5ET00nKTtcblxudmFyIF9pbkRPTTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbkRPTSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBvbiA9IGZ1bmN0aW9uIG9uKCkge307XG5pZiAoX2luRE9NMi5kZWZhdWx0KSB7XG4gIG9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gICAgICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgY2FwdHVyZSB8fCBmYWxzZSk7XG4gICAgfTtlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkgcmV0dXJuIGZ1bmN0aW9uIChub2RlLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS50YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgIGUuY3VycmVudFRhcmdldCA9IG5vZGU7XG4gICAgICAgIGhhbmRsZXIuY2FsbChub2RlLCBlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0oKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvZXZlbnRzL29uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX3N0eWxlID0gcmVxdWlyZSgnZG9tLWhlbHBlcnMvc3R5bGUnKTtcblxudmFyIF9zdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9UcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9UcmFuc2l0aW9uJyk7XG5cbnZhciBfVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uKTtcblxudmFyIF9jYXBpdGFsaXplID0gcmVxdWlyZSgnLi91dGlsL2NhcGl0YWxpemUnKTtcblxudmFyIF9jYXBpdGFsaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemUpO1xuXG52YXIgX3RpbnBlckJlZUNvcmUgPSByZXF1aXJlKCd0aW5wZXItYmVlLWNvcmUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBNQVJHSU5TID0ge1xuICBoZWlnaHQ6IFsnbWFyZ2luVG9wJywgJ21hcmdpbkJvdHRvbSddLFxuICB3aWR0aDogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J11cbn07XG5cbi8vIHJlYWRpbmcgYSBkaW1lbnNpb24gcHJvcCB3aWxsIGNhdXNlIHRoZSBicm93c2VyIHRvIHJlY2FsY3VsYXRlLFxuLy8gd2hpY2ggd2lsbCBsZXQgb3VyIGFuaW1hdGlvbnMgd29ya1xuZnVuY3Rpb24gdHJpZ2dlckJyb3dzZXJSZWZsb3cobm9kZSkge1xuICBub2RlLm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbn1cblxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uVmFsdWUoZGltZW5zaW9uLCBlbGVtKSB7XG4gIHZhciB2YWx1ZSA9IGVsZW1bJ29mZnNldCcgKyAoMCwgX2NhcGl0YWxpemUyW1wiZGVmYXVsdFwiXSkoZGltZW5zaW9uKV07XG4gIHZhciBtYXJnaW5zID0gTUFSR0lOU1tkaW1lbnNpb25dO1xuXG4gIHJldHVybiB2YWx1ZSArIHBhcnNlSW50KCgwLCBfc3R5bGUyW1wiZGVmYXVsdFwiXSkoZWxlbSwgbWFyZ2luc1swXSksIDEwKSArIHBhcnNlSW50KCgwLCBfc3R5bGUyW1wiZGVmYXVsdFwiXSkoZWxlbSwgbWFyZ2luc1sxXSksIDEwKTtcbn1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGV4cGFuZCBvciBjb2xsYXBzZSBhbmltYXRpb25cbiAgICovXG4gIFwiaW5cIjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFVubW91bnQgdGhlIGNvbXBvbmVudCAocmVtb3ZlIGl0IGZyb20gdGhlIERPTSkgd2hlbiBpdCBpcyBjb2xsYXBzZWRcbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBSdW4gdGhlIGV4cGFuZCBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XG4gICAqIHNob3duXG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGNvbGxhcHNlIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHMsIHRvIGVuc3VyZSB0aGF0XG4gICAqIGZpbmlzaGluZyBjYWxsYmFja3MgYXJlIGZpcmVkIGV2ZW4gaWYgdGhlIG9yaWdpbmFsIGJyb3dzZXIgdHJhbnNpdGlvbiBlbmRcbiAgICogZXZlbnRzIGFyZSBjYW5jZWxlZFxuICAgKi9cbiAgdGltZW91dDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgZXhwYW5kc1xuICAgKi9cbiAgb25FbnRlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBleHBhbmRcbiAgICovXG4gIG9uRW50ZXJpbmc6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZXhwYW5kZWRcbiAgICovXG4gIG9uRW50ZXJlZDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBjb2xsYXBzZXNcbiAgICovXG4gIG9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBjb2xsYXBzZVxuICAgKi9cbiAgb25FeGl0aW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGNvbGxhcHNlZFxuICAgKi9cbiAgb25FeGl0ZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgZGltZW5zaW9uIHVzZWQgd2hlbiBjb2xsYXBzaW5nLCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICogZGltZW5zaW9uXG4gICAqXG4gICAqIF9Ob3RlOiBCb290c3RyYXAgb25seSBwYXJ0aWFsbHkgc3VwcG9ydHMgJ3dpZHRoJyFcbiAgICogWW91IHdpbGwgbmVlZCB0byBzdXBwbHkgeW91ciBvd24gQ1NTIGFuaW1hdGlvbiBmb3IgdGhlIGAud2lkdGhgIENTUyBjbGFzcy5fXG4gICAqL1xuICBkaW1lbnNpb246IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5vbmVPZihbJ2hlaWdodCcsICd3aWR0aCddKSwgX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBoZWlnaHQgb3Igd2lkdGggb2YgdGhlIGFuaW1hdGluZyBET00gbm9kZVxuICAgKlxuICAgKiBBbGxvd3MgZm9yIHByb3ZpZGluZyBzb21lIGN1c3RvbSBsb2dpYyBmb3IgaG93IG11Y2ggdGhlIENvbGxhcHNlIGNvbXBvbmVudFxuICAgKiBzaG91bGQgYW5pbWF0ZSBpbiBpdHMgc3BlY2lmaWVkIGRpbWVuc2lvbi4gQ2FsbGVkIHdpdGggdGhlIGN1cnJlbnRcbiAgICogZGltZW5zaW9uIHByb3AgdmFsdWUgYW5kIHRoZSBET00gbm9kZS5cbiAgICovXG4gIGdldERpbWVuc2lvblZhbHVlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQVJJQSByb2xlIG9mIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgICovXG4gIHJvbGU6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIFwiaW5cIjogZmFsc2UsXG4gIHRpbWVvdXQ6IDMwMCxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuXG4gIGRpbWVuc2lvbjogJ2hlaWdodCcsXG4gIGdldERpbWVuc2lvblZhbHVlOiBnZXREaW1lbnNpb25WYWx1ZVxufTtcblxudmFyIENvbGxhcHNlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbGxhcHNlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2xsYXBzZShwcm9wcywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xsYXBzZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyID0gX3RoaXMuaGFuZGxlRW50ZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuaGFuZGxlRW50ZXJpbmcgPSBfdGhpcy5oYW5kbGVFbnRlcmluZy5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFbnRlcmVkID0gX3RoaXMuaGFuZGxlRW50ZXJlZC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFeGl0ID0gX3RoaXMuaGFuZGxlRXhpdC5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5oYW5kbGVFeGl0aW5nID0gX3RoaXMuaGFuZGxlRXhpdGluZy5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKiAtLSBFeHBhbmRpbmcgLS0gKi9cblxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFbnRlciA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gJzAnO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyaW5nKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gdGhpcy5fZ2V0U2Nyb2xsRGltZW5zaW9uVmFsdWUoZWxlbSwgZGltZW5zaW9uKTtcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyZWQoZWxlbSkge1xuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLl9kaW1lbnNpb24oKTtcbiAgICBlbGVtLnN0eWxlW2RpbWVuc2lvbl0gPSBudWxsO1xuICB9O1xuXG4gIC8qIC0tIENvbGxhcHNpbmcgLS0gKi9cblxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gaGFuZGxlRXhpdChlbGVtKSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuX2RpbWVuc2lvbigpO1xuICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHRoaXMucHJvcHMuZ2V0RGltZW5zaW9uVmFsdWUoZGltZW5zaW9uLCBlbGVtKSArICdweCc7XG4gICAgdHJpZ2dlckJyb3dzZXJSZWZsb3coZWxlbSk7XG4gIH07XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiBoYW5kbGVFeGl0aW5nKGVsZW0pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gdGhpcy5fZGltZW5zaW9uKCk7XG4gICAgZWxlbS5zdHlsZVtkaW1lbnNpb25dID0gJzAnO1xuICB9O1xuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5fZGltZW5zaW9uID0gZnVuY3Rpb24gX2RpbWVuc2lvbigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucHJvcHMuZGltZW5zaW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5wcm9wcy5kaW1lbnNpb24oKSA6IHRoaXMucHJvcHMuZGltZW5zaW9uO1xuICB9O1xuXG4gIC8vIGZvciB0ZXN0aW5nXG5cblxuICBDb2xsYXBzZS5wcm90b3R5cGUuX2dldFNjcm9sbERpbWVuc2lvblZhbHVlID0gZnVuY3Rpb24gX2dldFNjcm9sbERpbWVuc2lvblZhbHVlKGVsZW0sIGRpbWVuc2lvbikge1xuICAgIHJldHVybiBlbGVtWydzY3JvbGwnICsgKDAsIF9jYXBpdGFsaXplMltcImRlZmF1bHRcIl0pKGRpbWVuc2lvbildICsgJ3B4JztcbiAgfTtcblxuICBDb2xsYXBzZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvbkVudGVyID0gX3Byb3BzLm9uRW50ZXI7XG4gICAgdmFyIG9uRW50ZXJpbmcgPSBfcHJvcHMub25FbnRlcmluZztcbiAgICB2YXIgb25FbnRlcmVkID0gX3Byb3BzLm9uRW50ZXJlZDtcbiAgICB2YXIgb25FeGl0ID0gX3Byb3BzLm9uRXhpdDtcbiAgICB2YXIgb25FeGl0aW5nID0gX3Byb3BzLm9uRXhpdGluZztcbiAgICB2YXIgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZTtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb25FbnRlcicsICdvbkVudGVyaW5nJywgJ29uRW50ZXJlZCcsICdvbkV4aXQnLCAnb25FeGl0aW5nJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5kaW1lbnNpb247XG4gICAgZGVsZXRlIHByb3BzLmdldERpbWVuc2lvblZhbHVlO1xuXG4gICAgdmFyIGhhbmRsZUVudGVyID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlciwgb25FbnRlcik7XG4gICAgdmFyIGhhbmRsZUVudGVyaW5nID0gKDAsIF90aW5wZXJCZWVDb3JlLmNyZWF0ZUNoYWluZWRGdW5jdGlvbikodGhpcy5oYW5kbGVFbnRlcmluZywgb25FbnRlcmluZyk7XG4gICAgdmFyIGhhbmRsZUVudGVyZWQgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUVudGVyZWQsIG9uRW50ZXJlZCk7XG4gICAgdmFyIGhhbmRsZUV4aXQgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUV4aXQsIG9uRXhpdCk7XG4gICAgdmFyIGhhbmRsZUV4aXRpbmcgPSAoMCwgX3RpbnBlckJlZUNvcmUuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKSh0aGlzLmhhbmRsZUV4aXRpbmcsIG9uRXhpdGluZyk7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLl9kaW1lbnNpb24oKSA9PT0gJ3dpZHRoJ1xuICAgIH07XG5cbiAgICByZXR1cm4gX3JlYWN0MltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbjJbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogcHJvcHMucm9sZSA/IHByb3BzW1wiaW5cIl0gOiBudWxsLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCBjbGFzc2VzKSxcbiAgICAgIGV4aXRlZENsYXNzTmFtZTogJ2NvbGxhcHNlJyxcbiAgICAgIGV4aXRpbmdDbGFzc05hbWU6ICdjb2xsYXBzaW5nJyxcbiAgICAgIGVudGVyZWRDbGFzc05hbWU6ICdjb2xsYXBzZSBpbicsXG4gICAgICBlbnRlcmluZ0NsYXNzTmFtZTogJ2NvbGxhcHNpbmcnLFxuICAgICAgb25FbnRlcjogaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogaGFuZGxlRW50ZXJlZCxcbiAgICAgIG9uRXhpdDogaGFuZGxlRXhpdCxcbiAgICAgIG9uRXhpdGluZzogaGFuZGxlRXhpdGluZ1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ29sbGFwc2U7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cbkNvbGxhcHNlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNvbGxhcHNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2xsYXBzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC9Db2xsYXBzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3R5bGU7XG5cbnZhciBfY2FtZWxpemVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2FtZWxpemVTdHlsZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZSk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGUgPSByZXF1aXJlKCcuLi91dGlsL2h5cGhlbmF0ZVN0eWxlJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHlwaGVuYXRlU3R5bGUpO1xuXG52YXIgX2dldENvbXB1dGVkU3R5bGUyID0gcmVxdWlyZSgnLi9nZXRDb21wdXRlZFN0eWxlJyk7XG5cbnZhciBfZ2V0Q29tcHV0ZWRTdHlsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRDb21wdXRlZFN0eWxlMik7XG5cbnZhciBfcmVtb3ZlU3R5bGUgPSByZXF1aXJlKCcuL3JlbW92ZVN0eWxlJyk7XG5cbnZhciBfcmVtb3ZlU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVtb3ZlU3R5bGUpO1xuXG52YXIgX3Byb3BlcnRpZXMgPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uL3Byb3BlcnRpZXMnKTtcblxudmFyIF9pc1RyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0nKTtcblxudmFyIF9pc1RyYW5zZm9ybTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1RyYW5zZm9ybSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICB2YXIgY3NzID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1zID0gJyc7XG4gIHZhciBwcm9wcyA9IHByb3BlcnR5O1xuXG4gIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBub2RlLnN0eWxlWygwLCBfY2FtZWxpemVTdHlsZTIuZGVmYXVsdCkocHJvcGVydHkpXSB8fCAoMCwgX2dldENvbXB1dGVkU3R5bGUzLmRlZmF1bHQpKG5vZGUpLmdldFByb3BlcnR5VmFsdWUoKDAsIF9oeXBoZW5hdGVTdHlsZTIuZGVmYXVsdCkocHJvcGVydHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHByb3BzID0ge30pW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICAgICgwLCBfcmVtb3ZlU3R5bGUyLmRlZmF1bHQpKG5vZGUsICgwLCBfaHlwaGVuYXRlU3R5bGUyLmRlZmF1bHQpKGtleSkpO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc1RyYW5zZm9ybTIuZGVmYXVsdCkoa2V5KSkge1xuICAgICAgdHJhbnNmb3JtcyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzcyArPSAoMCwgX2h5cGhlbmF0ZVN0eWxlMi5kZWZhdWx0KShrZXkpICsgJzogJyArIHZhbHVlICsgJzsnO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICBjc3MgKz0gX3Byb3BlcnRpZXMudHJhbnNmb3JtICsgJzogJyArIHRyYW5zZm9ybXMgKyAnOyc7XG4gIH1cblxuICBub2RlLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgY3NzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3N0eWxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbGl6ZVN0eWxlTmFtZTtcblxudmFyIF9jYW1lbGl6ZSA9IHJlcXVpcmUoJy4vY2FtZWxpemUnKTtcblxudmFyIF9jYW1lbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbGl6ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvY2FtZWxpemVTdHlsZU5hbWUuanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gKDAsIF9jYW1lbGl6ZTIuZGVmYXVsdCkoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbGl6ZTtcbnZhciBySHlwaGVuID0gLy0oLikvZztcblxuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShySHlwaGVuLCBmdW5jdGlvbiAoXywgY2hyKSB7XG4gICAgcmV0dXJuIGNoci50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3V0aWwvY2FtZWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcblxudmFyIF9oeXBoZW5hdGUgPSByZXF1aXJlKCcuL2h5cGhlbmF0ZScpO1xuXG52YXIgX2h5cGhlbmF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oeXBoZW5hdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vOyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIENvcHlyaWdodCAyMDEzLTIwMTQsIEZhY2Vib29rLCBJbmMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvMmFlYjhhMmE2YmViMDA2MTdhNDIxN2Y3ZjgyODQ5MjRmYTJhZDgxOS9zcmMvdmVuZG9yL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gKDAsIF9oeXBoZW5hdGUyLmRlZmF1bHQpKHN0cmluZykucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWhlbHBlcnMvdXRpbC9oeXBoZW5hdGVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHlwaGVuYXRlO1xuXG52YXIgclVwcGVyID0gLyhbQS1aXSkvZztcblxuZnVuY3Rpb24gaHlwaGVuYXRlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoclVwcGVyLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy91dGlsL2h5cGhlbmF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2dldENvbXB1dGVkU3R5bGU7XG5cbnZhciBfY2FtZWxpemVTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2FtZWxpemVTdHlsZScpO1xuXG52YXIgX2NhbWVsaXplU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FtZWxpemVTdHlsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBycG9zaXRpb24gPSAvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87XG52YXIgcm51bW5vbnB4ID0gL14oWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpKSg/IXB4KVthLXolXSskL2k7XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKG5vZGUpIHtcbiAgaWYgKCFub2RlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdObyBFbGVtZW50IHBhc3NlZCB0byBgZ2V0Q29tcHV0ZWRTdHlsZSgpYCcpO1xuICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuXG4gIHJldHVybiAnZGVmYXVsdFZpZXcnIGluIGRvYyA/IGRvYy5kZWZhdWx0Vmlldy5vcGVuZXIgPyBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKSA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpIDoge1xuICAgIC8vaWUgOCBcIm1hZ2ljXCIgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvYmxvYi8xLjExLXN0YWJsZS9zcmMvY3NzL2N1ckNTUy5qcyNMNzJcbiAgICBnZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHByb3ApIHtcbiAgICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG5cbiAgICAgIHByb3AgPSAoMCwgX2NhbWVsaXplU3R5bGUyLmRlZmF1bHQpKHByb3ApO1xuXG4gICAgICBpZiAocHJvcCA9PSAnZmxvYXQnKSBwcm9wID0gJ3N0eWxlRmxvYXQnO1xuXG4gICAgICB2YXIgY3VycmVudCA9IG5vZGUuY3VycmVudFN0eWxlW3Byb3BdIHx8IG51bGw7XG5cbiAgICAgIGlmIChjdXJyZW50ID09IG51bGwgJiYgc3R5bGUgJiYgc3R5bGVbcHJvcF0pIGN1cnJlbnQgPSBzdHlsZVtwcm9wXTtcblxuICAgICAgaWYgKHJudW1ub25weC50ZXN0KGN1cnJlbnQpICYmICFycG9zaXRpb24udGVzdChwcm9wKSkge1xuICAgICAgICAvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG4gICAgICAgIHZhciBsZWZ0ID0gc3R5bGUubGVmdDtcbiAgICAgICAgdmFyIHJ1blN0eWxlID0gbm9kZS5ydW50aW1lU3R5bGU7XG4gICAgICAgIHZhciByc0xlZnQgPSBydW5TdHlsZSAmJiBydW5TdHlsZS5sZWZ0O1xuXG4gICAgICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICAgICAgaWYgKHJzTGVmdCkgcnVuU3R5bGUubGVmdCA9IG5vZGUuY3VycmVudFN0eWxlLmxlZnQ7XG5cbiAgICAgICAgc3R5bGUubGVmdCA9IHByb3AgPT09ICdmb250U2l6ZScgPyAnMWVtJyA6IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQgPSBzdHlsZS5waXhlbExlZnQgKyAncHgnO1xuXG4gICAgICAgIC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbiAgICAgICAgc3R5bGUubGVmdCA9IGxlZnQ7XG4gICAgICAgIGlmIChyc0xlZnQpIHJ1blN0eWxlLmxlZnQgPSByc0xlZnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9zdHlsZS9nZXRDb21wdXRlZFN0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZW1vdmVTdHlsZTtcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKG5vZGUsIGtleSkge1xuICByZXR1cm4gJ3JlbW92ZVByb3BlcnR5JyBpbiBub2RlLnN0eWxlID8gbm9kZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpIDogbm9kZS5zdHlsZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20taGVscGVycy9zdHlsZS9yZW1vdmVTdHlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1RyYW5zZm9ybTtcbnZhciBzdXBwb3J0ZWRUcmFuc2Zvcm1zID0gL14oKHRyYW5zbGF0ZXxyb3RhdGV8c2NhbGUpKFh8WXxafDNkKT98bWF0cml4KDNkKT98cGVyc3BlY3RpdmV8c2tldyhYfFkpPykkL2k7XG5cbmZ1bmN0aW9uIGlzVHJhbnNmb3JtKHByb3BlcnR5KSB7XG4gIHJldHVybiAhIShwcm9wZXJ0eSAmJiBzdXBwb3J0ZWRUcmFuc2Zvcm1zLnRlc3QocHJvcGVydHkpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2RvbS1oZWxwZXJzL3RyYW5zaXRpb24vaXNUcmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjYXBpdGFsaXplO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIFwiXCIgKyBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtdHJhbnNpdGlvbi9idWlsZC91dGlsL2NhcGl0YWxpemUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWxpZ24gPSBleHBvcnRzLnRvQXJyYXkgPSBleHBvcnRzLmNzc0FuaW1hdGlvbiA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuY29udGFpbnMgPSBleHBvcnRzLktleUNvZGUgPSBleHBvcnRzLmNyZWF0ZUNoYWluZWRGdW5jdGlvbiA9IGV4cG9ydHMuc3BsaXRDb21wb25lbnQgPSBleHBvcnRzLmlzUmVxdWlyZWRGb3JBMTF5ID0gZXhwb3J0cy5lbGVtZW50VHlwZSA9IGV4cG9ydHMuZGVwcmVjYXRlZCA9IGV4cG9ydHMuY29tcG9uZW50T3JFbGVtZW50ID0gZXhwb3J0cy5hbGwgPSB1bmRlZmluZWQ7XG5cbnZhciBfYWxsMiA9IHJlcXVpcmUoJy4vYWxsJyk7XG5cbnZhciBfYWxsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FsbDIpO1xuXG52YXIgX2NvbXBvbmVudE9yRWxlbWVudDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudE9yRWxlbWVudCcpO1xuXG52YXIgX2NvbXBvbmVudE9yRWxlbWVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRPckVsZW1lbnQyKTtcblxudmFyIF9kZXByZWNhdGVkMiA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlZCcpO1xuXG52YXIgX2RlcHJlY2F0ZWQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlZDIpO1xuXG52YXIgX2VsZW1lbnRUeXBlMiA9IHJlcXVpcmUoJy4vZWxlbWVudFR5cGUnKTtcblxudmFyIF9lbGVtZW50VHlwZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbGVtZW50VHlwZTIpO1xuXG52YXIgX2lzUmVxdWlyZWRGb3JBMTF5MiA9IHJlcXVpcmUoJy4vaXNSZXF1aXJlZEZvckExMXknKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1JlcXVpcmVkRm9yQTExeTIpO1xuXG52YXIgX3NwbGl0Q29tcG9uZW50MiA9IHJlcXVpcmUoJy4vc3BsaXRDb21wb25lbnQnKTtcblxudmFyIF9zcGxpdENvbXBvbmVudDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGxpdENvbXBvbmVudDIpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yKTtcblxudmFyIF9rZXlDb2RlID0gcmVxdWlyZSgnLi9rZXlDb2RlJyk7XG5cbnZhciBfa2V5Q29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXlDb2RlKTtcblxudmFyIF9jb250YWluczIgPSByZXF1aXJlKCcuL2NvbnRhaW5zJyk7XG5cbnZhciBfY29udGFpbnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbnMyKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMiA9IHJlcXVpcmUoJy4vYWRkRXZlbnRMaXN0ZW5lcicpO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkRXZlbnRMaXN0ZW5lcjIpO1xuXG52YXIgX2Nzc0FuaW1hdGlvbjIgPSByZXF1aXJlKCcuL2Nzc0FuaW1hdGlvbicpO1xuXG52YXIgX2Nzc0FuaW1hdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBbmltYXRpb24yKTtcblxudmFyIF90b0FycmF5MiA9IHJlcXVpcmUoJy4vdG9BcnJheScpO1xuXG52YXIgX3RvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9BcnJheTIpO1xuXG52YXIgX0FsaWduMiA9IHJlcXVpcmUoJy4vQWxpZ24nKTtcblxudmFyIF9BbGlnbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BbGlnbjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmFsbCA9IF9hbGwzLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvbmVudE9yRWxlbWVudCA9IF9jb21wb25lbnRPckVsZW1lbnQzLmRlZmF1bHQ7XG5leHBvcnRzLmRlcHJlY2F0ZWQgPSBfZGVwcmVjYXRlZDMuZGVmYXVsdDtcbmV4cG9ydHMuZWxlbWVudFR5cGUgPSBfZWxlbWVudFR5cGUzLmRlZmF1bHQ7XG5leHBvcnRzLmlzUmVxdWlyZWRGb3JBMTF5ID0gX2lzUmVxdWlyZWRGb3JBMTF5My5kZWZhdWx0O1xuZXhwb3J0cy5zcGxpdENvbXBvbmVudCA9IF9zcGxpdENvbXBvbmVudDMuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjMuZGVmYXVsdDtcbmV4cG9ydHMuS2V5Q29kZSA9IF9rZXlDb2RlMi5kZWZhdWx0O1xuZXhwb3J0cy5jb250YWlucyA9IF9jb250YWluczMuZGVmYXVsdDtcbmV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IF9hZGRFdmVudExpc3RlbmVyMy5kZWZhdWx0O1xuZXhwb3J0cy5jc3NBbmltYXRpb24gPSBfY3NzQW5pbWF0aW9uMy5kZWZhdWx0O1xuZXhwb3J0cy50b0FycmF5ID0gX3RvQXJyYXkzLmRlZmF1bHQ7XG4vL2V4cG9ydCBnZXRDb250YWluZXJSZW5kZXJNaXhpbiBmcm9tICcuL2dldENvbnRhaW5lclJlbmRlck1peGluJztcblxuZXhwb3J0cy5BbGlnbiA9IF9BbGlnbjMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWxsO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWxsKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxQcm9wVHlwZXMoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGFsbFByb3BUeXBlcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjtcbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbi8vIE1vc3RseSB0YWtlbiBmcm9tIFJlYWN0UHJvcFR5cGVzLlxuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWVTYWZlICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lU2FmZSArICdgLicpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNiA/IF9sZW4gLSA2IDogMCksIF9rZXkgPSA2OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA2XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGUuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lU2FmZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZVNhZmVdLmNvbmNhdChhcmdzKSk7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIvdXRpbHMvY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyJyk7XG5cbnZhciBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocHJvcFZhbHVlKTtcblxuICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIFJlYWN0RWxlbWVudCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdENvbXBvbmVudCBvciBhICcpICsgJ0RPTUVsZW1lbnQuIFlvdSBjYW4gdXN1YWxseSBvYnRhaW4gYSBSZWFjdENvbXBvbmVudCBvciBET01FbGVtZW50ICcgKyAnZnJvbSBhIFJlYWN0RWxlbWVudCBieSBhdHRhY2hpbmcgYSByZWYgdG8gaXQuJyk7XG4gIH1cblxuICBpZiAoKHByb3BUeXBlICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcHJvcFZhbHVlLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykgJiYgcHJvcFZhbHVlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBwcm9wVmFsdWUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdENvbXBvbmVudCBvciBhICcpICsgJ0RPTUVsZW1lbnQuJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIuZGVmYXVsdCkodmFsaWRhdGUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2NvbXBvbmVudE9yRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVwcmVjYXRlZDtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3YXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gZGVwcmVjYXRlZCh2YWxpZGF0b3IsIHJlYXNvbikge1xuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdICE9IG51bGwpIHtcbiAgICAgIHZhciBtZXNzYWdlS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIHByb3BOYW1lO1xuXG4gICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHdhcm5lZFttZXNzYWdlS2V5XSwgJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lU2FmZSArICdgIG9mICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZVNhZmUgKyAnYCBpcyBkZXByZWNhdGVkLiAnICsgcmVhc29uICsgJy4nKSk7XG5cbiAgICAgIHdhcm5lZFttZXNzYWdlS2V5XSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNSA/IF9sZW4gLSA1IDogMCksIF9rZXkgPSA1OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA1XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmZ1bmN0aW9uIF9yZXNldFdhcm5lZCgpIHtcbiAgd2FybmVkID0ge307XG59XG5cbmRlcHJlY2F0ZWQuX3Jlc2V0V2FybmVkID0gX3Jlc2V0V2FybmVkO1xuLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2RlcHJlY2F0ZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dhcm5pbmcvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC91c3IvbG9jYWwvbGliL34vYmVlLXRvb2xzL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZWxlbWVudFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBSZWFjdEVsZW1lbnQgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGVsZW1lbnQgdHlwZSAoYSBzdHJpbmcgJykgKyAnb3IgYSBSZWFjdENsYXNzKS4nKTtcbiAgfVxuXG4gIGlmIChwcm9wVHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIHByb3BWYWx1ZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBlbGVtZW50IHR5cGUgKGEgc3RyaW5nICcpICsgJ29yIGEgUmVhY3RDbGFzcykuJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjIuZGVmYXVsdCkoZWxlbWVudFR5cGUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2VsZW1lbnRUeXBlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBpc1JlcXVpcmVkRm9yQTExeTtcbmZ1bmN0aW9uIGlzUmVxdWlyZWRGb3JBMTF5KHZhbGlkYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lU2FmZSArICdgIGlzIHJlcXVpcmVkIHRvIG1ha2UgJyArICgnYCcgKyBjb21wb25lbnROYW1lU2FmZSArICdgIGFjY2Vzc2libGUgZm9yIHVzZXJzIG9mIGFzc2lzdGl2ZSAnKSArICd0ZWNobm9sb2dpZXMgc3VjaCBhcyBzY3JlZW4gcmVhZGVycy4nKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiA1ID8gX2xlbiAtIDUgOiAwKSwgX2tleSA9IDU7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDVdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3IuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lXS5jb25jYXQoYXJncykpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2lzUmVxdWlyZWRGb3JBMTF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNwbGl0Q29tcG9uZW50UHJvcHM7XG4vKipcbiAqIOWIhuWJsuimgeS8oOWFpeeItuWFg+e0oOWSjOWtkOWFg+e0oOeahHByb3BzXG4gKiBAcGFyYW0gIHtbb2JqZWN0XX0gcHJvcHMgICAgIOS8oOWFpeeahOWxnuaAp1xuICogQHBhcmFtICB7W3JlYWN0RWxlbWVudF19IENvbXBvbmVudCDnu4Tku7ZcbiAqIEByZXR1cm4ge1thcnJheV19ICAgICAgICAgICDov5Tlm57mlbDnu4TvvIznrKzkuIDkuKrlhYPntKDkuLrniLblhYPntKBwcm9wc+Wvueixoe+8jOesrOS6jOS4quWtkOWFg+e0oHByb3Bz5a+56LGhXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29tcG9uZW50UHJvcHMocHJvcHMsIENvbXBvbmVudCkge1xuICB2YXIgY29tcG9uZW50UHJvcFR5cGVzID0gQ29tcG9uZW50LnByb3BUeXBlcztcblxuICB2YXIgcGFyZW50UHJvcHMgPSB7fTtcbiAgdmFyIGNoaWxkUHJvcHMgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBwcm9wTmFtZSA9IF9yZWZbMF0sXG4gICAgICAgIHByb3BWYWx1ZSA9IF9yZWZbMV07XG5cbiAgICBpZiAoY29tcG9uZW50UHJvcFR5cGVzW3Byb3BOYW1lXSkge1xuICAgICAgcGFyZW50UHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZFByb3BzW3Byb3BOYW1lXSA9IHByb3BWYWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBbcGFyZW50UHJvcHMsIGNoaWxkUHJvcHNdO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL3NwbGl0Q29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLmZpbHRlcihmdW5jdGlvbiAoZikge1xuICAgIHJldHVybiBmICE9IG51bGw7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmKSB7XG4gICAgaWYgKHR5cGVvZiBmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgfVxuXG4gICAgaWYgKGFjYyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGY7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBzb21lIGtleS1jb2RlcyBkZWZpbml0aW9uIGFuZCB1dGlscyBmcm9tIGNsb3N1cmUtbGlicmFyeVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG52YXIgS2V5Q29kZSA9IHtcbiAgLyoqXG4gICAqIE1BQ19FTlRFUlxuICAgKi9cbiAgTUFDX0VOVEVSOiAzLFxuICAvKipcbiAgICogQkFDS1NQQUNFXG4gICAqL1xuICBCQUNLU1BBQ0U6IDgsXG4gIC8qKlxuICAgKiBUQUJcbiAgICovXG4gIFRBQjogOSxcbiAgLyoqXG4gICAqIE5VTUxPQ0sgb24gRkYvU2FmYXJpIE1hY1xuICAgKi9cbiAgTlVNX0NFTlRFUjogMTIsIC8vIE5VTUxPQ0sgb24gRkYvU2FmYXJpIE1hY1xuICAvKipcbiAgICogRU5URVJcbiAgICovXG4gIEVOVEVSOiAxMyxcbiAgLyoqXG4gICAqIFNISUZUXG4gICAqL1xuICBTSElGVDogMTYsXG4gIC8qKlxuICAgKiBDVFJMXG4gICAqL1xuICBDVFJMOiAxNyxcbiAgLyoqXG4gICAqIEFMVFxuICAgKi9cbiAgQUxUOiAxOCxcbiAgLyoqXG4gICAqIFBBVVNFXG4gICAqL1xuICBQQVVTRTogMTksXG4gIC8qKlxuICAgKiBDQVBTX0xPQ0tcbiAgICovXG4gIENBUFNfTE9DSzogMjAsXG4gIC8qKlxuICAgKiBFU0NcbiAgICovXG4gIEVTQzogMjcsXG4gIC8qKlxuICAgKiBTUEFDRVxuICAgKi9cbiAgU1BBQ0U6IDMyLFxuICAvKipcbiAgICogUEFHRV9VUFxuICAgKi9cbiAgUEFHRV9VUDogMzMsIC8vIGFsc28gTlVNX05PUlRIX0VBU1RcbiAgLyoqXG4gICAqIFBBR0VfRE9XTlxuICAgKi9cbiAgUEFHRV9ET1dOOiAzNCwgLy8gYWxzbyBOVU1fU09VVEhfRUFTVFxuICAvKipcbiAgICogRU5EXG4gICAqL1xuICBFTkQ6IDM1LCAvLyBhbHNvIE5VTV9TT1VUSF9XRVNUXG4gIC8qKlxuICAgKiBIT01FXG4gICAqL1xuICBIT01FOiAzNiwgLy8gYWxzbyBOVU1fTk9SVEhfV0VTVFxuICAvKipcbiAgICogTEVGVFxuICAgKi9cbiAgTEVGVDogMzcsIC8vIGFsc28gTlVNX1dFU1RcbiAgLyoqXG4gICAqIFVQXG4gICAqL1xuICBVUDogMzgsIC8vIGFsc28gTlVNX05PUlRIXG4gIC8qKlxuICAgKiBSSUdIVFxuICAgKi9cbiAgUklHSFQ6IDM5LCAvLyBhbHNvIE5VTV9FQVNUXG4gIC8qKlxuICAgKiBET1dOXG4gICAqL1xuICBET1dOOiA0MCwgLy8gYWxzbyBOVU1fU09VVEhcbiAgLyoqXG4gICAqIFBSSU5UX1NDUkVFTlxuICAgKi9cbiAgUFJJTlRfU0NSRUVOOiA0NCxcbiAgLyoqXG4gICAqIElOU0VSVFxuICAgKi9cbiAgSU5TRVJUOiA0NSwgLy8gYWxzbyBOVU1fSU5TRVJUXG4gIC8qKlxuICAgKiBERUxFVEVcbiAgICovXG4gIERFTEVURTogNDYsIC8vIGFsc28gTlVNX0RFTEVURVxuICAvKipcbiAgICogWkVST1xuICAgKi9cbiAgWkVSTzogNDgsXG4gIC8qKlxuICAgKiBPTkVcbiAgICovXG4gIE9ORTogNDksXG4gIC8qKlxuICAgKiBUV09cbiAgICovXG4gIFRXTzogNTAsXG4gIC8qKlxuICAgKiBUSFJFRVxuICAgKi9cbiAgVEhSRUU6IDUxLFxuICAvKipcbiAgICogRk9VUlxuICAgKi9cbiAgRk9VUjogNTIsXG4gIC8qKlxuICAgKiBGSVZFXG4gICAqL1xuICBGSVZFOiA1MyxcbiAgLyoqXG4gICAqIFNJWFxuICAgKi9cbiAgU0lYOiA1NCxcbiAgLyoqXG4gICAqIFNFVkVOXG4gICAqL1xuICBTRVZFTjogNTUsXG4gIC8qKlxuICAgKiBFSUdIVFxuICAgKi9cbiAgRUlHSFQ6IDU2LFxuICAvKipcbiAgICogTklORVxuICAgKi9cbiAgTklORTogNTcsXG4gIC8qKlxuICAgKiBRVUVTVElPTl9NQVJLXG4gICAqL1xuICBRVUVTVElPTl9NQVJLOiA2MywgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBBXG4gICAqL1xuICBBOiA2NSxcbiAgLyoqXG4gICAqIEJcbiAgICovXG4gIEI6IDY2LFxuICAvKipcbiAgICogQ1xuICAgKi9cbiAgQzogNjcsXG4gIC8qKlxuICAgKiBEXG4gICAqL1xuICBEOiA2OCxcbiAgLyoqXG4gICAqIEVcbiAgICovXG4gIEU6IDY5LFxuICAvKipcbiAgICogRlxuICAgKi9cbiAgRjogNzAsXG4gIC8qKlxuICAgKiBHXG4gICAqL1xuICBHOiA3MSxcbiAgLyoqXG4gICAqIEhcbiAgICovXG4gIEg6IDcyLFxuICAvKipcbiAgICogSVxuICAgKi9cbiAgSTogNzMsXG4gIC8qKlxuICAgKiBKXG4gICAqL1xuICBKOiA3NCxcbiAgLyoqXG4gICAqIEtcbiAgICovXG4gIEs6IDc1LFxuICAvKipcbiAgICogTFxuICAgKi9cbiAgTDogNzYsXG4gIC8qKlxuICAgKiBNXG4gICAqL1xuICBNOiA3NyxcbiAgLyoqXG4gICAqIE5cbiAgICovXG4gIE46IDc4LFxuICAvKipcbiAgICogT1xuICAgKi9cbiAgTzogNzksXG4gIC8qKlxuICAgKiBQXG4gICAqL1xuICBQOiA4MCxcbiAgLyoqXG4gICAqIFFcbiAgICovXG4gIFE6IDgxLFxuICAvKipcbiAgICogUlxuICAgKi9cbiAgUjogODIsXG4gIC8qKlxuICAgKiBTXG4gICAqL1xuICBTOiA4MyxcbiAgLyoqXG4gICAqIFRcbiAgICovXG4gIFQ6IDg0LFxuICAvKipcbiAgICogVVxuICAgKi9cbiAgVTogODUsXG4gIC8qKlxuICAgKiBWXG4gICAqL1xuICBWOiA4NixcbiAgLyoqXG4gICAqIFdcbiAgICovXG4gIFc6IDg3LFxuICAvKipcbiAgICogWFxuICAgKi9cbiAgWDogODgsXG4gIC8qKlxuICAgKiBZXG4gICAqL1xuICBZOiA4OSxcbiAgLyoqXG4gICAqIFpcbiAgICovXG4gIFo6IDkwLFxuICAvKipcbiAgICogTUVUQVxuICAgKi9cbiAgTUVUQTogOTEsIC8vIFdJTl9LRVlfTEVGVFxuICAvKipcbiAgICogV0lOX0tFWV9SSUdIVFxuICAgKi9cbiAgV0lOX0tFWV9SSUdIVDogOTIsXG4gIC8qKlxuICAgKiBDT05URVhUX01FTlVcbiAgICovXG4gIENPTlRFWFRfTUVOVTogOTMsXG4gIC8qKlxuICAgKiBOVU1fWkVST1xuICAgKi9cbiAgTlVNX1pFUk86IDk2LFxuICAvKipcbiAgICogTlVNX09ORVxuICAgKi9cbiAgTlVNX09ORTogOTcsXG4gIC8qKlxuICAgKiBOVU1fVFdPXG4gICAqL1xuICBOVU1fVFdPOiA5OCxcbiAgLyoqXG4gICAqIE5VTV9USFJFRVxuICAgKi9cbiAgTlVNX1RIUkVFOiA5OSxcbiAgLyoqXG4gICAqIE5VTV9GT1VSXG4gICAqL1xuICBOVU1fRk9VUjogMTAwLFxuICAvKipcbiAgICogTlVNX0ZJVkVcbiAgICovXG4gIE5VTV9GSVZFOiAxMDEsXG4gIC8qKlxuICAgKiBOVU1fU0lYXG4gICAqL1xuICBOVU1fU0lYOiAxMDIsXG4gIC8qKlxuICAgKiBOVU1fU0VWRU5cbiAgICovXG4gIE5VTV9TRVZFTjogMTAzLFxuICAvKipcbiAgICogTlVNX0VJR0hUXG4gICAqL1xuICBOVU1fRUlHSFQ6IDEwNCxcbiAgLyoqXG4gICAqIE5VTV9OSU5FXG4gICAqL1xuICBOVU1fTklORTogMTA1LFxuICAvKipcbiAgICogTlVNX01VTFRJUExZXG4gICAqL1xuICBOVU1fTVVMVElQTFk6IDEwNixcbiAgLyoqXG4gICAqIE5VTV9QTFVTXG4gICAqL1xuICBOVU1fUExVUzogMTA3LFxuICAvKipcbiAgICogTlVNX01JTlVTXG4gICAqL1xuICBOVU1fTUlOVVM6IDEwOSxcbiAgLyoqXG4gICAqIE5VTV9QRVJJT0RcbiAgICovXG4gIE5VTV9QRVJJT0Q6IDExMCxcbiAgLyoqXG4gICAqIE5VTV9ESVZJU0lPTlxuICAgKi9cbiAgTlVNX0RJVklTSU9OOiAxMTEsXG4gIC8qKlxuICAgKiBGMVxuICAgKi9cbiAgRjE6IDExMixcbiAgLyoqXG4gICAqIEYyXG4gICAqL1xuICBGMjogMTEzLFxuICAvKipcbiAgICogRjNcbiAgICovXG4gIEYzOiAxMTQsXG4gIC8qKlxuICAgKiBGNFxuICAgKi9cbiAgRjQ6IDExNSxcbiAgLyoqXG4gICAqIEY1XG4gICAqL1xuICBGNTogMTE2LFxuICAvKipcbiAgICogRjZcbiAgICovXG4gIEY2OiAxMTcsXG4gIC8qKlxuICAgKiBGN1xuICAgKi9cbiAgRjc6IDExOCxcbiAgLyoqXG4gICAqIEY4XG4gICAqL1xuICBGODogMTE5LFxuICAvKipcbiAgICogRjlcbiAgICovXG4gIEY5OiAxMjAsXG4gIC8qKlxuICAgKiBGMTBcbiAgICovXG4gIEYxMDogMTIxLFxuICAvKipcbiAgICogRjExXG4gICAqL1xuICBGMTE6IDEyMixcbiAgLyoqXG4gICAqIEYxMlxuICAgKi9cbiAgRjEyOiAxMjMsXG4gIC8qKlxuICAgKiBOVU1MT0NLXG4gICAqL1xuICBOVU1MT0NLOiAxNDQsXG4gIC8qKlxuICAgKiBTRU1JQ09MT05cbiAgICovXG4gIFNFTUlDT0xPTjogMTg2LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIERBU0hcbiAgICovXG4gIERBU0g6IDE4OSwgLy8gbmVlZHMgbG9jYWxpemF0aW9uXG4gIC8qKlxuICAgKiBFUVVBTFNcbiAgICovXG4gIEVRVUFMUzogMTg3LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIENPTU1BXG4gICAqL1xuICBDT01NQTogMTg4LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFBFUklPRFxuICAgKi9cbiAgUEVSSU9EOiAxOTAsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogU0xBU0hcbiAgICovXG4gIFNMQVNIOiAxOTEsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQVBPU1RST1BIRVxuICAgKi9cbiAgQVBPU1RST1BIRTogMTkyLCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIFNJTkdMRV9RVU9URVxuICAgKi9cbiAgU0lOR0xFX1FVT1RFOiAyMjIsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogT1BFTl9TUVVBUkVfQlJBQ0tFVFxuICAgKi9cbiAgT1BFTl9TUVVBUkVfQlJBQ0tFVDogMjE5LCAvLyBuZWVkcyBsb2NhbGl6YXRpb25cbiAgLyoqXG4gICAqIEJBQ0tTTEFTSFxuICAgKi9cbiAgQkFDS1NMQVNIOiAyMjAsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogQ0xPU0VfU1FVQVJFX0JSQUNLRVRcbiAgICovXG4gIENMT1NFX1NRVUFSRV9CUkFDS0VUOiAyMjEsIC8vIG5lZWRzIGxvY2FsaXphdGlvblxuICAvKipcbiAgICogV0lOX0tFWVxuICAgKi9cbiAgV0lOX0tFWTogMjI0LFxuICAvKipcbiAgICogTUFDX0ZGX01FVEFcbiAgICovXG4gIE1BQ19GRl9NRVRBOiAyMjQsIC8vIEZpcmVmb3ggKEdlY2tvKSBmaXJlcyB0aGlzIGZvciB0aGUgbWV0YSBrZXkgaW5zdGVhZCBvZiA5MVxuICAvKipcbiAgICogV0lOX0lNRVxuICAgKi9cbiAgV0lOX0lNRTogMjI5XG59O1xuXG4vKlxuIHdoZXRoZXIgdGV4dCBhbmQgbW9kaWZpZWQga2V5IGlzIGVudGVyZWQgYXQgdGhlIHNhbWUgdGltZS5cbiAqL1xuS2V5Q29kZS5pc1RleHRNb2RpZnlpbmdLZXlFdmVudCA9IGZ1bmN0aW9uIGlzVGV4dE1vZGlmeWluZ0tleUV2ZW50KGUpIHtcbiAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gIGlmIChlLmFsdEtleSAmJiAhZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fFxuICAvLyBGdW5jdGlvbiBrZXlzIGRvbid0IGdlbmVyYXRlIHRleHRcbiAga2V5Q29kZSA+PSBLZXlDb2RlLkYxICYmIGtleUNvZGUgPD0gS2V5Q29kZS5GMTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUaGUgZm9sbG93aW5nIGtleXMgYXJlIHF1aXRlIGhhcm1sZXNzLCBldmVuIGluIGNvbWJpbmF0aW9uIHdpdGhcbiAgLy8gQ1RSTCwgQUxUIG9yIFNISUZULlxuICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIEtleUNvZGUuQUxUOlxuICAgIGNhc2UgS2V5Q29kZS5DQVBTX0xPQ0s6XG4gICAgY2FzZSBLZXlDb2RlLkNPTlRFWFRfTUVOVTpcbiAgICBjYXNlIEtleUNvZGUuQ1RSTDpcbiAgICBjYXNlIEtleUNvZGUuRE9XTjpcbiAgICBjYXNlIEtleUNvZGUuRU5EOlxuICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgY2FzZSBLZXlDb2RlLkhPTUU6XG4gICAgY2FzZSBLZXlDb2RlLklOU0VSVDpcbiAgICBjYXNlIEtleUNvZGUuTEVGVDpcbiAgICBjYXNlIEtleUNvZGUuTUFDX0ZGX01FVEE6XG4gICAgY2FzZSBLZXlDb2RlLk1FVEE6XG4gICAgY2FzZSBLZXlDb2RlLk5VTUxPQ0s6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9DRU5URVI6XG4gICAgY2FzZSBLZXlDb2RlLlBBR0VfRE9XTjpcbiAgICBjYXNlIEtleUNvZGUuUEFHRV9VUDpcbiAgICBjYXNlIEtleUNvZGUuUEFVU0U6XG4gICAgY2FzZSBLZXlDb2RlLlBSSU5UX1NDUkVFTjpcbiAgICBjYXNlIEtleUNvZGUuUklHSFQ6XG4gICAgY2FzZSBLZXlDb2RlLlNISUZUOlxuICAgIGNhc2UgS2V5Q29kZS5VUDpcbiAgICBjYXNlIEtleUNvZGUuV0lOX0tFWTpcbiAgICBjYXNlIEtleUNvZGUuV0lOX0tFWV9SSUdIVDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8qXG4gd2hldGhlciBjaGFyYWN0ZXIgaXMgZW50ZXJlZC5cbiAqL1xuS2V5Q29kZS5pc0NoYXJhY3RlcktleSA9IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyS2V5KGtleUNvZGUpIHtcbiAgaWYgKGtleUNvZGUgPj0gS2V5Q29kZS5aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OSU5FKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoa2V5Q29kZSA+PSBLZXlDb2RlLk5VTV9aRVJPICYmIGtleUNvZGUgPD0gS2V5Q29kZS5OVU1fTVVMVElQTFkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChrZXlDb2RlID49IEtleUNvZGUuQSAmJiBrZXlDb2RlIDw9IEtleUNvZGUuWikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gU2FmYXJpIHNlbmRzIHplcm8ga2V5IGNvZGUgZm9yIG5vbi1sYXRpbiBjaGFyYWN0ZXJzLlxuICBpZiAod2luZG93Lm5hdmlnYXRpb24udXNlckFnZW50LmluZGV4T2YoJ1dlYktpdCcpICE9PSAtMSAmJiBrZXlDb2RlID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIEtleUNvZGUuU1BBQ0U6XG4gICAgY2FzZSBLZXlDb2RlLlFVRVNUSU9OX01BUks6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9QTFVTOlxuICAgIGNhc2UgS2V5Q29kZS5OVU1fTUlOVVM6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9QRVJJT0Q6XG4gICAgY2FzZSBLZXlDb2RlLk5VTV9ESVZJU0lPTjpcbiAgICBjYXNlIEtleUNvZGUuU0VNSUNPTE9OOlxuICAgIGNhc2UgS2V5Q29kZS5EQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5FUVVBTFM6XG4gICAgY2FzZSBLZXlDb2RlLkNPTU1BOlxuICAgIGNhc2UgS2V5Q29kZS5QRVJJT0Q6XG4gICAgY2FzZSBLZXlDb2RlLlNMQVNIOlxuICAgIGNhc2UgS2V5Q29kZS5BUE9TVFJPUEhFOlxuICAgIGNhc2UgS2V5Q29kZS5TSU5HTEVfUVVPVEU6XG4gICAgY2FzZSBLZXlDb2RlLk9QRU5fU1FVQVJFX0JSQUNLRVQ6XG4gICAgY2FzZSBLZXlDb2RlLkJBQ0tTTEFTSDpcbiAgICBjYXNlIEtleUNvZGUuQ0xPU0VfU1FVQVJFX0JSQUNLRVQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtleUNvZGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3RpbnBlci1iZWUtY29yZS9saWIva2V5Q29kZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjb250YWlucztcbmZ1bmN0aW9uIGNvbnRhaW5zKHJvb3QsIG4pIHtcbiAgdmFyIG5vZGUgPSBuO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09PSByb290KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9jb250YWlucy5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkRXZlbnRMaXN0ZW5lcldyYXA7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2FkZC1kb20tZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZERvbUV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyV3JhcCh0YXJnZXQsIGV2ZW50VHlwZSwgY2IpIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBfcmVhY3REb20yLmRlZmF1bHQudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPyBmdW5jdGlvbiBydW4oZSkge1xuICAgIF9yZWFjdERvbTIuZGVmYXVsdC51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyhjYiwgZSk7XG4gIH0gOiBjYjtcbiAgcmV0dXJuICgwLCBfYWRkRG9tRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkodGFyZ2V0LCBldmVudFR5cGUsIGNhbGxiYWNrKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9hZGRFdmVudExpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYWRkRXZlbnRMaXN0ZW5lcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0V2ZW50T2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudE9iamVjdCcpO1xuXG52YXIgX0V2ZW50T2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50T2JqZWN0KTtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gd3JhcENhbGxiYWNrKGUpIHtcbiAgICB2YXIgbmUgPSBuZXcgX0V2ZW50T2JqZWN0MlsnZGVmYXVsdCddKGUpO1xuICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LCBuZSk7XG4gIH1cblxuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHdyYXBDYWxsYmFjaywgZmFsc2UpO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2UgaWYgKHRhcmdldC5hdHRhY2hFdmVudCkge1xuICAgIHRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgIHJldHVybiB7XG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgICAgdGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBldmVudFR5cGUsIHdyYXBDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGlnbm9yZVxuICogZXZlbnQgb2JqZWN0IGZvciBkb21cbiAqIEBhdXRob3IgeWltaW5naGVAZ21haWwuY29tXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0V2ZW50QmFzZU9iamVjdCA9IHJlcXVpcmUoJy4vRXZlbnRCYXNlT2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V2ZW50QmFzZU9iamVjdCk7XG5cbnZhciBfb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgX29iamVjdEFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBc3NpZ24pO1xuXG52YXIgVFJVRSA9IHRydWU7XG52YXIgRkFMU0UgPSBmYWxzZTtcbnZhciBjb21tb25Qcm9wcyA9IFsnYWx0S2V5JywgJ2J1YmJsZXMnLCAnY2FuY2VsYWJsZScsICdjdHJsS2V5JywgJ2N1cnJlbnRUYXJnZXQnLCAnZXZlbnRQaGFzZScsICdtZXRhS2V5JywgJ3NoaWZ0S2V5JywgJ3RhcmdldCcsICd0aW1lU3RhbXAnLCAndmlldycsICd0eXBlJ107XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKHcpIHtcbiAgcmV0dXJuIHcgPT09IG51bGwgfHwgdyA9PT0gdW5kZWZpbmVkO1xufVxuXG52YXIgZXZlbnROb3JtYWxpemVycyA9IFt7XG4gIHJlZzogL15rZXkvLFxuICBwcm9wczogWydjaGFyJywgJ2NoYXJDb2RlJywgJ2tleScsICdrZXlDb2RlJywgJ3doaWNoJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChldmVudC53aGljaCkpIHtcbiAgICAgIGV2ZW50LndoaWNoID0gIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNoYXJDb2RlKSA/IG5hdGl2ZUV2ZW50LmNoYXJDb2RlIDogbmF0aXZlRXZlbnQua2V5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWV0YUtleSB0byBub24tTWFjIGJyb3dzZXJzICh1c2UgY3RybCBmb3IgUEMgJ3MgYW5kIE1ldGEgZm9yIE1hY3MpXG4gICAgaWYgKGV2ZW50Lm1ldGFLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXZlbnQubWV0YUtleSA9IGV2ZW50LmN0cmxLZXk7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL150b3VjaC8sXG4gIHByb3BzOiBbJ3RvdWNoZXMnLCAnY2hhbmdlZFRvdWNoZXMnLCAndGFyZ2V0VG91Y2hlcyddXG59LCB7XG4gIHJlZzogL15oYXNoY2hhbmdlJC8sXG4gIHByb3BzOiBbJ25ld1VSTCcsICdvbGRVUkwnXVxufSwge1xuICByZWc6IC9eZ2VzdHVyZWNoYW5nZSQvaSxcbiAgcHJvcHM6IFsncm90YXRpb24nLCAnc2NhbGUnXVxufSwge1xuICByZWc6IC9eKG1vdXNld2hlZWx8RE9NTW91c2VTY3JvbGwpJC8sXG4gIHByb3BzOiBbXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZGVsdGFZID0gdW5kZWZpbmVkO1xuICAgIHZhciBkZWx0YSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgd2hlZWxEZWx0YSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGE7XG4gICAgdmFyIGF4aXMgPSBuYXRpdmVFdmVudC5heGlzO1xuICAgIHZhciB3aGVlbERlbHRhWSA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFZO1xuICAgIHZhciB3aGVlbERlbHRhWCA9IG5hdGl2ZUV2ZW50LndoZWVsRGVsdGFYO1xuICAgIHZhciBkZXRhaWwgPSBuYXRpdmVFdmVudC5kZXRhaWw7XG5cbiAgICAvLyBpZS93ZWJraXRcbiAgICBpZiAod2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSB3aGVlbERlbHRhIC8gMTIwO1xuICAgIH1cblxuICAgIC8vIGdlY2tvXG4gICAgaWYgKGRldGFpbCkge1xuICAgICAgLy8gcHJlc3MgY29udHJvbCBlLmRldGFpbCA9PSAxIGVsc2UgZS5kZXRhaWwgPT0gM1xuICAgICAgZGVsdGEgPSAwIC0gKGRldGFpbCAlIDMgPT09IDAgPyBkZXRhaWwgLyAzIDogZGV0YWlsKTtcbiAgICB9XG5cbiAgICAvLyBHZWNrb1xuICAgIGlmIChheGlzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChheGlzID09PSBldmVudC5IT1JJWk9OVEFMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFZID0gMDtcbiAgICAgICAgZGVsdGFYID0gMCAtIGRlbHRhO1xuICAgICAgfSBlbHNlIGlmIChheGlzID09PSBldmVudC5WRVJUSUNBTF9BWElTKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICAgIGRlbHRhWSA9IGRlbHRhO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkZWx0YVkgPSB3aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG4gICAgaWYgKHdoZWVsRGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWCA9IC0xICogd2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfVxuXG4gICAgLy8g6buY6K6kIGRlbHRhWSAoaWUpXG4gICAgaWYgKCFkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWCBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFYXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVggPSBkZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvKipcbiAgICAgICAqIGRlbHRhWSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFZXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YVkgPSBkZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGEgb2YgbW91c2V3aGVlbCBldmVudFxuICAgICAgICogQHByb3BlcnR5IGRlbHRhXG4gICAgICAgKiBAbWVtYmVyIEV2ZW50LkRvbUV2ZW50Lk9iamVjdFxuICAgICAgICovXG4gICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xuICAgIH1cbiAgfVxufSwge1xuICByZWc6IC9ebW91c2V8Y29udGV4dG1lbnV8Y2xpY2t8bXNwb2ludGVyfCheRE9NTW91c2VTY3JvbGwkKS9pLFxuICBwcm9wczogWydidXR0b25zJywgJ2NsaWVudFgnLCAnY2xpZW50WScsICdidXR0b24nLCAnb2Zmc2V0WCcsICdyZWxhdGVkVGFyZ2V0JywgJ3doaWNoJywgJ2Zyb21FbGVtZW50JywgJ3RvRWxlbWVudCcsICdvZmZzZXRZJywgJ3BhZ2VYJywgJ3BhZ2VZJywgJ3NjcmVlblgnLCAnc2NyZWVuWSddLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZXZlbnREb2MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRvYyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgYm9keSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBidXR0b24gPSBuYXRpdmVFdmVudC5idXR0b247XG5cbiAgICAvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG4gICAgaWYgKHRhcmdldCAmJiBpc051bGxPclVuZGVmaW5lZChldmVudC5wYWdlWCkgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG5hdGl2ZUV2ZW50LmNsaWVudFgpKSB7XG4gICAgICBldmVudERvYyA9IHRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuICAgICAgZG9jID0gZXZlbnREb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgYm9keSA9IGV2ZW50RG9jLmJvZHk7XG4gICAgICBldmVudC5wYWdlWCA9IG5hdGl2ZUV2ZW50LmNsaWVudFggKyAoZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50TGVmdCB8fCBib2R5ICYmIGJvZHkuY2xpZW50TGVmdCB8fCAwKTtcbiAgICAgIGV2ZW50LnBhZ2VZID0gbmF0aXZlRXZlbnQuY2xpZW50WSArIChkb2MgJiYgZG9jLnNjcm9sbFRvcCB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wIHx8IDApIC0gKGRvYyAmJiBkb2MuY2xpZW50VG9wIHx8IGJvZHkgJiYgYm9keS5jbGllbnRUb3AgfHwgMCk7XG4gICAgfVxuXG4gICAgLy8gd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG4gICAgLy8gZG8gbm90IHVzZSBidXR0b25cbiAgICBpZiAoIWV2ZW50LndoaWNoICYmIGJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoYnV0dG9uICYgMSkge1xuICAgICAgICBldmVudC53aGljaCA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDIpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAzO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGQgcmVsYXRlZFRhcmdldCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKCFldmVudC5yZWxhdGVkVGFyZ2V0ICYmIGV2ZW50LmZyb21FbGVtZW50KSB7XG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQuZnJvbUVsZW1lbnQgPT09IHRhcmdldCA/IGV2ZW50LnRvRWxlbWVudCA6IGV2ZW50LmZyb21FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufV07XG5cbmZ1bmN0aW9uIHJldFRydWUoKSB7XG4gIHJldHVybiBUUlVFO1xufVxuXG5mdW5jdGlvbiByZXRGYWxzZSgpIHtcbiAgcmV0dXJuIEZBTFNFO1xufVxuXG5mdW5jdGlvbiBEb21FdmVudE9iamVjdChuYXRpdmVFdmVudCkge1xuICB2YXIgdHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGU7XG5cbiAgdmFyIGlzTmF0aXZlID0gdHlwZW9mIG5hdGl2ZUV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgbmF0aXZlRXZlbnQuY2FuY2VsQnViYmxlID09PSAnYm9vbGVhbic7XG5cbiAgX0V2ZW50QmFzZU9iamVjdDJbJ2RlZmF1bHQnXS5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubmF0aXZlRXZlbnQgPSBuYXRpdmVFdmVudDtcblxuICAvLyBpbiBjYXNlIGRvbSBldmVudCBoYXMgYmVlbiBtYXJrIGFzIGRlZmF1bHQgcHJldmVudGVkIGJ5IGxvd2VyIGRvbSBub2RlXG4gIHZhciBpc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXRGYWxzZTtcbiAgaWYgKCdkZWZhdWx0UHJldmVudGVkJyBpbiBuYXRpdmVFdmVudCkge1xuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH0gZWxzZSBpZiAoJ2dldFByZXZlbnREZWZhdWx0JyBpbiBuYXRpdmVFdmVudCkge1xuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5MTE1MVxuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LmdldFByZXZlbnREZWZhdWx0KCkgPyByZXRUcnVlIDogcmV0RmFsc2U7XG4gIH0gZWxzZSBpZiAoJ3JldHVyblZhbHVlJyBpbiBuYXRpdmVFdmVudCkge1xuICAgIGlzRGVmYXVsdFByZXZlbnRlZCA9IG5hdGl2ZUV2ZW50LnJldHVyblZhbHVlID09PSBGQUxTRSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfVxuXG4gIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gaXNEZWZhdWx0UHJldmVudGVkO1xuXG4gIHZhciBmaXhGbnMgPSBbXTtcbiAgdmFyIGZpeEZuID0gdW5kZWZpbmVkO1xuICB2YXIgbCA9IHVuZGVmaW5lZDtcbiAgdmFyIHByb3AgPSB1bmRlZmluZWQ7XG4gIHZhciBwcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdCgpO1xuXG4gIGV2ZW50Tm9ybWFsaXplcnMuZm9yRWFjaChmdW5jdGlvbiAobm9ybWFsaXplcikge1xuICAgIGlmICh0eXBlLm1hdGNoKG5vcm1hbGl6ZXIucmVnKSkge1xuICAgICAgcHJvcHMgPSBwcm9wcy5jb25jYXQobm9ybWFsaXplci5wcm9wcyk7XG4gICAgICBpZiAobm9ybWFsaXplci5maXgpIHtcbiAgICAgICAgZml4Rm5zLnB1c2gobm9ybWFsaXplci5maXgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbCA9IHByb3BzLmxlbmd0aDtcblxuICAvLyBjbG9uZSBwcm9wZXJ0aWVzIG9mIHRoZSBvcmlnaW5hbCBldmVudCBvYmplY3RcbiAgd2hpbGUgKGwpIHtcbiAgICBwcm9wID0gcHJvcHNbLS1sXTtcbiAgICB0aGlzW3Byb3BdID0gbmF0aXZlRXZlbnRbcHJvcF07XG4gIH1cblxuICAvLyBmaXggdGFyZ2V0IHByb3BlcnR5LCBpZiBuZWNlc3NhcnlcbiAgaWYgKCF0aGlzLnRhcmdldCAmJiBpc05hdGl2ZSkge1xuICAgIHRoaXMudGFyZ2V0ID0gbmF0aXZlRXZlbnQuc3JjRWxlbWVudCB8fCBkb2N1bWVudDsgLy8gc3JjRWxlbWVudCBtaWdodCBub3QgYmUgZGVmaW5lZCBlaXRoZXJcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIHRhcmdldCBpcyBhIHRleHQgbm9kZSAoc2FmYXJpKVxuICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQubm9kZVR5cGUgPT09IDMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0LnBhcmVudE5vZGU7XG4gIH1cblxuICBsID0gZml4Rm5zLmxlbmd0aDtcblxuICB3aGlsZSAobCkge1xuICAgIGZpeEZuID0gZml4Rm5zWy0tbF07XG4gICAgZml4Rm4odGhpcywgbmF0aXZlRXZlbnQpO1xuICB9XG5cbiAgdGhpcy50aW1lU3RhbXAgPSBuYXRpdmVFdmVudC50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcbn1cblxudmFyIEV2ZW50QmFzZU9iamVjdFByb3RvID0gX0V2ZW50QmFzZU9iamVjdDJbJ2RlZmF1bHQnXS5wcm90b3R5cGU7XG5cbigwLCBfb2JqZWN0QXNzaWduMlsnZGVmYXVsdCddKShEb21FdmVudE9iamVjdC5wcm90b3R5cGUsIEV2ZW50QmFzZU9iamVjdFByb3RvLCB7XG4gIGNvbnN0cnVjdG9yOiBEb21FdmVudE9iamVjdCxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgcHJldmVudERlZmF1bHQgZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSByZXR1cm5WYWx1ZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gRkFMU0UgKElFKVxuICAgICAgZS5yZXR1cm5WYWx1ZSA9IEZBTFNFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnByZXZlbnREZWZhdWx0LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5hdGl2ZUV2ZW50O1xuXG4gICAgLy8gaWYgc3RvcFByb3BhZ2F0aW9uIGV4aXN0cyBydW4gaXQgb24gdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2Ugc2V0IHRoZSBjYW5jZWxCdWJibGUgcHJvcGVydHkgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IHRvIFRSVUUgKElFKVxuICAgICAgZS5jYW5jZWxCdWJibGUgPSBUUlVFO1xuICAgIH1cblxuICAgIEV2ZW50QmFzZU9iamVjdFByb3RvLnN0b3BQcm9wYWdhdGlvbi5jYWxsKHRoaXMpO1xuICB9XG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gRG9tRXZlbnRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGlnbm9yZVxuICogYmFzZSBldmVudCBvYmplY3QgZm9yIGN1c3RvbSBhbmQgZG9tIGV2ZW50LlxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICAgIC8vIGZpeGVkIDEuMlxuICAgIC8vIGNhbGwgc3RvcFByb3BhZ2F0aW9uIGltcGxpY2l0bHlcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FkZC1kb20tZXZlbnQtbGlzdGVuZXIvbGliL0V2ZW50QmFzZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBUb09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIGtleXM7XG5cdHZhciB0byA9IFRvT2JqZWN0KHRhcmdldCk7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gYXJndW1lbnRzW3NdO1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyhPYmplY3QoZnJvbSkpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1trZXlzW2ldXSA9IGZyb21ba2V5c1tpXV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9FdmVudCA9IHJlcXVpcmUoJy4vRXZlbnQnKTtcblxudmFyIF9FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FdmVudCk7XG5cbnZhciBfY29tcG9uZW50Q2xhc3NlcyA9IHJlcXVpcmUoJ2NvbXBvbmVudC1jbGFzc2VzJyk7XG5cbnZhciBfY29tcG9uZW50Q2xhc3NlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb25lbnRDbGFzc2VzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gX0V2ZW50Mi5kZWZhdWx0LmVuZEV2ZW50cy5sZW5ndGggIT09IDA7XG5cblxudmFyIGNhcGl0YWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJyxcbi8vIG1zIGlzIHNwZWNpYWwgLi4uLiAhXG4nbXMnXTtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuXG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcbiAgdmFyIG5vZGVDbGFzc2VzID0gKDAsIF9jb21wb25lbnRDbGFzc2VzMi5kZWZhdWx0KShub2RlKTtcblxuICBpZiAoZW5kQ2FsbGJhY2sgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVuZENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBlbmQgPSBlbmRDYWxsYmFjay5lbmQ7XG4gICAgc3RhcnQgPSBlbmRDYWxsYmFjay5zdGFydDtcbiAgICBhY3RpdmUgPSBlbmRDYWxsYmFjay5hY3RpdmU7XG4gIH1cblxuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgIF9FdmVudDIuZGVmYXVsdC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBlbmQgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoZW5kKSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX0V2ZW50Mi5kZWZhdWx0LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBpZiAoc3RhcnQpIHtcbiAgICBzdGFydCgpO1xuICB9XG4gIG5vZGVDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgbm9kZUNsYXNzZXMuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dChhY3RpdmUsIDApO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICAgIC8vIDMwbXMgZm9yIGZpcmVmb3hcbiAgfSwgMzApO1xuXG4gIHJldHVybiB7XG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY3NzQW5pbWF0aW9uLnN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHN0eWxlLCBjYWxsYmFjaykge1xuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBfRXZlbnQyLmRlZmF1bHQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIF9FdmVudDIuZGVmYXVsdC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyBpbiBzdHlsZSkge1xuICAgICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KHMpKSB7XG4gICAgICAgIG5vZGUuc3R5bGVbc10gPSBzdHlsZVtzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICB9LCAwKTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKG5vZGUsIHAsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHA7XG4gIHZhciB2ID0gdmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdiA9IHByb3BlcnR5O1xuICAgIHByb3BlcnR5ID0gJyc7XG4gIH1cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eSB8fCAnJztcbiAgY2FwaXRhbFByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIG5vZGUuc3R5bGVbcHJlZml4ICsgJ1RyYW5zaXRpb24nICsgcHJvcGVydHldID0gdjtcbiAgfSk7XG59O1xuXG5jc3NBbmltYXRpb24uaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3NzQW5pbWF0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL2Nzc0FuaW1hdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIEVWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgZW5kRXZlbnRzID0gW107XG5cbmZ1bmN0aW9uIGRldGVjdEV2ZW50cygpIHtcbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgc3R5bGUgPSB0ZXN0RWwuc3R5bGU7XG5cbiAgaWYgKCEoJ0FuaW1hdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XG4gIH1cblxuICBpZiAoISgnVHJhbnNpdGlvbkV2ZW50JyBpbiB3aW5kb3cpKSB7XG4gICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgIHZhciBiYXNlRXZlbnRzID0gRVZFTlRfTkFNRV9NQVBbYmFzZUV2ZW50TmFtZV07XG4gICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgZW5kRXZlbnRzLnB1c2goYmFzZUV2ZW50c1tzdHlsZU5hbWVdKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICBhZGRFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVuZEV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbmRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBlbmRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICBlbmRFdmVudHM6IGVuZEV2ZW50cyxcblxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uRXZlbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudHJ5IHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmRleG9mJyk7XG59XG5cbi8qKlxuICogV2hpdGVzcGFjZSByZWdleHAuXG4gKi9cblxudmFyIHJlID0gL1xccysvO1xuXG4vKipcbiAqIHRvU3RyaW5nIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdyYXAgYGVsYCBpbiBhIGBDbGFzc0xpc3RgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCl7XG4gIHJldHVybiBuZXcgQ2xhc3NMaXN0KGVsKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBDbGFzc0xpc3QgZm9yIGBlbGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KGVsKSB7XG4gIGlmICghZWwgfHwgIWVsLm5vZGVUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIERPTSBlbGVtZW50IHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpO1xuICB9XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5saXN0ID0gZWwuY2xhc3NMaXN0O1xufVxuXG4vKipcbiAqIEFkZCBjbGFzcyBgbmFtZWAgaWYgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICghfmkpIGFyci5wdXNoKG5hbWUpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgYG5hbWVgIHdoZW4gcHJlc2VudCwgb3JcbiAqIHBhc3MgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVtb3ZlXG4gKiBhbnkgd2hpY2ggbWF0Y2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obmFtZSl7XG4gIGlmICgnW29iamVjdCBSZWdFeHBdJyA9PSB0b1N0cmluZy5jYWxsKG5hbWUpKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlTWF0Y2hpbmcobmFtZSk7XG4gIH1cblxuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5yZW1vdmUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICh+aSkgYXJyLnNwbGljZShpLCAxKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBjbGFzc2VzIG1hdGNoaW5nIGByZWAuXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZU1hdGNoaW5nID0gZnVuY3Rpb24ocmUpe1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZS50ZXN0KGFycltpXSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgY2xhc3MgYG5hbWVgLCBjYW4gZm9yY2Ugc3RhdGUgdmlhIGBmb3JjZWAuXG4gKlxuICogRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBjbGFzc0xpc3QsIGJ1dCBkbyBub3Qgc3VwcG9ydCBgZm9yY2VgIHlldCxcbiAqIHRoZSBtaXN0YWtlIHdpbGwgYmUgZGV0ZWN0ZWQgYW5kIGNvcnJlY3RlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKG5hbWUsIGZvcmNlKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgICBpZiAoZm9yY2UgIT09IHRoaXMubGlzdC50b2dnbGUobmFtZSwgZm9yY2UpKSB7XG4gICAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7IC8vIHRvZ2dsZSBhZ2FpbiB0byBjb3JyZWN0XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBjbGFzc2VzLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFycmF5ID0gZnVuY3Rpb24oKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICB2YXIgc3RyID0gY2xhc3NOYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGFyciA9IHN0ci5zcGxpdChyZSk7XG4gIGlmICgnJyA9PT0gYXJyWzBdKSBhcnIuc2hpZnQoKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgY2xhc3MgYG5hbWVgIGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5oYXMgPVxuQ2xhc3NMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gdGhpcy5saXN0XG4gICAgPyB0aGlzLmxpc3QuY29udGFpbnMobmFtZSlcbiAgICA6ICEhIH5pbmRleCh0aGlzLmFycmF5KCksIG5hbWUpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb21wb25lbnQtaW5kZXhvZi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9BcnJheTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0LnB1c2goYyk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW5wZXItYmVlLWNvcmUvbGliL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2RvbUFsaWduID0gcmVxdWlyZSgnZG9tLWFsaWduJyk7XG5cbnZhciBfZG9tQWxpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZG9tQWxpZ24pO1xuXG52YXIgX2FkZEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCcuL2FkZEV2ZW50TGlzdGVuZXInKTtcblxudmFyIF9hZGRFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL2ltcG9ydCBpc1dpbmRvdyBmcm9tICcuL2lzV2luZG93JztcblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIC8qIGVzbGludCBuby1lcS1udWxsOiAwICovXG4gIC8qIGVzbGludCBlcWVxZXE6IDAgKi9cbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG5mdW5jdGlvbiBidWZmZXIoZm4sIG1zKSB7XG4gIHZhciB0aW1lciA9IHZvaWQgMDtcblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyRm4oKSB7XG4gICAgY2xlYXIoKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZm4sIG1zKTtcbiAgfVxuXG4gIGJ1ZmZlckZuLmNsZWFyID0gY2xlYXI7XG5cbiAgcmV0dXJuIGJ1ZmZlckZuO1xufVxuXG52YXIgQWxpZ24gPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBjaGlsZHJlblByb3BzOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhbGlnbjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0YXJnZXQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFsaWduOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgbW9uaXRvckJ1ZmZlclRpbWU6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICAgIH0sXG4gICAgICBvbkFsaWduOiBmdW5jdGlvbiBvbkFsaWduKCkge30sXG5cbiAgICAgIG1vbml0b3JCdWZmZXJUaW1lOiA1MCxcbiAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgLy8gaWYgcGFyZW50IHJlZiBub3QgYXR0YWNoZWQgLi4uLiB1c2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWRcbiAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICBpZiAoIXByb3BzLmRpc2FibGVkICYmIHByb3BzLm1vbml0b3JXaW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcmVBbGlnbiA9IGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAocHJldlByb3BzLmRpc2FibGVkIHx8IHByZXZQcm9wcy5hbGlnbiAhPT0gcHJvcHMuYWxpZ24pIHtcbiAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGFzdFRhcmdldCA9IHByZXZQcm9wcy50YXJnZXQoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRUYXJnZXQgPSBwcm9wcy50YXJnZXQoKTtcbiAgICAgICAgaWYgKGlzV2luZG93KGxhc3RUYXJnZXQpICYmIGlzV2luZG93KGN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICAgICAgcmVBbGlnbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RUYXJnZXQgIT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZUFsaWduKSB7XG4gICAgICB0aGlzLmZvcmNlQWxpZ24oKTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubW9uaXRvcldpbmRvd1Jlc2l6ZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0b3BNb25pdG9yV2luZG93UmVzaXplKCk7XG4gIH0sXG4gIHN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZTogZnVuY3Rpb24gc3RhcnRNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgIGlmICghdGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlck1vbml0b3IgPSBidWZmZXIodGhpcy5mb3JjZUFsaWduLCB0aGlzLnByb3BzLm1vbml0b3JCdWZmZXJUaW1lKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9ICgwLCBfYWRkRXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCkod2luZG93LCAncmVzaXplJywgdGhpcy5idWZmZXJNb25pdG9yKTtcbiAgICB9XG4gIH0sXG4gIHN0b3BNb25pdG9yV2luZG93UmVzaXplOiBmdW5jdGlvbiBzdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyKSB7XG4gICAgICB0aGlzLmJ1ZmZlck1vbml0b3IuY2xlYXIoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9LFxuICBmb3JjZUFsaWduOiBmdW5jdGlvbiBmb3JjZUFsaWduKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdmFyIHNvdXJjZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHByb3BzLm9uQWxpZ24oc291cmNlLCAoMCwgX2RvbUFsaWduMi5kZWZhdWx0KShzb3VyY2UsIHByb3BzLnRhcmdldCgpLCBwcm9wcy5hbGlnbikpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuUHJvcHMgPSBfcHJvcHMuY2hpbGRyZW5Qcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjaGlsZHJlblByb3BzKSB7XG4gICAgICAgIGlmIChjaGlsZHJlblByb3BzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgbmV3UHJvcHNbcHJvcF0gPSB0aGlzLnByb3BzW2NoaWxkcmVuUHJvcHNbcHJvcF1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBbGlnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGlucGVyLWJlZS1jb3JlL2xpYi9BbGlnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQgPSByZXF1aXJlKCcuL2dldE9mZnNldFBhcmVudCcpO1xuXG52YXIgX2dldE9mZnNldFBhcmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPZmZzZXRQYXJlbnQpO1xuXG52YXIgX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IHJlcXVpcmUoJy4vZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50Jyk7XG5cbnZhciBfZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCk7XG5cbnZhciBfYWRqdXN0Rm9yVmlld3BvcnQgPSByZXF1aXJlKCcuL2FkanVzdEZvclZpZXdwb3J0Jyk7XG5cbnZhciBfYWRqdXN0Rm9yVmlld3BvcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRqdXN0Rm9yVmlld3BvcnQpO1xuXG52YXIgX2dldFJlZ2lvbiA9IHJlcXVpcmUoJy4vZ2V0UmVnaW9uJyk7XG5cbnZhciBfZ2V0UmVnaW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFJlZ2lvbik7XG5cbnZhciBfZ2V0RWxGdXR1cmVQb3MgPSByZXF1aXJlKCcuL2dldEVsRnV0dXJlUG9zJyk7XG5cbnZhciBfZ2V0RWxGdXR1cmVQb3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0RWxGdXR1cmVQb3MpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLy8gaHR0cDovL3lpbWluZ2hlLml0ZXllLmNvbS9ibG9nLzExMjQ3MjBcblxuLyoqXG4gKiBhbGlnbiBkb20gbm9kZSBmbGV4aWJseVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5mdW5jdGlvbiBpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPCB2aXNpYmxlUmVjdC5sZWZ0IHx8IGVsRnV0dXJlUG9zLmxlZnQgKyBlbFJlZ2lvbi53aWR0aCA+IHZpc2libGVSZWN0LnJpZ2h0O1xufVxuXG5mdW5jdGlvbiBpc0ZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPiB2aXNpYmxlUmVjdC5ib3R0b207XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSB7XG4gIHJldHVybiBlbEZ1dHVyZVBvcy5sZWZ0ID4gdmlzaWJsZVJlY3QucmlnaHQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoIDwgdmlzaWJsZVJlY3QubGVmdDtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxZKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLnRvcCA+IHZpc2libGVSZWN0LmJvdHRvbSB8fCBlbEZ1dHVyZVBvcy50b3AgKyBlbFJlZ2lvbi5oZWlnaHQgPCB2aXNpYmxlUmVjdC50b3A7XG59XG5cbmZ1bmN0aW9uIGZsaXAocG9pbnRzLCByZWcsIG1hcCkge1xuICB2YXIgcmV0ID0gW107XG4gIF91dGlsczJbXCJkZWZhdWx0XCJdLmVhY2gocG9pbnRzLCBmdW5jdGlvbiAocCkge1xuICAgIHJldC5wdXNoKHAucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbWFwW21dO1xuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZsaXBPZmZzZXQob2Zmc2V0LCBpbmRleCkge1xuICBvZmZzZXRbaW5kZXhdID0gLW9mZnNldFtpbmRleF07XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRPZmZzZXQoc3RyLCBvZmZzZXRMZW4pIHtcbiAgdmFyIG4gPSB2b2lkIDA7XG4gIGlmICgvJSQvLnRlc3Qoc3RyKSkge1xuICAgIG4gPSBwYXJzZUludChzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSwgMTApIC8gMTAwICogb2Zmc2V0TGVuO1xuICB9IGVsc2Uge1xuICAgIG4gPSBwYXJzZUludChzdHIsIDEwKTtcbiAgfVxuICByZXR1cm4gbiB8fCAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbCkge1xuICBvZmZzZXRbMF0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFswXSwgZWwud2lkdGgpO1xuICBvZmZzZXRbMV0gPSBjb252ZXJ0T2Zmc2V0KG9mZnNldFsxXSwgZWwuaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gZG9tQWxpZ24oZWwsIHJlZk5vZGUsIGFsaWduKSB7XG4gIHZhciBwb2ludHMgPSBhbGlnbi5wb2ludHM7XG4gIHZhciBvZmZzZXQgPSBhbGlnbi5vZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgdGFyZ2V0T2Zmc2V0ID0gYWxpZ24udGFyZ2V0T2Zmc2V0IHx8IFswLCAwXTtcbiAgdmFyIG92ZXJmbG93ID0gYWxpZ24ub3ZlcmZsb3c7XG4gIHZhciB0YXJnZXQgPSBhbGlnbi50YXJnZXQgfHwgcmVmTm9kZTtcbiAgdmFyIHNvdXJjZSA9IGFsaWduLnNvdXJjZSB8fCBlbDtcbiAgb2Zmc2V0ID0gW10uY29uY2F0KG9mZnNldCk7XG4gIHRhcmdldE9mZnNldCA9IFtdLmNvbmNhdCh0YXJnZXRPZmZzZXQpO1xuICBvdmVyZmxvdyA9IG92ZXJmbG93IHx8IHt9O1xuICB2YXIgbmV3T3ZlcmZsb3dDZmcgPSB7fTtcblxuICB2YXIgZmFpbCA9IDA7XG4gIC8vIOW9k+WJjeiKgueCueWPr+S7peiiq+aUvue9rueahOaYvuekuuWMuuWfn1xuICB2YXIgdmlzaWJsZVJlY3QgPSAoMCwgX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudDJbXCJkZWZhdWx0XCJdKShzb3VyY2UpO1xuICAvLyDlvZPliY3oioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuICB2YXIgZWxSZWdpb24gPSAoMCwgX2dldFJlZ2lvbjJbXCJkZWZhdWx0XCJdKShzb3VyY2UpO1xuICAvLyDlj4LnhafoioLngrnmiYDljaDnmoTljLrln58sIGxlZnQvdG9wL3dpZHRoL2hlaWdodFxuICB2YXIgcmVmTm9kZVJlZ2lvbiA9ICgwLCBfZ2V0UmVnaW9uMltcImRlZmF1bHRcIl0pKHRhcmdldCk7XG4gIC8vIOWwhiBvZmZzZXQg6L2s5o2i5oiQ5pWw5YC877yM5pSv5oyB55m+5YiG5q+UXG4gIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsUmVnaW9uKTtcbiAgbm9ybWFsaXplT2Zmc2V0KHRhcmdldE9mZnNldCwgcmVmTm9kZVJlZ2lvbik7XG4gIC8vIOW9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICB2YXIgZWxGdXR1cmVQb3MgPSAoMCwgX2dldEVsRnV0dXJlUG9zMltcImRlZmF1bHRcIl0pKGVsUmVnaW9uLCByZWZOb2RlUmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgLy8g5b2T5YmN6IqC54K55bCG6KaB5omA5aSE55qE5Yy65Z+fXG4gIHZhciBuZXdFbFJlZ2lvbiA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG5cbiAgLy8g5aaC5p6c5Y+v6KeG5Yy65Z+f5LiN6IO95a6M5YWo5pS+572u5b2T5YmN6IqC54K55pe25YWB6K646LCD5pW0XG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSkge1xuICAgIGlmIChvdmVyZmxvdy5hZGp1c3RYKSB7XG4gICAgICAvLyDlpoLmnpzmqKrlkJHkuI3og73mlL7kuItcbiAgICAgIGlmIChpc0ZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpKSB7XG4gICAgICAgIC8vIOWvuem9kOS9jee9ruWPjeS4i1xuICAgICAgICB2YXIgbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bbHJdL2lnLCB7XG4gICAgICAgICAgbDogJ3InLFxuICAgICAgICAgIHI6ICdsJ1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBuZXdPZmZzZXQgPSBmbGlwT2Zmc2V0KG9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdUYXJnZXRPZmZzZXQgPSBmbGlwT2Zmc2V0KHRhcmdldE9mZnNldCwgMCk7XG4gICAgICAgIHZhciBuZXdFbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIG5ld1BvaW50cywgbmV3T2Zmc2V0LCBuZXdUYXJnZXRPZmZzZXQpO1xuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWChuZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFkpIHtcbiAgICAgIC8vIOWmguaenOe6teWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bdGJdL2lnLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuICAgICAgICB2YXIgX25ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAxKTtcbiAgICAgICAgdmFyIF9uZXdFbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIF9uZXdQb2ludHMsIF9uZXdPZmZzZXQsIF9uZXdUYXJnZXRPZmZzZXQpO1xuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWShfbmV3RWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgICBmYWlsID0gMTtcbiAgICAgICAgICBwb2ludHMgPSBfbmV3UG9pbnRzO1xuICAgICAgICAgIG9mZnNldCA9IF9uZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gX25ld1RhcmdldE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWmguaenOWksei0pe+8jOmHjeaWsOiuoeeul+W9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICAgIGlmIChmYWlsKSB7XG4gICAgICBlbEZ1dHVyZVBvcyA9ICgwLCBfZ2V0RWxGdXR1cmVQb3MyW1wiZGVmYXVsdFwiXSkoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpO1xuICAgICAgX3V0aWxzMltcImRlZmF1bHRcIl0ubWl4KG5ld0VsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG4gICAgfVxuXG4gICAgLy8g5qOA5p+l5Y+N5LiL5ZCO55qE5L2N572u5piv5ZCm5Y+v5Lul5pS+5LiL5LqGXG4gICAgLy8g5aaC5p6c5LuN54S25pS+5LiN5LiL5Y+q5pyJ5oyH5a6a5LqG5Y+v5Lul6LCD5pW05b2T5YmN5pa55ZCR5omN6LCD5pW0XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCA9IG92ZXJmbG93LmFkanVzdFggJiYgaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KTtcblxuICAgIG5ld092ZXJmbG93Q2ZnLmFkanVzdFkgPSBvdmVyZmxvdy5hZGp1c3RZICYmIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG5cbiAgICAvLyDnoa7lrp7opoHosIPmlbTvvIznlJroh7Plj6/og73kvJrosIPmlbTpq5jluqblrr3luqZcbiAgICBpZiAobmV3T3ZlcmZsb3dDZmcuYWRqdXN0WCB8fCBuZXdPdmVyZmxvd0NmZy5hZGp1c3RZKSB7XG4gICAgICBuZXdFbFJlZ2lvbiA9ICgwLCBfYWRqdXN0Rm9yVmlld3BvcnQyW1wiZGVmYXVsdFwiXSkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCwgbmV3T3ZlcmZsb3dDZmcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5lZWQganVkZ2UgdG8gaW4gY2FzZSBzZXQgZml4ZWQgd2l0aCBpbiBjc3Mgb24gaGVpZ2h0IGF1dG8gZWxlbWVudFxuICBpZiAobmV3RWxSZWdpb24ud2lkdGggIT09IGVsUmVnaW9uLndpZHRoKSB7XG4gICAgX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKHNvdXJjZSwgJ3dpZHRoJywgX3V0aWxzMltcImRlZmF1bHRcIl0ud2lkdGgoc291cmNlKSArIG5ld0VsUmVnaW9uLndpZHRoIC0gZWxSZWdpb24ud2lkdGgpO1xuICB9XG5cbiAgaWYgKG5ld0VsUmVnaW9uLmhlaWdodCAhPT0gZWxSZWdpb24uaGVpZ2h0KSB7XG4gICAgX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKHNvdXJjZSwgJ2hlaWdodCcsIF91dGlsczJbXCJkZWZhdWx0XCJdLmhlaWdodChzb3VyY2UpICsgbmV3RWxSZWdpb24uaGVpZ2h0IC0gZWxSZWdpb24uaGVpZ2h0KTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzE5MFxuICAvLyDnm7jlr7nkuo7lsY/luZXkvY3nva7msqHlj5jvvIzogIwgbGVmdC90b3Ag5Y+Y5LqGXG4gIC8vIOS+i+WmgiA8ZGl2ICdyZWxhdGl2ZSc+PGVsIGFic29sdXRlPjwvZGl2PlxuICBfdXRpbHMyW1wiZGVmYXVsdFwiXS5vZmZzZXQoc291cmNlLCB7XG4gICAgbGVmdDogbmV3RWxSZWdpb24ubGVmdCxcbiAgICB0b3A6IG5ld0VsUmVnaW9uLnRvcFxuICB9LCB7XG4gICAgdXNlQ3NzUmlnaHQ6IGFsaWduLnVzZUNzc1JpZ2h0LFxuICAgIHVzZUNzc0JvdHRvbTogYWxpZ24udXNlQ3NzQm90dG9tLFxuICAgIHVzZUNzc1RyYW5zZm9ybTogYWxpZ24udXNlQ3NzVHJhbnNmb3JtXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG5cbmRvbUFsaWduLl9fZ2V0T2Zmc2V0UGFyZW50ID0gX2dldE9mZnNldFBhcmVudDJbXCJkZWZhdWx0XCJdO1xuXG5kb21BbGlnbi5fX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IF9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQyW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkb21BbGlnbjtcbi8qKlxuICogIDIwMTItMDQtMjYgeWltaW5naGVAZ21haWwuY29tXG4gKiAgIC0g5LyY5YyW5pm66IO95a+56b2Q566X5rOVXG4gKiAgIC0g5oWO55SoIHJlc2l6ZVhYXG4gKlxuICogIDIwMTEtMDctMTMgeWltaW5naGVAZ21haWwuY29tIG5vdGU6XG4gKiAgIC0g5aKe5Yqg5pm66IO95a+56b2Q77yM5Lul5Y+K5aSn5bCP6LCD5pW06YCJ6aG5XG4gKiovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3Byb3BlcnR5VXRpbHMgPSByZXF1aXJlKCcuL3Byb3BlcnR5VXRpbHMnKTtcblxudmFyIFJFX05VTSA9IC9bXFwtK10/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bXFwtK10/XFxkK3wpLy5zb3VyY2U7XG5cbnZhciBnZXRDb21wdXRlZFN0eWxlWCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gZm9yY2UoeCwgeSkge1xuICByZXR1cm4geCArIHk7XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgbmFtZSwgdikge1xuICB2YXIgdmFsdWUgPSB2O1xuICBpZiAoKHR5cGVvZiBuYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihuYW1lKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgaSBpbiBuYW1lKSB7XG4gICAgICBpZiAobmFtZS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICBjc3MoZWwsIGksIG5hbWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyAncHgnO1xuICAgIH1cbiAgICBlbC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UG9zaXRpb24oZWxlbSkge1xuICB2YXIgYm94ID0gdm9pZCAwO1xuICB2YXIgeCA9IHZvaWQgMDtcbiAgdmFyIHkgPSB2b2lkIDA7XG4gIHZhciBkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQ7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBkb2NFbGVtID0gZG9jICYmIGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gIC8vIOagueaNriBHQlMg5pyA5paw5pWw5o2u77yMQS1HcmFkZSBCcm93c2VycyDpg73lt7LmlK/mjIEgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IOaWueazle+8jOS4jeeUqOWGjeiAg+iZkeS8oOe7n+eahOWunueOsOaWueW8j1xuICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIOazqO+8mmpRdWVyeSDov5jogIPomZHlh4/ljrsgZG9jRWxlbS5jbGllbnRMZWZ0L2NsaWVudFRvcFxuICAvLyDkvYbmtYvor5Xlj5HnjrDvvIzov5nmoLflj43ogIzkvJrlr7zoh7TlvZMgaHRtbCDlkowgYm9keSDmnInovrnot50v6L655qGG5qC35byP5pe277yM6I635Y+W55qE5YC85LiN5q2j56GuXG4gIC8vIOatpOWklu+8jGllNiDkvJrlv73nlaUgaHRtbCDnmoQgbWFyZ2luIOWAvO+8jOW5uOi/kOWcsOaYr+ayoeacieiwgeS8muWOu+iuvue9riBodG1sIOeahCBtYXJnaW5cblxuICB4ID0gYm94LmxlZnQ7XG4gIHkgPSBib3gudG9wO1xuXG4gIC8vIEluIElFLCBtb3N0IG9mIHRoZSB0aW1lLCAyIGV4dHJhIHBpeGVscyBhcmUgYWRkZWQgdG8gdGhlIHRvcCBhbmQgbGVmdFxuICAvLyBkdWUgdG8gdGhlIGltcGxpY2l0IDItcGl4ZWwgaW5zZXQgYm9yZGVyLiAgSW4gSUU2LzcgcXVpcmtzIG1vZGUgYW5kXG4gIC8vIElFNiBzdGFuZGFyZHMgbW9kZSwgdGhpcyBib3JkZXIgY2FuIGJlIG92ZXJyaWRkZW4gYnkgc2V0dGluZyB0aGVcbiAgLy8gZG9jdW1lbnQgZWxlbWVudCdzIGJvcmRlciB0byB6ZXJvIC0tIHRodXMsIHdlIGNhbm5vdCByZWx5IG9uIHRoZVxuICAvLyBvZmZzZXQgYWx3YXlzIGJlaW5nIDIgcGl4ZWxzLlxuXG4gIC8vIEluIHF1aXJrcyBtb2RlLCB0aGUgb2Zmc2V0IGNhbiBiZSBkZXRlcm1pbmVkIGJ5IHF1ZXJ5aW5nIHRoZSBib2R5J3NcbiAgLy8gY2xpZW50TGVmdC9jbGllbnRUb3AsIGJ1dCBpbiBzdGFuZGFyZHMgbW9kZSwgaXQgaXMgZm91bmQgYnkgcXVlcnlpbmdcbiAgLy8gdGhlIGRvY3VtZW50IGVsZW1lbnQncyBjbGllbnRMZWZ0L2NsaWVudFRvcC4gIFNpbmNlIHdlIGFscmVhZHkgY2FsbGVkXG4gIC8vIGdldENsaWVudEJvdW5kaW5nUmVjdCB3ZSBoYXZlIGFscmVhZHkgZm9yY2VkIGEgcmVmbG93LCBzbyBpdCBpcyBub3RcbiAgLy8gdG9vIGV4cGVuc2l2ZSBqdXN0IHRvIHF1ZXJ5IHRoZW0gYWxsLlxuXG4gIC8vIGllIOS4i+W6lOivpeWHj+WOu+eql+WPo+eahOi+ueahhuWQp++8jOavleern+m7mOiupCBhYnNvbHV0ZSDpg73mmK/nm7jlr7nnqpflj6PlrprkvY3nmoRcbiAgLy8g56qX5Y+j6L655qGG5qCH5YeG5piv6K6+IGRvY3VtZW50RWxlbWVudCAscXVpcmtzIOaXtuiuvue9riBib2R5XG4gIC8vIOacgOWlveemgeatouWcqCBib2R5IOWSjCBodG1sIOS4iui+ueahhiDvvIzkvYYgaWUgPCA5IGh0bWwg6buY6K6k5pyJIDJweCDvvIzlh4/ljrtcbiAgLy8g5L2G5piv6Z2eIGllIOS4jeWPr+iDveiuvue9rueql+WPo+i+ueahhu+8jGJvZHkgaHRtbCDkuZ/kuI3mmK/nqpflj6MgLGllIOWPr+S7pemAmui/hyBodG1sLGJvZHkg6K6+572uXG4gIC8vIOagh+WHhiBpZSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5bCx5pivIGJvcmRlci10b3BcbiAgLy8gaWU3IGh0bWwg5Y2z56qX5Y+j6L655qGG5pS55Y+Y5LiN5LqG44CC5rC46L+c5Li6IDJcbiAgLy8g5L2G5qCH5YeGIGZpcmVmb3gvY2hyb21lL2llOSDkuIsgZG9jRWxlbS5jbGllbnRUb3Ag5piv56qX5Y+j6L655qGG77yM5Y2z5L2/6K6+5LqGIGJvcmRlci10b3Ag5Lmf5Li6IDBcblxuICB4IC09IGRvY0VsZW0uY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgeSAtPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeCxcbiAgICB0b3A6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgdmFyIG1ldGhvZCA9ICdzY3JvbGwnICsgKHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcbiAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgdmFyIGQgPSB3LmRvY3VtZW50O1xuICAgIC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3Aodykge1xuICByZXR1cm4gZ2V0U2Nyb2xsKHcsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgdmFyIHBvcyA9IGdldENsaWVudFBvc2l0aW9uKGVsKTtcbiAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIHZhciB3ID0gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIHBvcy5sZWZ0ICs9IGdldFNjcm9sbExlZnQodyk7XG4gIHBvcy50b3AgKz0gZ2V0U2Nyb2xsVG9wKHcpO1xuICByZXR1cm4gcG9zO1xufVxuZnVuY3Rpb24gX2dldENvbXB1dGVkU3R5bGUoZWxlbSwgbmFtZSwgY3MpIHtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBjcztcbiAgdmFyIHZhbCA9ICcnO1xuICB2YXIgZCA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzYxXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoJ14oJyArIFJFX05VTSArICcpKD8hcHgpW2EteiVdKyQnLCAnaScpO1xudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTtcblxuICAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuXG4gIC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcbiAgLy8gaHR0cDovL2VyaWsuZWFlLm5ldC9hcmNoaXZlcy8yMDA3LzA3LzI3LzE4LjU0LjE1LyNjb21tZW50LTEwMjI5MVxuICAvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcbiAgLy8gYnV0IGEgbnVtYmVyIHRoYXQgaGFzIGEgd2VpcmQgZW5kaW5nLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gcGl4ZWxzXG4gIC8vIGV4Y2x1ZGUgbGVmdCByaWdodCBmb3IgcmVsYXRpdml0eVxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSBlbGVtW0NVUlJFTlRfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7XG5cbiAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IHJzTGVmdDtcbiAgfVxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuICByZXR1cm4gb3B0aW9uLnVzZUNzc0JvdHRvbSA/ICdib3R0b20nIDogZGlyO1xufVxuXG5mdW5jdGlvbiBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihkaXIpIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbn1cblxuLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG4gIHZhciBwcmVzZXRIID0gLTk5OTtcbiAgdmFyIHByZXNldFYgPSAtOTk5O1xuICB2YXIgaG9yaXpvbnRhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCdsZWZ0Jywgb3B0aW9uKTtcbiAgdmFyIHZlcnRpY2FsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ3RvcCcsIG9wdGlvbik7XG4gIHZhciBvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGhvcml6b250YWxQcm9wZXJ0eSk7XG4gIHZhciBvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbih2ZXJ0aWNhbFByb3BlcnR5KTtcblxuICBpZiAoaG9yaXpvbnRhbFByb3BlcnR5ICE9PSAnbGVmdCcpIHtcbiAgICBwcmVzZXRIID0gOTk5O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsUHJvcGVydHkgIT09ICd0b3AnKSB7XG4gICAgcHJlc2V0ViA9IDk5OTtcbiAgfVxuICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uID0gJyc7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gKDAsIF9wcm9wZXJ0eVV0aWxzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSkoZWxlbSkgfHwgJyc7XG4gICAgKDAsIF9wcm9wZXJ0eVV0aWxzLnNldFRyYW5zaXRpb25Qcm9wZXJ0eSkoZWxlbSwgJ25vbmUnKTtcbiAgfVxuICBpZiAoJ2xlZnQnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVIb3Jpem9udGFsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVtob3Jpem9udGFsUHJvcGVydHldID0gcHJlc2V0SCArICdweCc7XG4gIH1cbiAgaWYgKCd0b3AnIGluIG9mZnNldCkge1xuICAgIGVsZW0uc3R5bGVbb3Bwb3NpdGVWZXJ0aWNhbFByb3BlcnR5XSA9ICcnO1xuICAgIGVsZW0uc3R5bGVbdmVydGljYWxQcm9wZXJ0eV0gPSBwcmVzZXRWICsgJ3B4JztcbiAgfVxuICB2YXIgb2xkID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKGtleSwgb3B0aW9uKTtcbiAgICAgIHZhciBwcmVzZXQgPSBrZXkgPT09ICdsZWZ0JyA/IHByZXNldEggOiBwcmVzZXRWO1xuICAgICAgdmFyIG9mZiA9IG9yaWdpbmFsT2Zmc2V0W2tleV0gLSBvbGRba2V5XTtcbiAgICAgIGlmIChkaXIgPT09IGtleSkge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgKyBvZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnaW5hbFN0eWxlW2Rpcl0gPSBwcmVzZXQgLSBvZmY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNzcyhlbGVtLCBvcmlnaW5hbFN0eWxlKTtcbiAgLy8gZm9yY2UgcmVsYXlvdXRcbiAgZm9yY2UoZWxlbS5vZmZzZXRUb3AsIGVsZW0ub2Zmc2V0TGVmdCk7XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0IHx8ICd0b3AnIGluIG9mZnNldCkge1xuICAgICgwLCBfcHJvcGVydHlVdGlscy5zZXRUcmFuc2l0aW9uUHJvcGVydHkpKGVsZW0sIG9yaWdpbmFsVHJhbnNpdGlvbik7XG4gIH1cbiAgdmFyIHJldCA9IHt9O1xuICBmb3IgKHZhciBfa2V5IGluIG9mZnNldCkge1xuICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgIHZhciBfZGlyID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKF9rZXksIG9wdGlvbik7XG4gICAgICB2YXIgX29mZiA9IG9mZnNldFtfa2V5XSAtIG9yaWdpbmFsT2Zmc2V0W19rZXldO1xuICAgICAgaWYgKF9rZXkgPT09IF9kaXIpIHtcbiAgICAgICAgcmV0W19kaXJdID0gb3JpZ2luYWxTdHlsZVtfZGlyXSArIF9vZmY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdIC0gX29mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIHJldCk7XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShlbGVtLCBvZmZzZXQpIHtcbiAgdmFyIG9yaWdpbmFsT2Zmc2V0ID0gZ2V0T2Zmc2V0KGVsZW0pO1xuICB2YXIgb3JpZ2luYWxYWSA9ICgwLCBfcHJvcGVydHlVdGlscy5nZXRUcmFuc2Zvcm1YWSkoZWxlbSk7XG4gIHZhciByZXN1bHRYWSA9IHsgeDogb3JpZ2luYWxYWS54LCB5OiBvcmlnaW5hbFhZLnkgfTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS54ID0gb3JpZ2luYWxYWS54ICsgb2Zmc2V0LmxlZnQgLSBvcmlnaW5hbE9mZnNldC5sZWZ0O1xuICB9XG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuICAoMCwgX3Byb3BlcnR5VXRpbHMuc2V0VHJhbnNmb3JtWFkpKGVsZW0sIHJlc3VsdFhZKTtcbn1cblxuZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sIG9mZnNldCwgb3B0aW9uKSB7XG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgKDAsIF9wcm9wZXJ0eVV0aWxzLmdldFRyYW5zZm9ybU5hbWUpKCkgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSkge1xuICAgIHNldFRyYW5zZm9ybShlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc2V0TGVmdFRvcChlbGVtLCBvZmZzZXQsIG9wdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZWFjaChhcnIsIGZuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm4oYXJyW2ldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0JvcmRlckJveEZuKGVsZW0pIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGVYKGVsZW0sICdib3hTaXppbmcnKSA9PT0gJ2JvcmRlci1ib3gnO1xufVxuXG52YXIgQk9YX01PREVMUyA9IFsnbWFyZ2luJywgJ2JvcmRlcicsICdwYWRkaW5nJ107XG52YXIgQ09OVEVOVF9JTkRFWCA9IC0xO1xudmFyIFBBRERJTkdfSU5ERVggPSAyO1xudmFyIEJPUkRFUl9JTkRFWCA9IDE7XG52YXIgTUFSR0lOX0lOREVYID0gMDtcblxuZnVuY3Rpb24gc3dhcChlbGVtLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgb2xkID0ge307XG4gIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gIHZhciBuYW1lID0gdm9pZCAwO1xuXG4gIC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBvbGRbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICAgIHN0eWxlW25hbWVdID0gb3B0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICBjYWxsYmFjay5jYWxsKGVsZW0pO1xuXG4gIC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBzdHlsZVtuYW1lXSA9IG9sZFtuYW1lXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UEJNV2lkdGgoZWxlbSwgcHJvcHMsIHdoaWNoKSB7XG4gIHZhciB2YWx1ZSA9IDA7XG4gIHZhciBwcm9wID0gdm9pZCAwO1xuICB2YXIgaiA9IHZvaWQgMDtcbiAgdmFyIGkgPSB2b2lkIDA7XG4gIGZvciAoaiA9IDA7IGogPCBwcm9wcy5sZW5ndGg7IGorKykge1xuICAgIHByb3AgPSBwcm9wc1tqXTtcbiAgICBpZiAocHJvcCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IHdoaWNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjc3NQcm9wID0gdm9pZCAwO1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2JvcmRlcicpIHtcbiAgICAgICAgICBjc3NQcm9wID0gJycgKyBwcm9wICsgd2hpY2hbaV0gKyAnV2lkdGgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNzc1Byb3AgPSBwcm9wICsgd2hpY2hbaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgKz0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBjc3NQcm9wKSkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKipcbiAqIEEgY3J1ZGUgd2F5IG9mIGRldGVybWluaW5nIGlmIGFuIG9iamVjdCBpcyBhIHdpbmRvd1xuICogQG1lbWJlciB1dGlsXG4gKi9cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAvLyBtdXN0IHVzZSA9PSBmb3IgaWU4XG4gIC8qIGVzbGludCBlcWVxZXE6MCAqL1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiA9PSBvYmoud2luZG93O1xufVxuXG52YXIgZG9tVXRpbHMgPSB7fTtcblxuZWFjaChbJ1dpZHRoJywgJ0hlaWdodCddLCBmdW5jdGlvbiAobmFtZSkge1xuICBkb21VdGlsc1snZG9jJyArIG5hbWVdID0gZnVuY3Rpb24gKHJlZldpbikge1xuICAgIHZhciBkID0gcmVmV2luLmRvY3VtZW50O1xuICAgIHJldHVybiBNYXRoLm1heChcbiAgICAvLyBmaXJlZm94IGNocm9tZSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PCBib2R5LnNjcm9sbEhlaWdodFxuICAgIC8vIGllIHN0YW5kYXJkIG1vZGUgOiBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0PiBib2R5LnNjcm9sbEhlaWdodFxuICAgIGQuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgbmFtZV0sXG4gICAgLy8gcXVpcmtzIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCDmnIDlpKfnrYnkuo7lj6/op4bnqpflj6PlpJrkuIDngrnvvJ9cbiAgICBkLmJvZHlbJ3Njcm9sbCcgKyBuYW1lXSwgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdKGQpKTtcbiAgfTtcblxuICBkb21VdGlsc1sndmlld3BvcnQnICsgbmFtZV0gPSBmdW5jdGlvbiAod2luKSB7XG4gICAgLy8gcGMgYnJvd3NlciBpbmNsdWRlcyBzY3JvbGxiYXIgaW4gd2luZG93LmlubmVyV2lkdGhcbiAgICB2YXIgcHJvcCA9ICdjbGllbnQnICsgbmFtZTtcbiAgICB2YXIgZG9jID0gd2luLmRvY3VtZW50O1xuICAgIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIGRvY3VtZW50RWxlbWVudFByb3AgPSBkb2N1bWVudEVsZW1lbnRbcHJvcF07XG4gICAgLy8g5qCH5YeG5qih5byP5Y+WIGRvY3VtZW50RWxlbWVudFxuICAgIC8vIGJhY2tjb21wYXQg5Y+WIGJvZHlcbiAgICByZXR1cm4gZG9jLmNvbXBhdE1vZGUgPT09ICdDU1MxQ29tcGF0JyAmJiBkb2N1bWVudEVsZW1lbnRQcm9wIHx8IGJvZHkgJiYgYm9keVtwcm9wXSB8fCBkb2N1bWVudEVsZW1lbnRQcm9wO1xuICB9O1xufSk7XG5cbi8qXG4g5b6X5Yiw5YWD57Sg55qE5aSn5bCP5L+h5oGvXG4gQHBhcmFtIGVsZW1cbiBAcGFyYW0gbmFtZVxuIEBwYXJhbSB7U3RyaW5nfSBbZXh0cmFdICAncGFkZGluZycgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmdcbiAnYm9yZGVyJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlclxuICdtYXJnaW4nIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nICsgYm9yZGVyICsgbWFyZ2luXG4gKi9cbmZ1bmN0aW9uIGdldFdIKGVsZW0sIG5hbWUsIGV4KSB7XG4gIHZhciBleHRyYSA9IGV4O1xuICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICByZXR1cm4gbmFtZSA9PT0gJ3dpZHRoJyA/IGRvbVV0aWxzLnZpZXdwb3J0V2lkdGgoZWxlbSkgOiBkb21VdGlscy52aWV3cG9ydEhlaWdodChlbGVtKTtcbiAgfSBlbHNlIGlmIChlbGVtLm5vZGVUeXBlID09PSA5KSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy5kb2NXaWR0aChlbGVtKSA6IGRvbVV0aWxzLmRvY0hlaWdodChlbGVtKTtcbiAgfVxuICB2YXIgd2hpY2ggPSBuYW1lID09PSAnd2lkdGgnID8gWydMZWZ0JywgJ1JpZ2h0J10gOiBbJ1RvcCcsICdCb3R0b20nXTtcbiAgdmFyIGJvcmRlckJveFZhbHVlID0gbmFtZSA9PT0gJ3dpZHRoJyA/IGVsZW0ub2Zmc2V0V2lkdGggOiBlbGVtLm9mZnNldEhlaWdodDtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtLCBjb21wdXRlZFN0eWxlKTtcbiAgdmFyIGNzc0JveFZhbHVlID0gMDtcbiAgaWYgKGJvcmRlckJveFZhbHVlID09PSBudWxsIHx8IGJvcmRlckJveFZhbHVlID09PSB1bmRlZmluZWQgfHwgYm9yZGVyQm94VmFsdWUgPD0gMCkge1xuICAgIGJvcmRlckJveFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuIGNvbXB1dGVkIGNzcyBpZiBuZWNlc3NhcnlcbiAgICBjc3NCb3hWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGVYKGVsZW0sIG5hbWUpO1xuICAgIGlmIChjc3NCb3hWYWx1ZSA9PT0gbnVsbCB8fCBjc3NCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IE51bWJlcihjc3NCb3hWYWx1ZSkgPCAwKSB7XG4gICAgICBjc3NCb3hWYWx1ZSA9IGVsZW0uc3R5bGVbbmFtZV0gfHwgMDtcbiAgICB9XG4gICAgLy8gTm9ybWFsaXplICcnLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcbiAgICBjc3NCb3hWYWx1ZSA9IHBhcnNlRmxvYXQoY3NzQm94VmFsdWUpIHx8IDA7XG4gIH1cbiAgaWYgKGV4dHJhID09PSB1bmRlZmluZWQpIHtcbiAgICBleHRyYSA9IGlzQm9yZGVyQm94ID8gQk9SREVSX0lOREVYIDogQ09OVEVOVF9JTkRFWDtcbiAgfVxuICB2YXIgYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94ID0gYm9yZGVyQm94VmFsdWUgIT09IHVuZGVmaW5lZCB8fCBpc0JvcmRlckJveDtcbiAgdmFyIHZhbCA9IGJvcmRlckJveFZhbHVlIHx8IGNzc0JveFZhbHVlO1xuICBpZiAoZXh0cmEgPT09IENPTlRFTlRfSU5ERVgpIHtcbiAgICBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgICByZXR1cm4gdmFsIC0gZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInLCAncGFkZGluZyddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBjc3NCb3hWYWx1ZTtcbiAgfSBlbHNlIGlmIChib3JkZXJCb3hWYWx1ZU9ySXNCb3JkZXJCb3gpIHtcbiAgICBpZiAoZXh0cmEgPT09IEJPUkRFUl9JTkRFWCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbCArIChleHRyYSA9PT0gUEFERElOR19JTkRFWCA/IC1nZXRQQk1XaWR0aChlbGVtLCBbJ2JvcmRlciddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSkgOiBnZXRQQk1XaWR0aChlbGVtLCBbJ21hcmdpbiddLCB3aGljaCwgY29tcHV0ZWRTdHlsZSkpO1xuICB9XG4gIHJldHVybiBjc3NCb3hWYWx1ZSArIGdldFBCTVdpZHRoKGVsZW0sIEJPWF9NT0RFTFMuc2xpY2UoZXh0cmEpLCB3aGljaCwgY29tcHV0ZWRTdHlsZSk7XG59XG5cbnZhciBjc3NTaG93ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gIGRpc3BsYXk6ICdibG9jaydcbn07XG5cbi8vIGZpeCAjMTE5IDogaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTE5XG5mdW5jdGlvbiBnZXRXSElnbm9yZURpc3BsYXkoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIHZhbCA9IHZvaWQgMDtcbiAgdmFyIGVsZW0gPSBhcmdzWzBdO1xuICAvLyBpbiBjYXNlIGVsZW0gaXMgd2luZG93XG4gIC8vIGVsZW0ub2Zmc2V0V2lkdGggPT09IHVuZGVmaW5lZFxuICBpZiAoZWxlbS5vZmZzZXRXaWR0aCAhPT0gMCkge1xuICAgIHZhbCA9IGdldFdILmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgc3dhcChlbGVtLCBjc3NTaG93LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbmVhY2goWyd3aWR0aCcsICdoZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGZpcnN0ID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gIGRvbVV0aWxzWydvdXRlcicgKyBmaXJzdF0gPSBmdW5jdGlvbiAoZWwsIGluY2x1ZGVNYXJnaW4pIHtcbiAgICByZXR1cm4gZWwgJiYgZ2V0V0hJZ25vcmVEaXNwbGF5KGVsLCBuYW1lLCBpbmNsdWRlTWFyZ2luID8gTUFSR0lOX0lOREVYIDogQk9SREVSX0lOREVYKTtcbiAgfTtcbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG5cbiAgZG9tVXRpbHNbbmFtZV0gPSBmdW5jdGlvbiAoZWxlbSwgdikge1xuICAgIHZhciB2YWwgPSB2O1xuICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtKTtcbiAgICAgICAgdmFyIGlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3hGbihlbGVtKTtcbiAgICAgICAgaWYgKGlzQm9yZGVyQm94KSB7XG4gICAgICAgICAgdmFsICs9IGdldFBCTVdpZHRoKGVsZW0sIFsncGFkZGluZycsICdib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3MoZWxlbSwgbmFtZSwgdmFsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBlbGVtICYmIGdldFdISWdub3JlRGlzcGxheShlbGVtLCBuYW1lLCBDT05URU5UX0lOREVYKTtcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtaXgodG8sIGZyb20pIHtcbiAgZm9yICh2YXIgaSBpbiBmcm9tKSB7XG4gICAgaWYgKGZyb20uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIHRvW2ldID0gZnJvbVtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufVxuXG52YXIgdXRpbHMgPSB7XG4gIGdldFdpbmRvdzogZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLmRvY3VtZW50ICYmIG5vZGUuc2V0VGltZW91dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHZhciBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IGRvYy5wYXJlbnRXaW5kb3c7XG4gIH0sXG4gIG9mZnNldDogZnVuY3Rpb24gb2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHNldE9mZnNldChlbCwgdmFsdWUsIG9wdGlvbiB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRPZmZzZXQoZWwpO1xuICAgIH1cbiAgfSxcblxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGVhY2g6IGVhY2gsXG4gIGNzczogY3NzLFxuICBjbG9uZTogZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgdmFyIGkgPSB2b2lkIDA7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmV0W2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgb3ZlcmZsb3cgPSBvYmoub3ZlcmZsb3c7XG4gICAgaWYgKG92ZXJmbG93KSB7XG4gICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICByZXQub3ZlcmZsb3dbaV0gPSBvYmoub3ZlcmZsb3dbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcblxuICBtaXg6IG1peCxcbiAgZ2V0V2luZG93U2Nyb2xsTGVmdDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsTGVmdCh3KSB7XG4gICAgcmV0dXJuIGdldFNjcm9sbExlZnQodyk7XG4gIH0sXG4gIGdldFdpbmRvd1Njcm9sbFRvcDogZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsVG9wKHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsVG9wKHcpO1xuICB9LFxuICBtZXJnZTogZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjI7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHV0aWxzLm1peChyZXQsIGFyZ3NbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIHZpZXdwb3J0SGVpZ2h0OiAwXG59O1xuXG5taXgodXRpbHMsIGRvbVV0aWxzKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB1dGlscztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFRyYW5zZm9ybU5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lO1xuZXhwb3J0cy5zZXRUcmFuc2l0aW9uUHJvcGVydHkgPSBzZXRUcmFuc2l0aW9uUHJvcGVydHk7XG5leHBvcnRzLmdldFRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFRyYW5zaXRpb25Qcm9wZXJ0eTtcbmV4cG9ydHMuZ2V0VHJhbnNmb3JtWFkgPSBnZXRUcmFuc2Zvcm1YWTtcbmV4cG9ydHMuc2V0VHJhbnNmb3JtWFkgPSBzZXRUcmFuc2Zvcm1YWTtcbnZhciB2ZW5kb3JQcmVmaXggPSB2b2lkIDA7XG5cbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuICB2ZW5kb3JQcmVmaXggPSAnJztcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlO1xuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcbiAgZm9yICh2YXIga2V5IGluIGpzQ3NzTWFwKSB7XG4gICAgaWYgKGtleSArIHRlc3RQcm9wIGluIHN0eWxlKSB7XG4gICAgICB2ZW5kb3JQcmVmaXggPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2l0aW9uUHJvcGVydHknIDogJ3RyYW5zaXRpb25Qcm9wZXJ0eSc7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybU5hbWUoKSB7XG4gIHJldHVybiBnZXRWZW5kb3JQcmVmaXgoKSA/IGdldFZlbmRvclByZWZpeCgpICsgJ1RyYW5zZm9ybScgOiAndHJhbnNmb3JtJztcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG4gIHZhciBuYW1lID0gZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2l0aW9uUHJvcGVydHknKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm0obm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2Zvcm1OYW1lKCk7XG4gIGlmIChuYW1lKSB7XG4gICAgbm9kZS5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIGlmIChuYW1lICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5IHx8IG5vZGUuc3R5bGVbZ2V0VHJhbnNpdGlvbk5hbWUoKV07XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVhZKG5vZGUpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciB0cmFuc2Zvcm0gPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCd0cmFuc2Zvcm0nKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGdldFRyYW5zZm9ybU5hbWUoKSk7XG4gIGlmICh0cmFuc2Zvcm0gJiYgdHJhbnNmb3JtICE9PSAnbm9uZScpIHtcbiAgICB2YXIgbWF0cml4ID0gdHJhbnNmb3JtLnJlcGxhY2UoL1teMC05XFwtLixdL2csICcnKS5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB7IHg6IHBhcnNlRmxvYXQobWF0cml4WzEyXSB8fCBtYXRyaXhbNF0sIDApLCB5OiBwYXJzZUZsb2F0KG1hdHJpeFsxM10gfHwgbWF0cml4WzVdLCAwKSB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG59XG5cbnZhciBtYXRyaXgyZCA9IC9tYXRyaXhcXCgoLiopXFwpLztcbnZhciBtYXRyaXgzZCA9IC9tYXRyaXgzZFxcKCguKilcXCkvO1xuXG5mdW5jdGlvbiBzZXRUcmFuc2Zvcm1YWShub2RlLCB4eSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zZm9ybScpIHx8IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoZ2V0VHJhbnNmb3JtTmFtZSgpKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgIHZhciBhcnIgPSB2b2lkIDA7XG4gICAgdmFyIG1hdGNoMmQgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4MmQpO1xuICAgIGlmIChtYXRjaDJkKSB7XG4gICAgICBtYXRjaDJkID0gbWF0Y2gyZFsxXTtcbiAgICAgIGFyciA9IG1hdGNoMmQuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoaXRlbSwgMTApO1xuICAgICAgfSk7XG4gICAgICBhcnJbNF0gPSB4eS54O1xuICAgICAgYXJyWzVdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCAnbWF0cml4KCcgKyBhcnIuam9pbignLCcpICsgJyknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1hdGNoM2QgPSB0cmFuc2Zvcm0ubWF0Y2gobWF0cml4M2QpWzFdO1xuICAgICAgYXJyID0gbWF0Y2gzZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFyclsxMl0gPSB4eS54O1xuICAgICAgYXJyWzEzXSA9IHh5Lnk7XG4gICAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ21hdHJpeDNkKCcgKyBhcnIuam9pbignLCcpICsgJyknKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0VHJhbnNmb3JtKG5vZGUsICd0cmFuc2xhdGVYKCcgKyB4eS54ICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB4eS55ICsgJ3B4KSB0cmFuc2xhdGVaKDApJyk7XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9wcm9wZXJ0eVV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAvLyBpZSDov5nkuKrkuZ/kuI3mmK/lrozlhajlj6/ooYxcbiAgLypcbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O292ZXJmbG93OiBoaWRkZW5cIj5cbiAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNTBweDtoZWlnaHQ6IDEwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTtcIiBpZD1cImQ2XCI+XG4gICDlhYPntKAgNiDpq5ggMTAwcHgg5a69IDUwcHg8YnIvPlxuICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgICovXG4gIC8vIGVsZW1lbnQub2Zmc2V0UGFyZW50IGRvZXMgdGhlIHJpZ2h0IHRoaW5nIGluIGllNyBhbmQgYmVsb3cuIFJldHVybiBwYXJlbnQgd2l0aCBsYXlvdXQhXG4gIC8vICBJbiBvdGhlciBicm93c2VycyBpdCBvbmx5IGluY2x1ZGVzIGVsZW1lbnRzIHdpdGggcG9zaXRpb24gYWJzb2x1dGUsIHJlbGF0aXZlIG9yXG4gIC8vIGZpeGVkLCBub3QgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBzZXQgdG8gYXV0byBvciBzY3JvbGwuXG4gIC8vICAgICAgICBpZiAoVUEuaWUgJiYgaWVNb2RlIDwgOCkge1xuICAvLyAgICAgICAgICAgIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgLy8gICAgICAgIH1cbiAgLy8g57uf5LiA55qEIG9mZnNldFBhcmVudCDmlrnms5VcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgdmFyIHBvc2l0aW9uU3R5bGUgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jc3MoZWxlbWVudCwgJ3Bvc2l0aW9uJyk7XG4gIHZhciBza2lwU3RhdGljID0gcG9zaXRpb25TdHlsZSA9PT0gJ2ZpeGVkJyB8fCBwb3NpdGlvblN0eWxlID09PSAnYWJzb2x1dGUnO1xuXG4gIGlmICghc2tpcFN0YXRpYykge1xuICAgIHJldHVybiBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJyA/IG51bGwgOiBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICBmb3IgKHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keTsgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICBwb3NpdGlvblN0eWxlID0gX3V0aWxzMltcImRlZmF1bHRcIl0uY3NzKHBhcmVudCwgJ3Bvc2l0aW9uJyk7XG4gICAgaWYgKHBvc2l0aW9uU3R5bGUgIT09ICdzdGF0aWMnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRPZmZzZXRQYXJlbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRPZmZzZXRQYXJlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbnZhciBfZ2V0T2Zmc2V0UGFyZW50ID0gcmVxdWlyZSgnLi9nZXRPZmZzZXRQYXJlbnQnKTtcblxudmFyIF9nZXRPZmZzZXRQYXJlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0T2Zmc2V0UGFyZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICog6I635b6X5YWD57Sg55qE5pi+56S66YOo5YiG55qE5Yy65Z+fXG4gKi9cbmZ1bmN0aW9uIGdldFZpc2libGVSZWN0Rm9yRWxlbWVudChlbGVtZW50KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IHtcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiBJbmZpbml0eSxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiBJbmZpbml0eVxuICB9O1xuICB2YXIgZWwgPSAoMCwgX2dldE9mZnNldFBhcmVudDJbXCJkZWZhdWx0XCJdKShlbGVtZW50KTtcbiAgdmFyIHNjcm9sbFggPSB2b2lkIDA7XG4gIHZhciBzY3JvbGxZID0gdm9pZCAwO1xuICB2YXIgd2luU2l6ZSA9IHZvaWQgMDtcbiAgdmFyIGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAvLyBEZXRlcm1pbmUgdGhlIHNpemUgb2YgdGhlIHZpc2libGUgcmVjdCBieSBjbGltYmluZyB0aGUgZG9tIGFjY291bnRpbmcgZm9yXG4gIC8vIGFsbCBzY3JvbGxhYmxlIGNvbnRhaW5lcnMuXG4gIHdoaWxlIChlbCkge1xuICAgIC8vIGNsaWVudFdpZHRoIGlzIHplcm8gZm9yIGlubGluZSBibG9jayBlbGVtZW50cyBpbiBpZS5cbiAgICBpZiAoKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpID09PSAtMSB8fCBlbC5jbGllbnRXaWR0aCAhPT0gMCkgJiZcbiAgICAvLyBib2R5IG1heSBoYXZlIG92ZXJmbG93IHNldCBvbiBpdCwgeWV0IHdlIHN0aWxsIGdldCB0aGUgZW50aXJlXG4gICAgLy8gdmlld3BvcnQuIEluIHNvbWUgYnJvd3NlcnMsIGVsLm9mZnNldFBhcmVudCBtYXkgYmVcbiAgICAvLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHNvIGNoZWNrIGZvciB0aGF0IHRvby5cbiAgICBlbCAhPT0gYm9keSAmJiBlbCAhPT0gZG9jdW1lbnRFbGVtZW50ICYmIF91dGlsczJbXCJkZWZhdWx0XCJdLmNzcyhlbCwgJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgdmFyIHBvcyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm9mZnNldChlbCk7XG4gICAgICAvLyBhZGQgYm9yZGVyXG4gICAgICBwb3MubGVmdCArPSBlbC5jbGllbnRMZWZ0O1xuICAgICAgcG9zLnRvcCArPSBlbC5jbGllbnRUb3A7XG4gICAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHBvcy50b3ApO1xuICAgICAgdmlzaWJsZVJlY3QucmlnaHQgPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5yaWdodCxcbiAgICAgIC8vIGNvbnNpZGVyIGFyZWEgd2l0aG91dCBzY3JvbGxCYXJcbiAgICAgIHBvcy5sZWZ0ICsgZWwuY2xpZW50V2lkdGgpO1xuICAgICAgdmlzaWJsZVJlY3QuYm90dG9tID0gTWF0aC5taW4odmlzaWJsZVJlY3QuYm90dG9tLCBwb3MudG9wICsgZWwuY2xpZW50SGVpZ2h0KTtcbiAgICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBwb3MubGVmdCk7XG4gICAgfSBlbHNlIGlmIChlbCA9PT0gYm9keSB8fCBlbCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZWwgPSAoMCwgX2dldE9mZnNldFBhcmVudDJbXCJkZWZhdWx0XCJdKShlbCk7XG4gIH1cblxuICAvLyBDbGlwIGJ5IHdpbmRvdydzIHZpZXdwb3J0LlxuICBzY3JvbGxYID0gX3V0aWxzMltcImRlZmF1bHRcIl0uZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICBzY3JvbGxZID0gX3V0aWxzMltcImRlZmF1bHRcIl0uZ2V0V2luZG93U2Nyb2xsVG9wKHdpbik7XG4gIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBzY3JvbGxYKTtcbiAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBzY3JvbGxZKTtcbiAgd2luU2l6ZSA9IHtcbiAgICB3aWR0aDogX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRXaWR0aCh3aW4pLFxuICAgIGhlaWdodDogX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRIZWlnaHQod2luKVxuICB9O1xuICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBzY3JvbGxYICsgd2luU2l6ZS53aWR0aCk7XG4gIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgc2Nyb2xsWSArIHdpblNpemUuaGVpZ2h0KTtcbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG92ZXJmbG93KSB7XG4gIHZhciBwb3MgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIExlZnQgZWRnZSBpbnNpZGUgYW5kIHJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9XG5cbiAgLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICAvLyDkv53or4Hlt6bovrnnlYzlkozlj6/op4bljLrln5/lt6bovrnnlYzlr7npvZBcbiAgICBwb3MubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCwgdmlzaWJsZVJlY3QubGVmdCk7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBpbnNpZGUgYW5kIGJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9XG5cbiAgLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIC8vIOS/neivgeS4iui+ueeVjOWSjOWPr+inhuWMuuWfn+S4iui+ueeVjOWvuem9kFxuICAgIHBvcy50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCwgdmlzaWJsZVJlY3QudG9wKTtcbiAgfVxuXG4gIHJldHVybiBfdXRpbHMyW1wiZGVmYXVsdFwiXS5taXgocG9zLCBzaXplKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhZGp1c3RGb3JWaWV3cG9ydDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kb20tYWxpZ24vbGliL2FkanVzdEZvclZpZXdwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0UmVnaW9uKG5vZGUpIHtcbiAgdmFyIG9mZnNldCA9IHZvaWQgMDtcbiAgdmFyIHcgPSB2b2lkIDA7XG4gIHZhciBoID0gdm9pZCAwO1xuICBpZiAoIV91dGlsczJbXCJkZWZhdWx0XCJdLmlzV2luZG93KG5vZGUpICYmIG5vZGUubm9kZVR5cGUgIT09IDkpIHtcbiAgICBvZmZzZXQgPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5vZmZzZXQobm9kZSk7XG4gICAgdyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm91dGVyV2lkdGgobm9kZSk7XG4gICAgaCA9IF91dGlsczJbXCJkZWZhdWx0XCJdLm91dGVySGVpZ2h0KG5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB3aW4gPSBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3cobm9kZSk7XG4gICAgb2Zmc2V0ID0ge1xuICAgICAgbGVmdDogX3V0aWxzMltcImRlZmF1bHRcIl0uZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pLFxuICAgICAgdG9wOiBfdXRpbHMyW1wiZGVmYXVsdFwiXS5nZXRXaW5kb3dTY3JvbGxUb3Aod2luKVxuICAgIH07XG4gICAgdyA9IF91dGlsczJbXCJkZWZhdWx0XCJdLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgICBoID0gX3V0aWxzMltcImRlZmF1bHRcIl0udmlld3BvcnRIZWlnaHQod2luKTtcbiAgfVxuICBvZmZzZXQud2lkdGggPSB3O1xuICBvZmZzZXQuaGVpZ2h0ID0gaDtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXRSZWdpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRSZWdpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRBbGlnbk9mZnNldCA9IHJlcXVpcmUoJy4vZ2V0QWxpZ25PZmZzZXQnKTtcblxudmFyIF9nZXRBbGlnbk9mZnNldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRBbGlnbk9mZnNldCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgcmVmTm9kZVJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCkge1xuICB2YXIgeHkgPSB2b2lkIDA7XG4gIHZhciBkaWZmID0gdm9pZCAwO1xuICB2YXIgcDEgPSB2b2lkIDA7XG4gIHZhciBwMiA9IHZvaWQgMDtcblxuICB4eSA9IHtcbiAgICBsZWZ0OiBlbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogZWxSZWdpb24udG9wXG4gIH07XG5cbiAgcDEgPSAoMCwgX2dldEFsaWduT2Zmc2V0MltcImRlZmF1bHRcIl0pKHJlZk5vZGVSZWdpb24sIHBvaW50c1sxXSk7XG4gIHAyID0gKDAsIF9nZXRBbGlnbk9mZnNldDJbXCJkZWZhdWx0XCJdKShlbFJlZ2lvbiwgcG9pbnRzWzBdKTtcblxuICBkaWZmID0gW3AyLmxlZnQgLSBwMS5sZWZ0LCBwMi50b3AgLSBwMS50b3BdO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogeHkubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0sXG4gICAgdG9wOiB4eS50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdXG4gIH07XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0RWxGdXR1cmVQb3M7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRFbEZ1dHVyZVBvcy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiDojrflj5Ygbm9kZSDkuIrnmoQgYWxpZ24g5a+56b2Q54K5IOebuOWvueS6jumhtemdoueahOWdkOagh1xuICovXG5cbmZ1bmN0aW9uIGdldEFsaWduT2Zmc2V0KHJlZ2lvbiwgYWxpZ24pIHtcbiAgdmFyIFYgPSBhbGlnbi5jaGFyQXQoMCk7XG4gIHZhciBIID0gYWxpZ24uY2hhckF0KDEpO1xuICB2YXIgdyA9IHJlZ2lvbi53aWR0aDtcbiAgdmFyIGggPSByZWdpb24uaGVpZ2h0O1xuICB2YXIgeCA9IHZvaWQgMDtcbiAgdmFyIHkgPSB2b2lkIDA7XG5cbiAgeCA9IHJlZ2lvbi5sZWZ0O1xuICB5ID0gcmVnaW9uLnRvcDtcblxuICBpZiAoViA9PT0gJ2MnKSB7XG4gICAgeSArPSBoIC8gMjtcbiAgfSBlbHNlIGlmIChWID09PSAnYicpIHtcbiAgICB5ICs9IGg7XG4gIH1cblxuICBpZiAoSCA9PT0gJ2MnKSB7XG4gICAgeCArPSB3IC8gMjtcbiAgfSBlbHNlIGlmIChIID09PSAncicpIHtcbiAgICB4ICs9IHc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0QWxpZ25PZmZzZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZG9tLWFsaWduL2xpYi9nZXRBbGlnbk9mZnNldC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1RyYW5zaXRpb24gPSByZXF1aXJlKCcuL1RyYW5zaXRpb24nKTtcblxudmFyIF9UcmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBmYWRlIGluIG9yIGZhZGUgb3V0IGFuaW1hdGlvblxuICAgKi9cbiAgXCJpblwiOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVW5tb3VudCB0aGUgY29tcG9uZW50IChyZW1vdmUgaXQgZnJvbSB0aGUgRE9NKSB3aGVuIGl0IGlzIGZhZGVkIG91dFxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgZmFkZSBpbiBhbmltYXRpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50cywgaWYgaXQgaXMgaW5pdGlhbGx5XG4gICAqIHNob3duXG4gICAqL1xuICB0cmFuc2l0aW9uQXBwZWFyOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRHVyYXRpb24gb2YgdGhlIGZhZGUgYW5pbWF0aW9uIGluIG1pbGxpc2Vjb25kcywgdG8gZW5zdXJlIHRoYXQgZmluaXNoaW5nXG4gICAqIGNhbGxiYWNrcyBhcmUgZmlyZWQgZXZlbiBpZiB0aGUgb3JpZ2luYWwgYnJvd3NlciB0cmFuc2l0aW9uIGVuZCBldmVudHMgYXJlXG4gICAqIGNhbmNlbGVkXG4gICAqL1xuICB0aW1lb3V0OiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBmYWRlcyBpblxuICAgKi9cbiAgb25FbnRlcjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IHN0YXJ0cyB0byBmYWRlIGluXG4gICAqL1xuICBvbkVudGVyaW5nOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBoYXMgY29tcG9uZW50IGZhZGVkIGluXG4gICAqL1xuICBvbkVudGVyZWQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgZmFkZXMgb3V0XG4gICAqL1xuICBvbkV4aXQ6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBzdGFydHMgdG8gZmFkZSBvdXRcbiAgICovXG4gIG9uRXhpdGluZzogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGhhcyBmYWRlZCBvdXRcbiAgICovXG4gIG9uRXhpdGVkOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgXCJpblwiOiBmYWxzZSxcbiAgdGltZW91dDogMzAwLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2Vcbn07XG5cbnZhciBGYWRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEZhZGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBGYWRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24yW1wiZGVmYXVsdFwiXSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKHRoaXMucHJvcHMuY2xhc3NOYW1lLCAnZmFkZScpLFxuICAgICAgZW50ZXJlZENsYXNzTmFtZTogJ2luJyxcbiAgICAgIGVudGVyaW5nQ2xhc3NOYW1lOiAnaW4nXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBGYWRlO1xufShfcmVhY3QyW1wiZGVmYXVsdFwiXS5Db21wb25lbnQpO1xuXG5GYWRlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZhZGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZhZGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLXRyYW5zaXRpb24vYnVpbGQvRmFkZS5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3RpbnBlckJlZUNvcmUgPSByZXF1aXJlKCd0aW5wZXItYmVlLWNvcmUnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8v5piv5ZCm5piv5omL6aOO55C05pWI5p6cXG4gIGFjY29yZGlvbjogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmJvb2wsXG4gIC8v5r+A5rS755qE6aG5XG4gIGFjdGl2ZUtleTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueSxcbiAgLy/pu5jorqTnmoTmv4DmtLvnmoTpoblcbiAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MltcImRlZmF1bHRcIl0uUHJvcFR5cGVzLmFueSxcbiAgLy/pgInkuK3lh73mlbBcbiAgb25TZWxlY3Q6IF9yZWFjdDJbXCJkZWZhdWx0XCJdLlByb3BUeXBlcy5mdW5jLFxuICByb2xlOiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY2NvcmRpb246IGZhbHNlLFxuICBjbHNQcmVmaXg6ICd1LXBhbmVsLWdyb3VwJ1xufTtcblxuLy8gVE9ETzogVXNlIHVuY29udHJvbGxhYmxlLlxuXG52YXIgUGFuZWxHcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQYW5lbEdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYW5lbEdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhbmVsR3JvdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSk7XG5cbiAgICBfdGhpcy5oYW5kbGVTZWxlY3QgPSBfdGhpcy5oYW5kbGVTZWxlY3QuYmluZChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUtleTogcHJvcHMuZGVmYXVsdEFjdGl2ZUtleVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGFuZWxHcm91cC5wcm90b3R5cGUuaGFuZGxlU2VsZWN0ID0gZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGtleSwgZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGtleSwgZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlS2V5ID09PSBrZXkpIHtcbiAgICAgIGtleSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleToga2V5IH0pO1xuICB9O1xuXG4gIFBhbmVsR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY2NvcmRpb24gPSBfcHJvcHMuYWNjb3JkaW9uLFxuICAgICAgICBwcm9wc0FjdGl2ZUtleSA9IF9wcm9wcy5hY3RpdmVLZXksXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBkZWZhdWx0QWN0aXZlS2V5ID0gX3Byb3BzLmRlZmF1bHRBY3RpdmVLZXksXG4gICAgICAgIG9uU2VsZWN0ID0gX3Byb3BzLm9uU2VsZWN0LFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgb3RoZXJzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydhY2NvcmRpb24nLCAnYWN0aXZlS2V5JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkZWZhdWx0QWN0aXZlS2V5JywgJ29uU2VsZWN0JywgJ3N0eWxlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgIHZhciBhY3RpdmVLZXkgPSB2b2lkIDA7XG4gICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHNBY3RpdmVLZXkgIT0gbnVsbCA/IHByb3BzQWN0aXZlS2V5IDogdGhpcy5zdGF0ZS5hY3RpdmVLZXk7XG4gICAgICBvdGhlcnMucm9sZSA9IG90aGVycy5yb2xlIHx8ICd0YWJsaXN0JztcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIGNsYXNzZXNbJycgKyBjbHNQcmVmaXhdID0gdHJ1ZTtcblxuICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMltcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgY2xhc3NlcylcbiAgICAgIH0pLFxuICAgICAgX3JlYWN0MltcImRlZmF1bHRcIl0uQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFfcmVhY3QyW1wiZGVmYXVsdFwiXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkLnByb3BzLnN0eWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFjY29yZGlvbikge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2hpbGRQcm9wcywge1xuICAgICAgICAgICAgaGVhZGVyUm9sZTogJ3RhYicsXG4gICAgICAgICAgICBwYW5lbFJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBjaGlsZC5wcm9wcy5ldmVudEtleSA9PT0gYWN0aXZlS2V5LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICgwLCBfdGlucGVyQmVlQ29yZS5jcmVhdGVDaGFpbmVkRnVuY3Rpb24pKF90aGlzMi5oYW5kbGVTZWxlY3QsIGNoaWxkLnByb3BzLm9uU2VsZWN0KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFBhbmVsR3JvdXA7XG59KF9yZWFjdDJbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7XG5cblBhbmVsR3JvdXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUGFuZWxHcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGFuZWxHcm91cDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtcGFuZWwvYnVpbGQvUGFuZWxHcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0J1dHRvbiA9IHJlcXVpcmUoJy4vQnV0dG9uJyk7XG5cbnZhciBfQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0J1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9CdXR0b24yW1wiZGVmYXVsdFwiXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtYnV0dG9uL2J1aWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZhdWx0cyhvYmosIGRlZmF1bHRzKSB7IHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGVmYXVsdHMpOyBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHsgdmFyIGtleSA9IGtleXNbaV07IHZhciB2YWx1ZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZGVmYXVsdHMsIGtleSk7IGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTsgfSB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBfZGVmYXVsdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5bC65a+4XHJcbiAgICAgKi9cbiAgICBzaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc20nLCAneGcnLCAnbGcnXSksXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5qC35byPXHJcbiAgICAgKi9cbiAgICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUg5b2i54q2XHJcbiAgICAgKi9cbiAgICBzaGFwZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2Jsb2NrJywgJ3JvdW5kJywgJ3NxdWFyZWQnLCAnZmxvYXRpbmcnLCAncGlsbFJpZ2h0JywgJ3BpbGxMZWZ0JywgJ2JvcmRlcicsICdpY29uJ10pLFxuICAgIC8qKlxyXG4gICAgKiBAdGl0bGUg57G75Z6LXHJcbiAgICAqL1xuICAgIGNvbG9yczogX3JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnYWNjZW50JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlcicsICdkZWZhdWx0J10pLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOaYr+WQpuemgeeUqFxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBkaXNhYmxlZDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxyXG4gICAgICogQHRpdGxlIOexu+WQjVxyXG4gICAgICogQHZlSWdub3JlXHJcbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXHJcbiAgICAgKiBAdGl0bGUgPGJ1dHRvbj4g55qEIHR5cGVcclxuICAgICAqIEB2ZUlnbm9yZVxyXG4gICAgICovXG4gICAgaHRtbFR5cGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0J10pXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBodG1sVHlwZTogJ2J1dHRvbicsXG4gICAgY2xzUHJlZml4OiAndS1idXR0b24nXG5cbn07XG5cbnZhciBzaXplTWFwID0ge1xuICAgIHNtOiAnc20nLFxuICAgIHhnOiAneGcnLFxuICAgIGxnOiAnbGcnXG59LFxuICAgIGNvbG9yc01hcCA9IHtcbiAgICBwcmltYXJ5OiAncHJpbWFyeScsXG4gICAgYWNjZW50OiAnYWNjZW50JyxcbiAgICBzdWNjZXNzOiAnc3VjY2VzcycsXG4gICAgaW5mbzogJ2luZm8nLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBkYW5nZXI6ICdkYW5nZXInXG59LFxuICAgIHNoYXBlTWFwID0ge1xuICAgIGJsb2NrOiAnYmxvY2snLFxuICAgIHJvdW5kOiAncm91bmQnLFxuICAgIGJvcmRlcjogJ2JvcmRlcicsXG4gICAgc3F1YXJlZDogJ3NxdWFyZWQnLFxuICAgIGZsb2F0aW5nOiAnZmxvYXRpbmcnLFxuICAgIHBpbGxSaWdodDogJ3BpbGwtcmlnaHQnLFxuICAgIHBpbGxMZWZ0OiAncGlsbC1sZWZ0JyxcbiAgICBpY29uOiAnaWNvbidcbn07XG5cbnZhciBCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICBCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjb2xvcnMgPSBfcHJvcHMuY29sb3JzLFxuICAgICAgICAgICAgc2hhcGUgPSBfcHJvcHMuc2hhcGUsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzaXplID0gX3Byb3BzLnNpemUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGh0bWxUeXBlID0gX3Byb3BzLmh0bWxUeXBlLFxuICAgICAgICAgICAgY2xzUHJlZml4ID0gX3Byb3BzLmNsc1ByZWZpeCxcbiAgICAgICAgICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY29sb3JzJywgJ3NoYXBlJywgJ2Rpc2FibGVkJywgJ2NsYXNzTmFtZScsICdzaXplJywgJ2NoaWxkcmVuJywgJ2h0bWxUeXBlJywgJ2Nsc1ByZWZpeCddKTtcblxuICAgICAgICB2YXIgY2xzT2JqID0ge307XG4gICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGNsc09ialtjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2l6ZU1hcFtzaXplXSkge1xuICAgICAgICAgICAgY2xzT2JqW2Nsc1ByZWZpeCArICctJyArIHNpemVNYXBbc2l6ZV1dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hhcGVNYXBbc2hhcGVdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgc2hhcGVNYXBbc2hhcGVdXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yc01hcFtjb2xvcnNdKSB7XG4gICAgICAgICAgICBjbHNPYmpbY2xzUHJlZml4ICsgJy0nICsgY29sb3JzTWFwW2NvbG9yc11dID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbHNQcmVmaXgsIGNsc09iaik7XG4gICAgICAgIHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgdHlwZTogaHRtbFR5cGUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSwgb3RoZXJzKSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEJ1dHRvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtYnV0dG9uL2J1aWxkL0J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi9Gb3JtQ29udHJvbCc7XG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbCA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCxQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnYmVlLWljb24nO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudENsYXNzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuZWxlbWVudCxcblx0XHRQcm9wVHlwZXMuc3RyaW5nXG5cdF0pLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbScsJ21kJywnbGcnXSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnRDbGFzczogJ2lucHV0JyxcbiAgY2xzUHJlZml4OiAndS1mb3JtLWNvbnRyb2wnLFxuICB0eXBlOiAndGV4dCcsXG4gIHNpemU6ICdtZCdcbn07XG5cblxuY2xhc3MgRm9ybUNvbnRyb2wgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBzaG93U2VhcmNoOiB0cnVlXG4gICAgICB9XG4gIH1cblxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTplLHNob3dTZWFyY2g6ZmFsc2V9KTtcbiAgICBcbiAgfVxuXG4gIGNsZWFyVmFsdWUgPSAoKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0VmFsdWUpLnZhbHVlPSBcIlwiO1xuICAgIHRoaXMucmVmcy5pbnB1dFZhbHVlLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1NlYXJjaDp0cnVlfSk7XG4gICAgXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7XG4gICAgICBjb21wb25lbnRDbGFzczogQ29tcG9uZW50LFxuICAgICAgdHlwZSxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc2l6ZSxcbiAgICAgIGNsc1ByZWZpeCxcbiAgICAgIC4uLm90aGVyc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG5cbiAgICAvLyBpbnB1dFt0eXBlPVwiZmlsZVwiXSDkuI3lupTor6XmnInnsbvlkI0gLmZvcm0tY29udHJvbC5cbiAgICBsZXQgY2xhc3Nlcz17fTtcbiAgICBpZihzaXplKSB7XG4gICAgICAgIGNsYXNzZXNbYCR7c2l6ZX1gXSA9IHRydWU7XG4gICAgfVxuICAgIGlmKHR5cGU9PVwic2VhcmNoXCIpIHtcbiAgICAgICAgY2xhc3Nlc1tgdS1pbnB1dC1zZWFyY2hgXSA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IGNsYXNzTmFtZXM7XG4gICAgaWYgKHR5cGUgIT09ICdmaWxlJykge1xuICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xzUHJlZml4LGNsYXNzZXMpO1xuICAgIH1cblxuICAgIGlmKHR5cGU9PVwic2VhcmNoXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2hvd1NlYXJjaCk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1LWlucHV0LXNlYXJjaCB1LWlucHV0LWFmZml4LXdyYXBwZXJcIiB7Li4ub3RoZXJzfT5cbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgIHJlZj1cImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCBjbGFzc05hbWVzKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInUtaW5wdXQtc3VmZml4XCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93U2VhcmNoICYmIDxJY29uIHR5cGU9XCJ1Zi1zZWFyY2hcIiAvPn1cbiAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5zaG93U2VhcmNoICYmIDxJY29uIG9uQ2xpY2s9e3RoaXMuY2xlYXJWYWx1ZX0gIHR5cGU9XCJ1Zi1jbG9zZS1jXCIgLz59XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5vdGhlcnN9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc05hbWUsIGNsYXNzTmFtZXMpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkZvcm1Db250cm9sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkZvcm1Db250cm9sLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2w7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Gb3JtQ29udHJvbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9JY29uID0gcmVxdWlyZSgnLi9JY29uJyk7XG5cbnZhciBfSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX0ljb24yW1wiZGVmYXVsdFwiXTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWUtaWNvbi9idWlsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IF9kZWZhdWx0cyhzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcblx0dHlwZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcblxufTtcbi8qKlxuICogIGJhZGdlIOm7mOiupOaYvuekuuWGheWuuTFcbiAqL1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcblx0Y2xzUHJlZml4OiAndWYnXG59O1xuXG52YXIgSWNvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhJY29uLCBfQ29tcG9uZW50KTtcblxuXHRmdW5jdGlvbiBJY29uKHByb3BzKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEljb24pO1xuXG5cdFx0cmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXHR9XG5cblx0SWNvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdCAgICB0eXBlID0gX3Byb3BzLnR5cGUsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG5cdFx0ICAgIGNsc1ByZWZpeCA9IF9wcm9wcy5jbHNQcmVmaXgsXG5cdFx0ICAgIG90aGVycyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsndHlwZScsICdjbGFzc05hbWUnLCAnY2xzUHJlZml4J10pO1xuXG5cdFx0dmFyIGNsc09iaiA9IHt9O1xuXG5cdFx0dmFyIGNsYXNzTmFtZXMgPSAoMCwgX2NsYXNzbmFtZXMyW1wiZGVmYXVsdFwiXSkoY2xzUHJlZml4LCB0eXBlKTtcblxuXHRcdHJldHVybiBfcmVhY3QyW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KCdpJywgX2V4dGVuZHMoe30sIG90aGVycywgeyBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbXCJkZWZhdWx0XCJdKShjbGFzc05hbWVzLCBjbGFzc05hbWUpIH0pKTtcblx0fTtcblxuXHRyZXR1cm4gSWNvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkljb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuSWNvbi5Qcm9wVHlwZXMgPSBfcmVhY3QuUHJvcFR5cGVzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEljb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmVlLWljb24vYnVpbGQvSWNvbi5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAdGl0bGUg5bi455So5LiJ56eN5bC65a+4IElucHV0XG4gKiBAZGVzY3JpcHRpb24gXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi8uLi9zcmMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vMSBleHRlbmRzIENvbXBvbmVudCB7XG5cdFxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8tZm9ybS1jb250cm9sXCI+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5vbkNoYW5nZX0+PC9idXR0b24+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIndyYXBlclwiPjxGb3JtQ29udHJvbCBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHRcIiBzaXplPVwic21cIi8+XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIndyYXBlclwiPjxGb3JtQ29udHJvbCBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHRcIi8+XHQ8L3NwYW4+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIndyYXBlclwiPjxGb3JtQ29udHJvbCBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHRcIiBzaXplPVwibGdcIi8+PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3cmFwZXJcIj48Rm9ybUNvbnRyb2wgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0XCIgdHlwZT1cInNlYXJjaFwiIHNpemU9XCJsZ1wiLz48L3NwYW4+XHRcblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZW1vL2RlbW9saXN0L0RlbW8xLmpzIiwiLyoqXG4gKiBAdGl0bGUg5LiN5Y+v55SoIElucHV0XG4gKiBAZGVzY3JpcHRpb24gXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi8uLi9zcmMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vMiBleHRlbmRzIENvbXBvbmVudCB7XG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxGb3JtQ29udHJvbCBkaXNhYmxlZCBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHRcIi8+XHRcblx0XHQpXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGVtby9kZW1vbGlzdC9EZW1vMi5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUhBO0FBUUE7QUFDQTs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBUEE7QUFVQTtBQUNBOzs7O0FBRUE7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9DQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNVVBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdmdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDek5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN2lCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFTQTtBQUVBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWxCQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFjQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTs7QUE5RUE7QUFDQTtBQStFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBUEE7Ozs7O0FBUUE7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTs7OztBQWJBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFQQTs7Ozs7QUFRQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFOQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=demo.js.map