'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MagicItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../propTypes');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes2 = require('prop-types');

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Create magic item for option of magic selects
 *
 * This can not be a functional component
 * https://github.com/reactjs/react-autocomplete/pull/293#issuecomment-371617758
 *
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
var MagicItem = exports.MagicItem = function (_React$PureComponent) {
	_inherits(MagicItem, _React$PureComponent);

	function MagicItem() {
		_classCallCheck(this, MagicItem);

		return _possibleConstructorReturn(this, (MagicItem.__proto__ || Object.getPrototypeOf(MagicItem)).apply(this, arguments));
	}

	_createClass(MagicItem, [{
		key: 'render',


		/**
   * Render magic item components
   */
		value: function render() {
			return _react2.default.createElement(this.props.elementType, {
				style: { background: this.props.isHighlighted ? this.props.highlightColor : this.props.notHighlighterColor },
				className: (0, _classnames2.default)(this.props.className, 'magic-input-option'),
				onClick: this.props.onClick
			}, [_react2.default.createElement(this.props.innerElementType, {
				key: 'left--' + this.props.innerKey,
				className: (0, _classnames2.default)('magic-item-value', 'magic-item-left')
			}, this.props.item.value), _react2.default.createElement(this.props.innerElementType, {
				key: 'right--' + this.props.innerKey,
				className: (0, _classnames2.default)('magic-item-label', 'magic-item-right')
			}, this.props.item.label)]);
		}
	}]);

	return MagicItem;
}(_react2.default.PureComponent);

/**
 * Prop definition for allowed element types
 * @type {shim}
 */


var elementTypesProp = _propTypes3.default.oneOf(['div', 'span']);
/**
 * Prop definitions for MagicItem component
 *
 * @type {{item: shim, isHighlighted: shim, className: shim, highlightColor: shim, notHighlighterColor: shim}}
 */
MagicItem.propTypes = {
	elementType: elementTypesProp,
	innerElementType: elementTypesProp,
	item: _propTypes3.default.shape(_propTypes.optionShape),
	isHighlighted: _propTypes3.default.bool,
	className: _propTypes3.default.string,
	highlightColor: _propTypes3.default.string,
	notHighlighterColor: _propTypes3.default.string,
	innerKey: _propTypes3.default.string.isRequired,
	onClick: _propTypes3.default.func
};

/**
 * Default props for the MagicItem component
 *
 * @type {{isHighlighted: boolean, highlightColor: string, notHighlightedColor: string}}
 */
MagicItem.defaultProps = {
	elementType: 'div',
	innerElementType: 'span',
	isHighlighted: false,
	highlightColor: 'lightgray',
	notHighlightedColor: 'white'
};