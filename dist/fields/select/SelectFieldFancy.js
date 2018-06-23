'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SelectFieldFancy = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _downshift = require('downshift');

var _downshift2 = _interopRequireDefault(_downshift);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a select field
 *
 * Wraps [downshift](https://github.com/paypal/downshift)
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
var SelectFieldFancy = exports.SelectFieldFancy = function SelectFieldFancy(props) {
	/**
  * Dispatches new value(s) to parent
  *
  * @param selection
  * @returns {*}
  */
	function changeHandler(selection) {
		return props.onValueChange(selection);
	}

	return _react2.default.createElement(
		_downshift2.default,
		{
			inputValue: props.value,
			defaultInputValue: props.value,
			onChange: changeHandler,
			itemToString: function itemToString(item) {
				return item ? item.value : '';
			},
			defaultIsOpen: props.isOpen
		},
		function (_ref) {
			var getInputProps = _ref.getInputProps,
			    getItemProps = _ref.getItemProps,
			    isOpen = _ref.isOpen,
			    inputValue = _ref.inputValue,
			    highlightedIndex = _ref.highlightedIndex,
			    selectedItem = _ref.selectedItem;
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('input', getInputProps({
					id: props.id
				})),
				isOpen ? _react2.default.createElement(
					'div',
					null,
					props.options.filter(function (item) {
						return !inputValue || item.value.includes(inputValue);
					}).map(function (item, index) {
						return _react2.default.createElement(
							'div',
							_extends({
								key: item.value
							}, getItemProps({
								key: item.value,
								index: index,
								item: item,
								style: {
									backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
									fontWeight: selectedItem === item ? 'bold' : 'normal'
								},
								className: 'caldera-config-option'
							})),
							item.value
						);
					})
				) : null
			);
		}
	);
};

SelectFieldFancy.propTypes = _extends({}, _propTypes3.fieldPropTypes, {
	isOpen: _propTypes2.default.bool
});