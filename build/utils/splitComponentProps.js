"use strict";

exports.__esModule = true;
exports["default"] = splitComponentProps;
function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;

  var parentProps = {};
  var childProps = {};

  Object.entries(props).forEach(function (_ref) {
    var propName = _ref[0];
    var propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}
module.exports = exports['default'];