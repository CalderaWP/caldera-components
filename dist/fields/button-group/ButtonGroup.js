'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ButtonGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a button group field
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
var ButtonGroup = exports.ButtonGroup = function ButtonGroup(props) {
	/**
  * Dispatches new value(s) to parent
  *
  * @param selection
  * @returns {*}
  */
	function changeHandler(selection) {
		return props.onChange(selection);
	}

	/**
  * Render a button group
  */
	return _react2.default.createElement(
		'div',
		{
			role: 'group'
		},
		props.options.map(function (option) {
			return _react2.default.createElement(
				'button',
				{
					'aria-label': option.ariaLabel ? option.ariaLabel : option.label,
					key: option.value,
					className: props.value === option.value ? 'selected' : 'not-selected',
					onClick: function onClick() {
						return changeHandler(option.value);
					}
				},
				option.hasOwnProperty('icon') && _react2.default.createElement('span', { className: option.icon }),
				!option.hasOwnProperty('icon') && _react2.default.createElement(
					_react2.default.Fragment,
					null,
					option.label
				)
			);
		})
	);
};

/**
 * Prop definition for select fields
 *
 * @type {{}}
 */
ButtonGroup.propTypes = {
	onChange: _propTypes3.default.func.isRequired,
	options: _propTypes3.default.arrayOf(_propTypes3.default.shape(_extends({}, _propTypes.optionShape, {
		icon: _propTypes3.default.string,
		ariaLabel: _propTypes3.default.string
	}))),
	value: _propTypes3.default.oneOfType([_propTypes3.default.number, _propTypes3.default.string])
};

/**
 * Default props for select fields
 *
 * @type {{options: Array}}
 */
ButtonGroup.defaultProps = {
	options: []
};