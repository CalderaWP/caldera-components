'use strict';

var _isValidOrEmpty = require('./isValidOrEmpty');

var _isValidOrEmpty2 = _interopRequireDefault(_isValidOrEmpty);

var _isValid = require('./isValid');

var _isValid2 = _interopRequireDefault(_isValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Is valid or empty utilities', function () {
	it('checks a valid email', function () {
		expect(_isValidOrEmpty2.default.email('roy@hiroy.club')).toBe(true);
	});

	it('checks an invalid email', function () {
		expect(_isValidOrEmpty2.default.email('roy.com')).toBe(false);
	});

	it('Lets an empty email be valid', function () {
		expect(_isValidOrEmpty2.default.email('')).toBe(true);
	});

	it('checks a valid url', function () {
		expect(_isValidOrEmpty2.default.url('https://hiroy.club')).toBe(true);
	});

	it('checks an invalid url', function () {
		expect(_isValidOrEmpty2.default.url('//pants')).toBe(false);
	});

	it('lets an empty value be a valid url', function () {
		expect(_isValidOrEmpty2.default.url('')).toBe(true);
	});

	var date = new Date('13 October 1982 00:00 UTC');
	it('checks a valid date string', function () {
		expect(_isValidOrEmpty2.default.date(date.toISOString())).toBe(true);
	});

	it('checks a valid date object', function () {
		expect(_isValidOrEmpty2.default.date(date)).toBe(true);
	});

	it('checks an invalid date string', function () {
		expect(_isValidOrEmpty2.default.date('roy.com')).toBe(false);
	});

	it('Considers an empty value a valid date', function () {
		expect(_isValidOrEmpty2.default.date(0)).toBe(false);
	});

	it('Considers an empty  string to be a valid number', function () {
		expect(_isValidOrEmpty2.default.number('')).toBe(true);
	});

	it('Considers a non-empty string a valid string ', function () {
		expect(_isValidOrEmpty2.default.string(' Thanks!')).toBe(true);
	});

	it('Considers an empty string a valid string ', function () {
		expect(_isValidOrEmpty2.default.string('')).toBe(true);
	});

	it('Considers an empty string a valid stringOrNumber ', function () {
		expect(_isValidOrEmpty2.default.stringOrNumber('')).toBe(true);
	});

	it('Considers 0 a valid stringOrNumber ', function () {
		expect(_isValidOrEmpty2.default.stringOrNumber(0)).toBe(true);
	});

	it('Considers floats a valid stringOrNumber ', function () {
		expect(_isValidOrEmpty2.default.stringOrNumber(11.22)).toBe(true);
	});

	it('Considers non-empty strings a valid stringOrNumber ', function () {
		expect(_isValidOrEmpty2.default.stringOrNumber('Mike Corkum')).toBe(true);
	});

	it('Considers arrays not a valid stringOrNumber ', function () {
		expect(_isValidOrEmpty2.default.stringOrNumber(['Mike Corkum'])).toBe(false);
	});
});