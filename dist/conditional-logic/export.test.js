'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('conditionals export', function () {
	it('exports checkConfigFieldConditionals', function () {
		expect(_typeof(_index2.default.checkConfigFieldConditionals)).toEqual('function');
	});

	it('exports checkConfigFieldsConditionals', function () {
		expect(_typeof(_index2.default.checkConfigFieldsConditionals)).toEqual('function');
	});

	it('exports reduceConfigFieldsToValues', function () {
		expect(_typeof(_index2.default.reduceConfigFieldsToValues)).toEqual('function');
	});
});