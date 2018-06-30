'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messagePropShape = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The shape of the message object passed to Message compoent
 *
 * @type {shim}
 */
var messagePropShape = exports.messagePropShape = _propTypes2.default.shape({
  error: _propTypes2.default.bool,
  text: _propTypes2.default.string
});