'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Input = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = function Input(props) {
	function changeHandler(event) {
		return props.onValueChange(event.target.value);
	}
	return _react2.default.createElement('input', {
		type: props.inputType,
		id: props.id,
		className: props.fieldClassName,
		'aria-describedby': props.ariaDescribedbyAttr,
		required: props.isRequired,
		onChange: changeHandler,
		value: props.value
	});
};

Input.propTypes = _propTypes.fieldPropTypes;

Input.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false,
	inputType: 'text'
};