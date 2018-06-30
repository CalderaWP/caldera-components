'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Message = exports.MESSAGE_CLASS = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _messagePropTypes = require('./messagePropTypes');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The class that message components always wrap messages in
 * @type {string}
 */
var MESSAGE_CLASS = exports.MESSAGE_CLASS = 'caldera-components-message';

/**
 * Prop for showing a validation message
 *
 * Use or for errors and such
 *
 * @param {object}  props
 * @return {*}
 * @constructor
 */
var Message = exports.Message = function Message(props) {
	var _props$message = props.message,
	    message = _props$message.message,
	    error = _props$message.error;

	if (!message || '' === message) {
		return _react2.default.createElement(_react2.default.Fragment, null);
	}
	return _react2.default.createElement(
		'div',
		{
			className: (0, _classnames2.default)(props.className, MESSAGE_CLASS, {
				'has-error': error,
				'caldera-components-error': error,
				'caldera-components-not-error': !error

			})
		},
		message
	);
};

/**
 * Prop types for Message components
 *
 * @type {{className: shim, message}}
 */
Message.propTypes = {
	className: _propTypes2.default.string,
	message: _messagePropTypes.messagePropShape
};