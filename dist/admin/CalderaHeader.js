"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalderaHeader = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates the Caldera admin page header
 *
 * @param props
 * @returns {*}
 * @constructor
 */
var CalderaHeader = exports.CalderaHeader = function CalderaHeader(props) {
	return _react2.default.createElement(
		"div",
		{ className: "caldera-editor-header" },
		_react2.default.createElement(
			"ul",
			{ className: "caldera-editor-header-nav" },
			_react2.default.createElement(
				"li",
				{ className: "caldera-editor-logo" },
				_react2.default.createElement(
					"span",
					{ className: "caldera-forms-name" },
					"Caldera Forms: ",
					props.name ? props.name : 'Caldera Forms'
				)
			),
			props.children
		)
	);
};