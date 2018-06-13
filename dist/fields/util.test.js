'use strict';

var _util = require('./util');

describe('aria described by attr', function () {
	it('Returns null with no help text', function () {
		expect((0, _util.ariaDescribedbyAttr)('foo')).toEqual(null);
	});

	it('Returns properly when passed help text', function () {
		expect((0, _util.ariaDescribedbyAttr)('foo', 'help me Obi-won Kenobi')).toEqual('foo-description');
	});
});

describe('HTML5 checks', function () {
	it('detects valid types', function () {
		expect((0, _util.isValidHtml5type)('email')).toBe(true);
	});
});