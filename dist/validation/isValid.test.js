'use strict';

var _isValid = require('./isValid');

var _isValid2 = _interopRequireDefault(_isValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Is valid utilities', function () {
	it('checks a valid email', function () {
		expect(_isValid2.default.email('roy@hiroy.club')).toBe(true);
	});

	it('checks an invalid email', function () {
		expect(_isValid2.default.email('roy.com')).toBe(false);
	});

	it('checks a valid url', function () {
		expect(_isValid2.default.url('https://hiroy.club')).toBe(true);
	});

	it('checks an invalid url', function () {
		expect(_isValid2.default.url('//pants')).toBe(false);
	});

	var date = new Date('13 October 1982 00:00 UTC');
	it('checks a valid date string', function () {
		expect(_isValid2.default.date(date.toISOString())).toBe(true);
	});

	it('checks a valid date object', function () {
		expect(_isValid2.default.date(date)).toBe(true);
	});

	it('checks an invalid date string', function () {
		expect(_isValid2.default.date('roy.com')).toBe(false);
	});

	it('Considers integers numeric', function () {
		expect(_isValid2.default.number(4)).toBe(true);
	});
	it('Considers numbers in strings numeric', function () {
		expect(_isValid2.default.number('4')).toBe(true);
	});
	it('Considers floats in strings numeric', function () {
		expect(_isValid2.default.number('4.01')).toBe(true);
	});
	it('Considers floats numeric', function () {
		expect(_isValid2.default.number(4.01)).toBe(true);
	});

	it('Considers strings not representing numbers to not  be numeric', function () {
		expect(_isValid2.default.number('Hi Roy.')).toBe(false);
	});
	it('Considers arrays not numeric', function () {
		expect(_isValid2.default.number([])).toBe(false);
	});

	it('Considers empty strings not numeric', function () {
		expect(_isValid2.default.number('')).toBe(false);
	});

	it('Considers object literals not numeric', function () {
		expect(_isValid2.default.number({
			hi: 'Roy'
		})).toBe(false);
	});

	it('Considers a valid string a valid string ', function () {
		expect(_isValid2.default.string(' Thanks!')).toBe(true);
	});

	it('Considers an empty string not a valid string ', function () {
		expect(_isValid2.default.string('')).toBe(false);
	});

	it('Considers a string a valid stringOrNumber ', function () {
		expect(_isValid2.default.stringOrNumber(' Thanks!')).toBe(true);
	});

	it('Considers an number a valid stringOrNumber ', function () {
		expect(_isValid2.default.stringOrNumber(111)).toBe(true);
	});
	it('Considers null not a valid stringOrNumber ', function () {
		expect(_isValid2.default.stringOrNumber(null)).toBe(false);
	});

	it('Considers an empty string not a valid stringOrNumber ', function () {
		expect(_isValid2.default.stringOrNumber('')).toBe(false);
	});

	it('Considers a string a string or number', function () {
		expect(_isValid2.default.stringOrNumber(' Thanks!')).toBe(true);
	});
});