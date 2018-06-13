'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _propTypes = require('./propTypes');

var _FieldInner = require('./FieldInner');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldGroup = exports.FieldGroup = function FieldGroup(props) {
	function idAttrFromProps() {
		return (0, _util.ariaDescribedbyAttr)(props.id, props.help);
	}

	return _react2.default.createElement(
		'div',
		{
			className: 'caldera-config-group'
		},
		_react2.default.createElement(
			'label',
			{
				htmlFor: props.id
			},
			props.label
		),
		(0, _FieldInner.FieldInner)({
			id: props.id,
			fieldClassName: (0, _classnames2.default)('field-config', {
				required: props.isRequired,
				'block-input': props.isBlockInput
			}),
			help: props.help,
			value: props.value,
			onValueChange: props.onValueChange,
			inputType: props.inputType
		}),
		props.help && _react2.default.createElement(
			'p',
			{
				id: '' + idAttrFromProps(),
				className: 'description'
			},
			props.help
		)
	);
};

FieldGroup.propTypes = _propTypes.fieldGroupPropTypes;

FieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};