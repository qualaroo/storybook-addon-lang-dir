"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Button = _theming.styled.button`
  outline: none;
  color: #999;
  background: none;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #1EA7FD;
  }
`;

class TextDirectionSwitcher extends _react.default.Component {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "toggleDirection", function () {
      const optionIndex = _this.state.activeOptionIndex === 0 ? 1 : 0;
      const {
        value
      } = _this.options[optionIndex];

      _this.setState({
        activeOptionIndex: optionIndex
      });

      _this.setActiveDir(value);
    });

    this.options = [{
      name: 'LTR',
      value: 'ltr'
    }, {
      name: 'RTL',
      value: 'rtl'
    }];
    this.state = {
      activeOptionIndex: 0
    };
    props.api.on('storyRendered', function () {
      const {
        value
      } = _this.options[_this.state.activeOptionIndex];

      _this.setActiveDir(value);
    });
  }

  setActiveDir(value) {
    const iframeTargetElement = document.getElementById('storybook-preview-iframe').contentWindow.document.body.parentNode;
    iframeTargetElement.setAttribute('dir', value);
  }

  render() {
    const {
      name
    } = this.options[this.state.activeOptionIndex];
    return _react.default.createElement(Button, {
      type: "button",
      onClick: this.toggleDirection
    }, name);
  }

}

var _default = TextDirectionSwitcher;
exports.default = _default;