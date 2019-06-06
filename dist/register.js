"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = _interopRequireWildcard(require("@storybook/addons"));

var _constants = require("./constants");

var _TextDirectionSwitcher = _interopRequireDefault(require("./components/TextDirectionSwitcher"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons.default.register(_constants.ADDON_ID, function (api) {
  _addons.default.add(_constants.ADDON_ID, {
    title: 'Text direction switcher',
    type: _addons.types.TOOL,
    render: function () {
      return _react.default.createElement(_TextDirectionSwitcher.default, {
        api: api
      });
    }
  });
});