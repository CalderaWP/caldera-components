'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RenderGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fieldSetFactory = require('./fields/factories/fieldSetFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Component for rendering an array of field configs
 */
var RenderGroup = exports.RenderGroup = function (_React$Component) {
	_inherits(RenderGroup, _React$Component);

	/**
  * Constructor for RenderGroup component
  * @param {Object} props
  */
	function RenderGroup(props) {
		_classCallCheck(this, RenderGroup);

		var _this = _possibleConstructorReturn(this, (RenderGroup.__proto__ || Object.getPrototypeOf(RenderGroup)).call(this, props));

		_this.createComponents = _this.createComponents.bind(_this);

		return _this;
	}

	/**
  * Create components
  *
  * @return {Array}
  */


	_createClass(RenderGroup, [{
		key: 'createComponents',
		value: function createComponents() {
			return (0, _fieldSetFactory.fieldSetFactory)(this.props.configFields);
		}

		/**
   * Renderer for RenderGroup component
   *
   * @return {*}
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{
					className: this.props.className ? this.props.className : RenderGroup.classNames.renderGroupWrapper
				},
				this.createComponents().map(function (configField, i) {
					return _react2.default.createElement('div', {
						key: i,
						className: RenderGroup.classNames.fieldGroup
					}, configField);
				})
			);
		}
	}]);

	return RenderGroup;
}(_react2.default.Component);

/**
 * Prop definitions for RenderGroup component
 * @type {{configFields: *, className: shim}}
 */


RenderGroup.propTypes = {
	configFields: _propTypes2.default.array.isRequired,
	className: _propTypes2.default.string
};

/**
 * Classnames for elements (wrappers, field groups and form fields)
 *
 * @type {{renderGroupWrapper: string, fieldWrapper: string}}
 */
RenderGroup.classNames = {
	renderGroupWrapper: 'caldera-config-field-setup',
	fieldGroup: 'caldera-config-group',
	fieldWrapper: 'caldera-config-field',
	input: 'field-config'

};