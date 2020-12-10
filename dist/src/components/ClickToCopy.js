"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ClickToCopy = function ClickToCopy(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? 'Copy' : _ref$children,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;

  function handleClick() {
    navigator.clipboard.writeText(text).then(function () {
      /* clipboard successfully set */
      onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
    }, function (err) {
      /* clipboard write failed */
      onError === null || onError === void 0 ? void 0 : onError(err);
    });
  }

  return /*#__PURE__*/_react["default"].createElement("span", {
    style: style,
    onClick: handleClick
  }, children);
};

ClickToCopy.propTypes = {
  /**
   * Text to copy
   */
  text: _propTypes["default"].string.isRequired,

  /**
   * Target of the click event
   */
  children: _propTypes["default"].element.isRequired,

  /**
   * Success Callback
   */
  onSuccess: _propTypes["default"].func,

  /**
   * Error Callback
   */
  onError: _propTypes["default"].func,

  /**
   * Wrapper style
   */
  style: _propTypes["default"].object
};
ClickToCopy.defaultProps = {
  text: '',
  children: 'Copy'
};
var _default = ClickToCopy;
exports["default"] = _default;

//# sourceMappingURL=ClickToCopy.jsx.map