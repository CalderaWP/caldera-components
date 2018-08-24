'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RenderGroup = require('../../RenderGroup');

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = exports.Button = function Button(props) {
	/**
  * Get the className prop for inputs
  *
  * @return {String}
  */
	function inputClassName() {
		return (0, _classnames2.default)(props.fieldClassName, _RenderGroup.RenderGroup.classNames.input);
	}

	if ('submit' === props.inputType) {
		return _react2.default.createElement('input', {
			type: 'submit',
			id: props.id,
			className: inputClassName(),
			'aria-describedby': props.ariaDescribedbyAttr,
			required: props.isRequired,
			onClick: props.onClick,
			value: props.value,
			disabled: props.disabled,
			onBlur: props.onBlur,
			onFocus: props.onFocus
		});
	}

	return _react2.default.createElement(
		'button',
		{
			id: props.id,
			className: inputClassName(),
			'aria-describedby': props.ariaDescribedbyAttr,
			onClick: props.onClick,
			disabled: props.disabled,
			onBlur: props.onBlur,
			onFocus: props.onFocus
		},
		props.value
	);
};

var propTypes = _propTypes.fieldPropTypes;
delete propTypes.onValueChange;

/**
 * Prop type definitions for Button Component
 * @type {{id: (*), fieldClassName: (*), help: shim, value: shim, onValueChange: (*), inputType: shim, onClick: *}}
 */
Button.propTypes = _extends({}, propTypes, {
	innerType: _propTypes3.default.oneOf(['submit', 'button']),
	onClick: _propTypes3.default.func.isRequired
});

Button.defaultProps = {
	inputType: 'submit'
};