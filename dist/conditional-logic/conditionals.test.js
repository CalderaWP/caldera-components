"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _checkConfigFieldConditionals = require("./checkConfigFieldConditionals");

var _checkConfigFieldsConditionals = require("./checkConfigFieldsConditionals");

var _util = require("./util");

describe('checking conditionals', function () {
	var field4 = {
		ID: 'fld4',
		type: 'email'
	};
	describe('Checking one field\'s conditionals', function () {
		it('returns true if no conditionals', function () {
			expect((0, _checkConfigFieldConditionals.checkConfigFieldConditionals)(field4)).toBe(true);
		});
		it('returns true if one rule that should return true', function () {
			expect((0, _checkConfigFieldConditionals.checkConfigFieldConditionals)(_extends({}, field4, {
				conditionals: [function () {
					return true;
				}]
			}))).toBe(true);
		});
		it('returns false if one rule that should return false', function () {
			expect((0, _checkConfigFieldConditionals.checkConfigFieldConditionals)(_extends({}, field4, {
				conditionals: [function () {
					return false;
				}]
			}))).toBe(false);
		});
		it('returns false if one rule that should return true and one rule that should be false', function () {
			expect((0, _checkConfigFieldConditionals.checkConfigFieldConditionals)(_extends({}, field4, {
				conditionals: [function () {
					return true;
				}, function () {
					return false;
				}]
			}))).toBe(false);
		});
		it('Passes values correctly', function () {
			var values = {
				a: 1,
				b: 2
			};
			var testValues = null;
			(0, _checkConfigFieldConditionals.checkConfigFieldConditionals)(_extends({}, field4, {
				conditionals: [function (valuesPassed) {
					testValues = valuesPassed;
				}]
			}), values);

			expect(testValues).toEqual(values);
		});
	});
	describe('Checking a collection of configFields\'s conditionals', function () {
		var configFields = [{
			type: 'email',
			ID: 'showField',
			conditionals: [function () {
				return true;
			}]
		}, {
			type: 'email',
			ID: 'hideField',
			conditionals: [function () {
				return false;
			}]
		}, {
			type: 'email',
			ID: 'otherField'
		}];
		it('returns valid results', function () {
			expect((0, _checkConfigFieldsConditionals.checkConfigFieldsConditionals)(configFields)).toEqual({
				showField: true,
				otherField: true,
				hideField: false
			});
		});
	});
});

describe('reducing config fields to values', function () {
	var configFields = [{
		ID: 'fld44',
		value: 5
	}, {
		ID: 'fld41',
		value: 2
	}];
	it('returns only values', function () {
		expect((0, _util.reduceConfigFieldsToValues)(configFields)).toEqual({
			fld44: 5,
			fld41: 2
		});
	});

	it('returns null if no value', function () {
		expect((0, _util.reduceConfigFieldsToValues)([].concat(configFields, [{
			ID: 'fld45'
		}]))).toEqual({
			fld44: 5,
			fld41: 2,
			fld45: null
		});
	});

	it('Returns default if has default and no value', function () {
		expect((0, _util.reduceConfigFieldsToValues)([].concat(configFields, [{
			ID: 'fld47',
			default: 'Roy'
		}]))).toEqual({
			fld44: 5,
			fld41: 2,
			fld47: 'Roy'
		});
	});

	it('Returns value if has default and  value', function () {
		expect((0, _util.reduceConfigFieldsToValues)([].concat(configFields, [{
			ID: 'fld48',
			default: 'Roy',
			value: 'Mike'
		}]))).toEqual({
			fld44: 5,
			fld41: 2,
			fld48: 'Mike'
		});
	});
});