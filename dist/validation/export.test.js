'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _getValidatorsFromConfigField = require('./getValidatorsFromConfigField');

var _getValidatorsFromConfigField2 = _interopRequireDefault(_getValidatorsFromConfigField);

var _checkValidatorsForConfigField = require('./checkValidatorsForConfigField');

var _checkValidatorsForConfigField2 = _interopRequireDefault(_checkValidatorsForConfigField);

var _checkValidatorsForConfigFields = require('./checkValidatorsForConfigFields');

var _checkValidatorsForConfigFields2 = _interopRequireDefault(_checkValidatorsForConfigFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CalderaValidators export', function () {

	it('exports getValidatorsFromConfigField', function () {
		expect(_typeof(_index2.default.getValidatorsFromConfigField)).toEqual('function');
	});

	it('exports checkValidatorsForConfigFields', function () {
		expect(_typeof(_index2.default.checkValidatorsForConfigFields)).toEqual('function');
	});

	it('exports checkValidatorsForConfigFields as checkValidatorsForConfigFields', function () {
		expect(_index2.default.checkValidatorsForConfigFields).toEqual(_checkValidatorsForConfigField2.default);
	});

	it('exports getValidatorsFromConfigField as getValidatorsFromConfigField', function () {
		expect(_index2.default.getValidatorsFromConfigField).toEqual(_getValidatorsFromConfigField2.default);
	});

	it('exports checkValidatorsForConfigField as checkValidatorsForConfigField', function () {
		expect(_index2.default.checkValidatorsForConfigField).toEqual(_checkValidatorsForConfigFields2.default);
	});

	it('exports checkValidatorsForConfigField', function () {
		expect(_typeof(_index2.default.checkValidatorsForConfigField)).toEqual('function');
	});

	it('exports isEmpty', function () {
		expect(_typeof(_index2.default.isEmpty)).toEqual('object');
	});

	it('exports messageStrings', function () {
		expect(_typeof(_index2.default.messageStrings)).toEqual('object');
	});

	it('exports reduceConfigFieldsToValues', function () {
		expect(_typeof(_index2.default.reduceConfigFieldsToValues)).toEqual('function');
	});

	it('can call a function on isEmpty export ', function () {
		expect(_index2.default.isEmpty.string('roy@hiroy.club')).toEqual(false);
	});

	it('exports isValid', function () {
		expect(_typeof(_index2.default.isValid)).toEqual('object');
	});

	it('exports isValidOrEmpty', function () {
		it('exports isValidOrEmpty', function () {
			expect(_typeof(_index2.default.isValid.isValidOrEmpty)).toEqual('object');
		});
	});

	it('can call a function on isValid export ', function () {
		expect(_index2.default.isValid.email('roy@hiroy.club')).toEqual(true);
	});

	it('can get English message strings', function () {
		expect(_typeof(_index2.default.messageStrings.getMessageStrings('en'))).toEqual('object');
	});
});