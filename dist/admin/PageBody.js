'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageBody = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper for an admin page's content
 *
 * @since 1.7.0
 *
 * @param props
 * @returns {*}
 * @constructor
 */
var PageBody = exports.PageBody = function PageBody(props) {
  return _react2.default.createElement(
    'div',
    {
      style: { marginTop: '75px' },
      className: 'caldera-forms-admin-page-wrap'
    },
    props.children
  );
};