'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MagicSelect = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _reactAutocomplete = require('react-autocomplete');

var _reactAutocomplete2 = _interopRequireDefault(_reactAutocomplete);

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

var _MagicItem = require('./MagicItem');

var _MagicFieldGroup = require('./MagicFieldGroup');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Encapsulates a complete Magic Select field
 */
var MagicSelect = exports.MagicSelect = function (_React$PureComponent) {
	_inherits(MagicSelect, _React$PureComponent);

	/**
  * Create a MagicSelect component
  *
  * @param {Object} props
  */
	function MagicSelect(props) {
		_classCallCheck(this, MagicSelect);

		var _this = _possibleConstructorReturn(this, (MagicSelect.__proto__ || Object.getPrototypeOf(MagicSelect)).call(this, props));

		_this.onChange = _this.onChange.bind(_this);
		_this.onChange = _this.onChange.bind(_this);
		_this.onSelect = _this.onSelect.bind(_this);
		_this.onInputFocus = _this.onInputFocus.bind(_this);
		_this.renderItem = _this.renderItem.bind(_this);
		_this.onInputBlur = _this.onInputBlur.bind(_this);
		_this.getItemValue = _this.getItemValue.bind(_this);
		return _this;
	}

	/**
  * Handle direct change events
  *
  * @param {Event} event
  */


	_createClass(MagicSelect, [{
		key: 'onChange',
		value: function onChange(event) {
			this.props.onValueChange(event.target.value);
		}

		/**
   * Handle when the field gets focus
   */

	}, {
		key: 'onInputFocus',
		value: function onInputFocus() {
			if ('function' === typeof this.props.onFocus) {
				this.props.onFocus();
			}
		}

		/**
   * Handle when the field is blurred
   */

	}, {
		key: 'onInputBlur',
		value: function onInputBlur() {
			if ('function' === typeof this.props.onBlur) {
				this.props.onBlur();
			}
		}

		/**
   * Handle when the option is chosen
   * @param {String|number} value
   */

	}, {
		key: 'onSelect',
		value: function onSelect(value) {
			this.props.onValueChange(value);
		}

		/**
   * Render option
   *
   * @param {object} item
   * @param {bool} isHighlighted
   * @return {*}
   */

	}, {
		key: 'renderItem',
		value: function renderItem(item, isHighlighted) {
			return _react2.default.createElement(_MagicItem.MagicItem, { item: item, isHighlighted: isHighlighted, innerKey: item.innerKey, key: item.innerKey, onClick: this.onSelect });
		}

		/**
   * Get the value of the item
   * @param {Object} item
   * @return {*}
   */

	}, {
		key: 'getItemValue',
		value: function getItemValue(item) {
			return item.value;
		}

		/**
   * Render MagicSelect component
   * @return {*}
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_reactAutocomplete2.default, {
				getItemValue: this.getItemValue,
				items: this.props.options,
				inputProps: {
					id: this.props.id,
					value: this.props.value,
					className: (0, _classnames2.default)(_MagicFieldGroup.MagicFieldGroup.classNames.input, _MagicFieldGroup.MagicFieldGroup.classNames.input + '-' + this.props.id, this.props.className),
					onFocus: this.onInputFocus,
					onBlur: this.onInputBlur,
					onClick: this.onChange
				},
				renderItem: this.renderItem,
				value: this.props.value,
				onChange: this.onChange,
				open: this.props.isOpen,
				selectOnBlur: true,
				onSelect: this.onSelect
			});
		}
	}]);

	return MagicSelect;
}(_react2.default.PureComponent);

/**
 * Prop definitions for MagicSelect component
 */


MagicSelect.propTypes = {
	id: _propTypes3.default.string.isRequired,
	options: _propTypes.optionsShapeProp,
	isRequired: _propTypes3.default.bool,
	help: _propTypes3.default.string,
	value: _propTypes.valuePropType,
	onValueChange: _propTypes.onValueChangePropType,
	disabled: _propTypes3.default.bool,
	isOpen: _propTypes3.default.bool,
	onBlur: _propTypes3.default.func,
	onFocus: _propTypes3.default.func,
	className: _propTypes3.default.string
};

/**
 * Default property values for MagicSelect component
 *
 * @type {{}}
 */
MagicSelect.defaultProps = {
	defaultList: 'fields',
	isOpen: false,
	options: []
};