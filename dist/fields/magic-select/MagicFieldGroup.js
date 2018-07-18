'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MagicFieldGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MagicItem = require('./MagicItem');

var _ButtonGroup = require('../button-group/ButtonGroup');

var _MagicSelect = require('./MagicSelect');

var _RenderGroup = require('../../RenderGroup');

var _Message = require('../messages/Message');

var _FieldGroup = require('../FieldGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Encapsulates a complete Magic Select field group including label and the type chooser and the input
 */
var MagicFieldGroup = exports.MagicFieldGroup = function (_React$PureComponent) {
	_inherits(MagicFieldGroup, _React$PureComponent);

	/**
  * Create a MagicFieldGroup component
  *
  * @param {Object} props
  */
	function MagicFieldGroup(props) {
		_classCallCheck(this, MagicFieldGroup);

		var _this = _possibleConstructorReturn(this, (MagicFieldGroup.__proto__ || Object.getPrototypeOf(MagicFieldGroup)).call(this, props));

		_this.state = {
			currentListType: props.defaultList,
			isOpen: props.isOpen
		};
		_this.onChange = _this.onChange.bind(_this);
		_this.items = _this.items.bind(_this);
		_this.onChange = _this.onChange.bind(_this);
		_this.onSelect = _this.onSelect.bind(_this);
		_this.onInputFocus = _this.onInputFocus.bind(_this);
		_this.renderItem = _this.renderItem.bind(_this);
		_this.onInputBlur = _this.onInputBlur.bind(_this);
		_this.onChangeListType = _this.onChangeListType.bind(_this);
		_this.listTypeOptions = _this.listTypeOptions.bind(_this);
		return _this;
	}

	/**
  * Handle direct change events
  * @param {String|number} newValue
  */


	_createClass(MagicFieldGroup, [{
		key: 'onChange',
		value: function onChange(newValue) {
			this.props.onValueChange(newValue);
		}

		/**
   * Handle when the field gets focus
   */

	}, {
		key: 'onInputFocus',
		value: function onInputFocus() {
			this.setState({ isOpen: true });
		}

		/**
   * Handle when the field is blurred
   */

	}, {
		key: 'onInputBlur',
		value: function onInputBlur() {
			this.setState({ isOpen: false });
		}

		/**
   * Handle when the option is chosen
   * @param {String|number} value
   */

	}, {
		key: 'onSelect',
		value: function onSelect(value) {
			this.props.onValueChange(value);
			this.setState({ isOpen: false });
		}

		/**
   * Update list of tags to show
   * @param {String}newType
   */

	}, {
		key: 'onChangeListType',
		value: function onChangeListType(newType) {
			if (!this.state.isOpen) {
				this.setState({ isOpen: true });
			}
			this.setState({ currentListType: newType });
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
			return _react2.default.createElement(_MagicItem.MagicItem, { item: item, isHighlighted: isHighlighted, innerKey: item.innerKey, key: item.innerKey });
		}

		/**
   * Create the list of items
   *
   * @return {Array}
   */

	}, {
		key: 'items',
		value: function items() {
			var optionsOrEmpty = function optionsOrEmpty(options) {
				return Array.isArray(options) && options.length ? options : [];
			};

			var items = [];

			if (optionsOrEmpty(this.props.options).length) {
				items = optionsOrEmpty(this.props.options);
			} else if ('system' === this.state.currentListType) {
				items = optionsOrEmpty(this.props.systemTagsList);
			} else {
				items = optionsOrEmpty(this.props.fieldsList);
			}

			if (items.length) {
				items.forEach(function (item, itemIndex) {
					items[itemIndex].innerKey = item.value + '-' + itemIndex;
				});
			} else {
				items.push({
					value: null,
					label: null,
					innerKey: this.props.id
				});
			}

			return items;
		}

		/**
   * Options for type chooser
   *
   * @return {*[]}
   */

	}, {
		key: 'listTypeOptions',
		value: function listTypeOptions() {
			return [{
				value: 'fields',
				label: '%',
				ariaLabel: 'Select from field values'
			}, {
				value: 'system',
				label: '{}',
				ariaLabel: 'Select from system values'
			}];
		}

		/**
   * Render MagicFieldGroup component
   * @return {*}
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{
					className: (0, _classnames2.default)(MagicFieldGroup.classNames.fieldWrapper, _RenderGroup.RenderGroup.classNames.fieldWrapper, this.props.className)
				},
				_react2.default.createElement(_FieldGroup.FieldGroup.Label, {
					id: this.props.id,
					label: this.props.label
				}),
				this.props.message.message && _react2.default.createElement(_Message.Message, {
					message: this.props.message
				}),
				this.state.isOpen && _react2.default.createElement(_ButtonGroup.ButtonGroup, {
					onChange: this.onChangeListType,
					options: this.listTypeOptions(),
					value: this.state.currentListType
				}),
				_react2.default.createElement(_MagicSelect.MagicSelect, {
					id: this.props.id,
					options: this.items(),
					onValueChange: this.props.onValueChange,
					value: this.props.value,
					isRequired: this.props.isRequired,
					isOpen: this.state.isOpen,
					onBlur: this.onInputBlur,
					onFocus: this.onInputFocus,
					className: this.props.fieldClassName
				})
			);
		}
	}]);

	return MagicFieldGroup;
}(_react2.default.PureComponent);

/**
 * Prop definitions for MagicFieldGroup component
 */


MagicFieldGroup.propTypes = _propTypes.magicGroupPropTypes;

/**
 * Default property values for MagicFieldGroup component
 *
 * @type {{}}
 */
MagicFieldGroup.defaultProps = {
	defaultList: 'fields',
	isOpen: false,
	message: {
		error: false,
		message: ''
	},
	type: 'magic'
};

/**
 * The names of classes used for HTML elements in MagicFieldGroup component
 * @type {{fieldWrapper: string, input: string, option: string}}
 */
MagicFieldGroup.classNames = {
	fieldWrapper: 'caldera-magic-select-group',
	input: 'caldera-magic-input',
	option: 'caldera-magic-option'
};