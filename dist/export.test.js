"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

var _fields = require("./fields");

var fields = _interopRequireWildcard(_fields);

var _factories = require("./fields/factories");

var factories = _interopRequireWildcard(_factories);

var _conditionalLogic = require("./conditional-logic");

var _conditionalLogic2 = _interopRequireDefault(_conditionalLogic);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
});