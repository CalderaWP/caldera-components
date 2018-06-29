'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Input = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RenderGroup = require('../../RenderGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Input component for any HTML5 input type
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
var Input = exports.Input = function Input(props) {
	/**
  * Dispatches value of input when it changes
  * @param event
  * @return {*}
  */
	function changeHandler(event) {
		return props.onValueChange(event.target.value);
	}

	/**
  * Dispatches value when checkbox is checked
  * @return {*}
  */
	function checkboxChangeHandler() {
		return props.onValueChange(!props.value);
	}

	/**
  * Get the className prop for inputs
  *
  * @return {String}
  */
	function inputClassName() {
		return (0, _classnames2.default)(props.fieldClassName, _RenderGroup.RenderGroup.classNames.input);
	}

	if ('checkbox' === props.inputType) {
		return _react2.default.createElement('input', {
			type: 'checkbox',
			id: props.id,
			className: inputClassName(),
			'aria-describedby': props.ariaDescribedbyAttr,
			required: props.isRequired,
			onChange: checkboxChangeHandler,
			defaultChecked: props.value,
			disabled: props.disabled
		});
	}

	return _react2.default.createElement('input', {
		type: props.inputType,
		id: props.id,
		className: inputClassName(),
		'aria-describedby': props.ariaDescribedbyAttr,
		required: props.isRequired,
		onChange: changeHandler,
		value: props.value,
		disabled: props.disabled
	});
};

/**
 * Prop definitions for Input components
 */
Input.propTypes = _propTypes.fieldPropTypes;

/**
 * Default props for Input Component
 *
 * @type {{ariaDescribedbyAttr: string, isRequired: boolean, inputType: string}}
 */
Input.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false,
	inputType: 'text'
};