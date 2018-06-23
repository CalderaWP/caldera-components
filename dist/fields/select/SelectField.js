'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SelectField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RenderGroup = require('../../RenderGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a select field
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
var SelectField = exports.SelectField = function SelectField(props) {
	/**
  * Dispatches new value(s) to parent
  *
  * @param selection
  * @returns {*}
  */
	function changeHandler(selection) {
		return props.onValueChange(selection);
	}

	/**
  * Get the className prop for the select element
  *
  * @return {String}
  */
	function selectClassNames() {
		return (0, _classnames2.default)(props.fieldClassName, _RenderGroup.RenderGroup.classNames.input);
	}

	return _react2.default.createElement(
		'select',
		{
			id: props.id,
			className: selectClassNames(),
			value: props.value,
			onChange: changeHandler
		},
		props.options.map(function (item, i) {
			var key = 'string' === typeof item.value ? item.value : i;
			return _react2.default.createElement(
				'option',
				{
					key: key,
					className: 'caldera-config-option',
					value: item.value
				},
				item.label
			);
		})
	);
};

/**
 * Prop definition for select fields
 *
 * @type {{}}
 */
SelectField.propTypes = _extends({}, _propTypes.fieldPropTypes);

/**
 * Default props for select fields
 *
 * @type {{options: Array}}
 */
SelectField.defaultProps = {
	options: []
};