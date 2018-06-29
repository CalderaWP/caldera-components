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

describe('addOrRemoveFromArray', function () {
	it('Add a string to an array', function () {
		var array = [];
		array = (0, _util.addOrRemoveFromArray)('one', array);
		expect(array).toEqual(['one']);
	});
	it('Add an integer to an array', function () {
		var array = [];
		array = (0, _util.addOrRemoveFromArray)(2, array);
		expect(array).toEqual([2]);
	});

	it('Removes from an array', function () {
		var array = [];
		array = (0, _util.addOrRemoveFromArray)('two', array);
		array = (0, _util.addOrRemoveFromArray)('two', array);
		expect(array).toEqual([]);
	});

	it('Add multiple values to an array', function () {
		var array = [];
		array = (0, _util.addOrRemoveFromArray)(2, array);
		array = (0, _util.addOrRemoveFromArray)(3, array);
		expect(array).toEqual([2, 3]);
	});

	it('Add multiple values to an array and removes one of them', function () {
		var array = [];
		array = (0, _util.addOrRemoveFromArray)(2, array);
		array = (0, _util.addOrRemoveFromArray)(3, array);
		array = (0, _util.addOrRemoveFromArray)(5, array);
		array = (0, _util.addOrRemoveFromArray)(3, array);
		expect(array).toEqual([2, 5]);
	});
});

describe('Boolean casting', function () {
	it('casts 1 to true', function () {
		expect((0, _util.toBoolean)(1)).toBe(true);
	});

	it('casts string 1 to true', function () {
		expect((0, _util.toBoolean)('1')).toBe(true);
	});

	it('keeps true  true', function () {
		expect((0, _util.toBoolean)(true)).toBe(true);
	});

	it('casts string "true" to true', function () {
		expect((0, _util.toBoolean)('true')).toBe(true);
	});
	it('casts string "on" to true', function () {
		expect((0, _util.toBoolean)('true')).toBe(true);
	});
	it('casts string "yes" to true', function () {
		expect((0, _util.toBoolean)('true')).toBe(true);
	});
	it('casts string "hiRoy" to false', function () {
		expect((0, _util.toBoolean)('hiRoy')).toBe(false);
	});
	it('casts undefined to false', function () {
		expect((0, _util.toBoolean)(undefined)).toBe(false);
	});
});