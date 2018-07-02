'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _messageStrings = require('./messageStrings');

var _strings = require('./strings');

var _strings2 = _interopRequireDefault(_strings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('strings export', function () {
	it('has English strings', function () {
		expect(_typeof(_strings2.default.en)).toEqual('object');
	});

	it('Has Spanish strings', function () {
		expect(_typeof(_strings2.default.es)).toEqual('object');
	});
});

describe('getMessageStrings', function () {

	it('gets the English strings when requested', function () {
		expect((0, _messageStrings.getMessageStrings)('en')).toEqual(_strings2.default.en);
	});

	it('gets the English strings invalid language requested', function () {
		expect((0, _messageStrings.getMessageStrings)('hfasdhasd')).toEqual(_strings2.default.en);
	});

	it('gets the Spanish strings when requested', function () {
		expect((0, _messageStrings.getMessageStrings)('es')).toEqual(_strings2.default.es);
	});

	it('gets the Spanish strings "es" is default and invalid language requested', function () {
		expect((0, _messageStrings.getMessageStrings)('111', 'es')).toEqual(_strings2.default.es);
	});

	it('merges strings with passed on object', function () {
		expect((0, _messageStrings.getMessageStrings)({
			required: 'MUST ENTER'
		}).required).toEqual('MUST ENTER');
	});

	it('merges strings with english when passed on object', function () {
		expect((0, _messageStrings.getMessageStrings)({
			required: 'MUST ENTER'
		}).defaultMessage).toEqual(_strings2.default.en.defaultMessage);
	});

	it('merges strings with Spanish when passed on object and "es" as default', function () {
		expect((0, _messageStrings.getMessageStrings)({
			required: 'MUST ENTER'
		}, 'es').defaultMessage).toEqual(_strings2.default.es.defaultMessage);
	});

	it('merges strings with english when passed on object and an invalid default language ', function () {
		expect((0, _messageStrings.getMessageStrings)({
			required: 'MUST ENTER'
		}, 'adsadssdas').required).toEqual('MUST ENTER');
	});

	it('merges strings with english when passed on object and an invalid default language', function () {
		expect((0, _messageStrings.getMessageStrings)({
			required: 'MUST ENTER'
		}, 'adsadssdas').defaultMessage).toEqual(_strings2.default.en.defaultMessage);
	});
});

describe('getMessageStringByType', function () {
	it('finds email message in Spanish by type', function () {
		expect((0, _messageStrings.getMessageStringByType)('email', 'es')).toEqual(_strings2.default.es.type.email);
	});

	it('finds url message in Spanish by type', function () {
		expect((0, _messageStrings.getMessageStringByType)('url', 'es')).toEqual(_strings2.default.es.type.url);
	});

	it('finds number message in Spanish by type', function () {
		expect((0, _messageStrings.getMessageStringByType)('number', 'es')).toEqual(_strings2.default.es.type.number);
	});

	it('finds default message in English when asked for invalid type and language', function () {
		expect((0, _messageStrings.getMessageStringByType)('Goo', 'armsoooo')).toEqual(_strings2.default.en.defaultMessage);
	});
});

describe('getRequiredMessage', function () {
	it('finds required message in Spanish', function () {
		expect((0, _messageStrings.getRequiredMessage)('es')).toEqual(_strings2.default.es.required);
	});

	it('finds required message in English', function () {
		expect((0, _messageStrings.getRequiredMessage)('en')).toEqual(_strings2.default.en.required);
	});
});