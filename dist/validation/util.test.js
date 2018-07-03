'use strict';

var _util = require('./util');

describe('findFieldValueInFieldValues', function () {
	it('Finds  value if possible', function () {
		var values = {
			'fld0': '01one',
			'fld1': '11one',
			'fld2': '22one'
		};
		expect((0, _util.findFieldValueInFieldValues)('fld1', values)).toBe('11one');
	});
	it('Finds null value if no value', function () {
		var values = {
			'fld0': '0two',
			'fld2': '22two'
		};
		expect((0, _util.findFieldValueInFieldValues)('fld1', values)).toBe(null);
	});
});