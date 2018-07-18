'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.magicGroupPropTypes = exports.optionsShapeProp = exports.optionShape = exports.fieldPropTypes = exports.fieldInnerPropTypes = exports.fieldGroupPropTypes = exports.inputTypeProp = exports.onValueChangePropType = exports.valuePropType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _messagePropTypes = require('./messages/messagePropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PropType for the field value used in multiple components
 *
 * @type {shim}
 */
var valuePropType = exports.valuePropType = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array, _propTypes2.default.bool]);

/**
 * PropType for the field value change event used in multiple components
 *
 * @type {shim}
 */
var onValueChangePropType = exports.onValueChangePropType = _propTypes2.default.func.isRequired;

/**
 * Proptypes for Input component
 * @type {shim}
 */
var inputTypeProp = exports.inputTypeProp = _propTypes2.default.string;

/**
 * PropTypes for field groups
 *
 * @type {{id: (boolean|shim|*), isBlockInput: shim, isRequired: shim, help: shim, label: (boolean|shim|*), type: shim, value: shim, onValueChange: (boolean|shim|*), inputType: shim}}
 */
var fieldGroupPropTypes = exports.fieldGroupPropTypes = {
	id: _propTypes2.default.string.isRequired,
	isBlockInput: _propTypes2.default.bool,
	isRequired: _propTypes2.default.bool,
	help: _propTypes2.default.string,
	label: _propTypes2.default.string.isRequired,
	type: _propTypes2.default.oneOf(['input', 'select', 'fieldset', 'magic']),
	value: valuePropType,
	onValueChange: onValueChangePropType,
	options: _propTypes2.default.array,
	inputType: inputTypeProp,
	disabled: _propTypes2.default.bool,
	message: _messagePropTypes.messagePropShape,
	onBlur: _propTypes2.default.func,
	onFocus: _propTypes2.default.func
};

/**
 * PropTypes for the InnerField component
 *
 * @type {{id: (boolean|shim|*), fieldClassName: (boolean|shim|*), help: shim, value: shim, onValueChange: (boolean|shim|*), inputType: shim}}
 */
var fieldInnerPropTypes = exports.fieldInnerPropTypes = {
	id: _propTypes2.default.string.isRequired,
	fieldClassName: _propTypes2.default.string.isRequired,
	help: _propTypes2.default.string,
	value: valuePropType,
	onValueChange: onValueChangePropType,
	inputType: inputTypeProp,
	ariaDescribedbyAttr: _propTypes2.default.string,
	onBlur: _propTypes2.default.func,
	onFocus: _propTypes2.default.func
};

var fieldPropTypes = exports.fieldPropTypes = fieldInnerPropTypes;

/**
 * The shape of one option for a select field
 *
 * @type {{label: shim, value: shim}}
 */
var optionShape = exports.optionShape = {
	label: _propTypes2.default.string,
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

/**
 * Shape of options prop for select fields
 *
 * @type {shim}
 */
var optionsShapeProp = exports.optionsShapeProp = _propTypes2.default.arrayOf(_propTypes2.default.shape(optionShape));

var magicGroupPropTypes = exports.magicGroupPropTypes = _extends({}, fieldGroupPropTypes, {
	fieldsList: optionsShapeProp,
	systemTagsList: optionsShapeProp,
	defaultList: _propTypes2.default.string,
	isOpen: _propTypes2.default.bool,
	type: _propTypes2.default.string
});