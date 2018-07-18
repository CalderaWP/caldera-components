'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldInner = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('./propTypes');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./input/Input');

var _SelectField = require('./select/SelectField');

var _util = require('./util');

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RenderGroup = require('../RenderGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates the field inside of a field group
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
var FieldInner = exports.FieldInner = function FieldInner(props) {

	/**
  * Get the ID for the description element if it will be created
  *
  * @return {String|null}
  */
	function ariaIdAttr() {
		return (0, _util.ariaDescribedbyAttr)(props.id, props.help);
	}

	/**
  * Get the className prop for the
  *
  * @return {String}
  */
	function inputClassName() {
		return (0, _classnames2.default)([props.fieldClassName, _RenderGroup.RenderGroup.classNames.input]);
	}

	switch (props.type) {
		case 'select':
		case 'dropdown':
			var options = Array.isArray(props.options) ? props.options : [];
			return _react2.default.createElement(_SelectField.SelectField, {
				id: props.id,
				fieldClassName: inputClassName(),
				ariaDescribedbyAttr: ariaIdAttr(),
				value: props.value,
				onValueChange: props.onValueChange,
				inputType: props.inputType,
				options: options,
				disabled: props.disabled,
				onBlur: props.onBlur,
				onFocus: props.onFocus
			});
		default:
		case 'input':
			return _react2.default.createElement(_Input.Input, {
				id: props.id,
				fieldClassName: inputClassName(),
				ariaDescribedbyAttr: ariaIdAttr(),
				value: props.value,
				onValueChange: props.onValueChange,
				inputType: props.inputType,
				disabled: props.disabled,
				onBlur: props.onBlur,
				onFocus: props.onFocus
			});
	}
};

/**
 * propTypes for FieldInner component
 *
 * @type {{options, ariaDescribedbyAttr}}
 */
FieldInner.propTypes = _extends({}, _propTypes.fieldInnerPropTypes, {
	type: _propTypes3.default.string
});

/**
 * Default props for FieldInner component
 * @type {{help: string}}
 */
FieldInner.defaultProps = {
	help: '',
	type: 'input'
};