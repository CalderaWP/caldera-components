'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _propTypes = require('./propTypes');

var _FieldInner = require('./FieldInner');

var _RenderGroup = require('../RenderGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Represents one configField -- wrapper, label and input.
 *
 * @param props
 * @return {*}
 * @constructor
 */
var FieldGroup = exports.FieldGroup = function FieldGroup(props) {

	/**
  * Creates the id attribute
  * @return {String}
  */
	function idAttrForHelpElement() {
		return (0, _util.ariaDescribedbyAttr)(props.id, props.help);
	}

	/**
  * Based on type, render the field.
  *
  * @return {*}
  */
	function fieldInner(fieldProps) {
		function getFieldClassName(conditionalClassNames) {
			return (0, _classnames2.default)(_extends({
				required: fieldProps.isRequired
			}, conditionalClassNames));
		}

		//Fieldsets are rendered recursively.
		if ('fieldset' === fieldProps.type) {
			return _react2.default.createElement(
				'fieldset',
				{
					id: props.id
				},
				_react2.default.createElement(
					'legend',
					null,
					props.label
				),
				props.options.map(function (option) {
					/**
      * Is this option the checked value?
      * @param {object}option
      * @param {String|number|Array} currentValue
      * @return {boolean}
      */
					function isCheckedOption(option, currentValue) {
						if (Array.isArray(currentValue)) {
							return currentValue.includes(option.value);
						}
						return option.value === currentValue;
					}

					//Call this same function, as a regular checkbox
					return _react2.default.createElement(
						_react2.default.Fragment,
						{
							key: props.id + '-' + option.value
						},
						fieldInner({
							type: 'input',
							inputType: 'checkbox',
							id: props.id + '-' + option.value,
							value: isCheckedOption(option, props.value),
							fieldClassName: getFieldClassName({
								'fieldset-checkbox': true
							}),
							label: option.label,
							onValueChange: function onValueChange() {
								var values = props.value;
								if (!Array.isArray(values)) {
									if ('string' === typeof values || 'number' === typeof values) {
										values = [values];
									} else {
										values = [];
									}
								}
								values = (0, _util.addOrRemoveFromArray)(option.value, values);
								props.onValueChange(values);
							}
						})
					);
				})
			);
		} else if ('hidden' === fieldProps.inputType) {
			return (0, _FieldInner.FieldInner)({
				type: props.type,
				id: props.id,
				fieldClassName: getFieldClassName(),
				value: fieldProps.value,
				onValueChange: fieldProps.onValueChange,
				inputType: fieldProps.inputType
			});
		} else {
			return _react2.default.createElement(
				'div',
				{
					className: _RenderGroup.RenderGroup.classNames.fieldWrapper
				},
				_react2.default.createElement(
					'label',
					{
						htmlFor: fieldProps.id
					},
					fieldProps.label
				),
				(0, _FieldInner.FieldInner)({
					type: fieldProps.type,
					id: fieldProps.id,
					fieldClassName: getFieldClassName({
						'block-input': fieldProps.isBlockInput
					}),
					help: fieldProps.help,
					value: fieldProps.value,
					onValueChange: fieldProps.onValueChange,
					inputType: fieldProps.inputType,
					options: fieldProps.options
				}),
				fieldProps.help && _react2.default.createElement(
					'p',
					{
						id: '' + idAttrForHelpElement(),
						className: 'description'
					},
					fieldProps.help
				)
			);
		}
	}

	/**
  * Render field group
  */
	return fieldInner(props);
};

FieldGroup.propTypes = _propTypes.fieldGroupPropTypes;

FieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};