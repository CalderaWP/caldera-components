'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StatusIndicator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A status indicator componet with CF Admin classes expected for CSS
 * @param props
 * @return {*}
 * @constructor
 */
var StatusIndicator = exports.StatusIndicator = function StatusIndicator(props) {
	if (!props.show) {
		return null;
	}
	var className = 'cf-alert';
	if (props.success) {
		className = className + ' cf-alert-success';
	} else {
		className = className + ' cf-alert-error';
	}

	return _react2.default.createElement(
		'div',
		{ className: 'cf-alert-wrap' },
		_react2.default.createElement(
			'p',
			{
				className: className
			},
			props.message
		)
	);
};
/**
 * Default props for the StatusIndicator compoents
 * @type {{message: shim, success: shim, show: shim}}
 */
StatusIndicator.propTypes = {
	message: _propTypes2.default.string,
	success: _propTypes2.default.bool,
	show: _propTypes2.default.bool
};