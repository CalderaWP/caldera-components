'use strict';

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Is empty utilities', function () {

	describe('methods for data types', function () {
		it('Knows empty objects are empty', function () {
			expect(_isEmpty2.default.object({})).toBe(true);
		});

		it('Knows non-empty objects are not empty', function () {
			expect(_isEmpty2.default.object({ roy: 'Mike' })).toBe(false);
		});

		it('Knows empty arrays are empty', function () {
			expect(_isEmpty2.default.object([])).toBe(true);
		});

		it('Knows non-empty arrays are not empty', function () {
			expect(_isEmpty2.default.object([{ roy: 'Mike' }, 9])).toBe(false);
		});

		it('Knows empty strings are empty', function () {
			expect(_isEmpty2.default.string('')).toBe(true);
		});

		it('Knows non-empty strings are not empty', function () {
			expect(_isEmpty2.default.string('mike')).toBe(false);
		});

		it('Knows empty Maps are  empty', function () {
			expect(_isEmpty2.default.map(new Map())).toBe(true);
		});

		it('Knows non-empty Maps are not empty', function () {
			var map = new Map().set(1, 2);
			expect(_isEmpty2.default.map(map)).toBe(false);
		});
	});

	describe('anything method for testing all data types', function () {
		it('Knows empty objects are empty', function () {
			expect(_isEmpty2.default.anything({})).toBe(true);
		});

		it('Knows non-empty objects are not empty', function () {
			expect(_isEmpty2.default.anything({ roy: 'Mike' })).toBe(false);
		});

		it('Knows empty arrays are empty', function () {
			expect(_isEmpty2.default.anything([])).toEqual(true);
		});

		it('Knows non-empty arrays are not empty', function () {
			expect(_isEmpty2.default.anything([7, 9])).toEqual(false);
		});

		it('Knows empty strings are empty', function () {
			expect(_isEmpty2.default.anything('')).toBe(true);
		});

		it('Knows non-empty strings are not empty', function () {
			expect(_isEmpty2.default.anything('mike')).toBe(false);
		});

		it('Knows empty Maps are  empty', function () {
			expect(_isEmpty2.default.anything(new Map())).toBe(true);
		});

		it('Knows non-empty Maps are not empty', function () {
			var map = new Map().set(1, 2);
			expect(_isEmpty2.default.anything(map)).toBe(false);
		});
	});
});