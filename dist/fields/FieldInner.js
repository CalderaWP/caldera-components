'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldInner = undefined;

var _propTypes = require('./propTypes');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./input/Input');

var _SelectField = require('./select/SelectField');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates the field inside of a field group
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
var FieldInner = exports.FieldInner = function FieldInner(props) {
	function idAttrFromProps() {
		return (0, _util.ariaDescribedbyAttr)(props.id, props.help);
	}

	switch (props.type) {
		case 'select':
		case 'dropdown':
			return _react2.default.createElement(_SelectField.SelectField, {
				id: props.id,
				fieldClassName: props.fieldClassName,
				ariaDescribedbyAttr: idAttrFromProps(),
				value: props.value,
				onValueChange: props.onValueChange,
				inputType: props.inputType,
				options: props.opt
			});
		default:
		case 'input':
			return _react2.default.createElement(_Input.Input, {
				id: props.id,
				fieldClassName: props.fieldClassName,
				ariaDescribedbyAttr: idAttrFromProps(),
				value: props.value,
				onValueChange: props.onValueChange,
				inputType: props.inputType
			});
	}
};

/**
 * propTypes for FieldInner component
 *
 * @type {{options, ariaDescribedbyAttr}}
 */
FieldInner.propTypes = _propTypes.fieldPropTypes;

/**
 * Default props for FieldInner component
 * @type {{help: string}}
 */
FieldInner.defaultProps = {
	help: ''
};