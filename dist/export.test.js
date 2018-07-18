'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('conditionals export', function () {
	it('exports RenderGroup', function () {
		expect(_typeof(_index2.default.RenderGroup)).toEqual('function');
	});
	it('exports fields', function () {
		expect(_typeof(_index2.default.fields)).toEqual('object');
	});
	it('exports factories', function () {
		expect(_typeof(_index2.default.factories)).toEqual('object');
	});
	it('exports conditionals', function () {
		expect(_typeof(_index2.default.conditionals)).toEqual('object');
	});

	it('exports validation', function () {
		expect(_typeof(_index2.default.validation)).toEqual('object');
	});

	it('exports admin', function () {
		expect(_typeof(_index2.default.Admin)).toEqual('object');
	});
});