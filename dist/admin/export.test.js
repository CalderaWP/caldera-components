'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _CalderaHeader = require('./CalderaHeader');

var _PageBody = require('./PageBody');

var _StatusIndicator = require('./StatusIndicator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Admin components export', function () {

	it('Exports CalderaHeader', function () {
		expect(_typeof(_index2.default.CalderaHeader)).toBe(typeof _CalderaHeader.CalderaHeader === 'undefined' ? 'undefined' : _typeof(_CalderaHeader.CalderaHeader));
	});

	it('Exports PageBody', function () {
		expect(_typeof(_index2.default.PageBody)).toBe(typeof _PageBody.PageBody === 'undefined' ? 'undefined' : _typeof(_PageBody.PageBody));
	});

	it('Exports StatusIndicator', function () {
		expect(_typeof(_index2.default.StatusIndicator)).toBe(typeof _StatusIndicator.StatusIndicator === 'undefined' ? 'undefined' : _typeof(_StatusIndicator.StatusIndicator));
	});
});