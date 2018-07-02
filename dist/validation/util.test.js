'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('./util');

var _prepareFieldConfig = require('../fields/factories/prepareFieldConfig');

var _util2 = require('../conditional-logic/util');

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
describe('Adding automatic validation', function () {
	function falseValidator() {
		return false;
	}

	it('Does not change validators if already set', function () {

		var validators = [falseValidator];

		var configField = {
			type: 'input',
			validators: validators
		};
		expect((0, _util.addAutomaticValidators)(configField).validators).toEqual(validators);
	});

	describe('Adding email validators', function () {
		var emailFieldConfig = {
			type: 'input',
			inputType: 'email',
			value: 'roy@hiroy.club.com',
			isRequired: true
		};

		it('adds validator for email fields', function () {
			expect((0, _util.addAutomaticValidators)(_extends({}, emailFieldConfig, {
				ID: 'fld01'
			})).validators).toHaveLength(1);
		});

		it('Valid emails validate true', function () {
			var configField = _extends({}, emailFieldConfig, {
				ID: 'fld02'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('Invalid emails validate false', function () {
			var configField = _extends({}, emailFieldConfig, {
				ID: 'fld03',
				value: '#almostBluma'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(false);
		});

		it('empty emails validate true if not required', function () {
			var configField = _extends({}, emailFieldConfig, {
				ID: 'fld04',
				isRequired: false,
				value: ''
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});
	});

	describe('Adding url validators', function () {
		var urlFieldConfig = {
			type: 'input',
			inputType: 'url',
			value: 'https://hiRoy.club',
			isRequired: true
		};

		it('adds validator for text fields', function () {
			expect((0, _util.addAutomaticValidators)(_extends({}, urlFieldConfig, {
				ID: 'fld01'
			})).validators).toHaveLength(1);
		});

		it('Valid urls validate true', function () {
			var configField = _extends({}, urlFieldConfig, {
				ID: 'fld02'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('Non urls validate false', function () {
			var configField = _extends({}, urlFieldConfig, {
				ID: 'fld03',
				value: '#almostBluma'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(false);
		});

		it('empty values validate as valid URL if not required', function () {
			var configField = _extends({}, urlFieldConfig, {
				ID: 'fld04',
				isRequired: false,
				value: ''
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});
	});

	describe('Number validator', function () {
		var numberField = {
			type: 'input',
			inputType: 'number',
			isRequired: false,
			value: 22.1
		};
		it(' validations  numbers', function () {
			var configField = _extends({}, numberField, {
				ID: 'fld21'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it(' validations  not numbers', function () {
			var configField = _extends({}, numberField, {
				ID: 'fld22',
				value: 'foons'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(false);
		});
	});

	describe('Date validation', function () {
		var date = new Date('December 17, 1995 03:24:00');

		var dateField = {
			type: 'input',
			inputType: 'number',
			isRequired: true

		};
		it('validates dates ', function () {
			var configField = _extends({}, dateField, {
				ID: 'fld31',
				value: date
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('validates not dates dates ', function () {
			var configField = _extends({}, dateField, {
				ID: 'fld32',
				value: 'fasjksa;dljfd'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(false);
		});

		it('Validates nothing as valid if not required ', function () {
			var configField = _extends({}, dateField, {
				ID: 'fld33',
				isRequired: false
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});
	});

	describe('text validator', function () {
		var textField = {
			type: 'input',
			inputType: 'text',
			isRequired: false,
			value: '#almostBluma'
		};
		it('Strings are valid for text inputs', function () {
			var configField = _extends({}, textField, {
				ID: 'fld41'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('Empty strings are valid for non required text fields', function () {
			var configField = _extends({}, textField, {
				ID: 'fld42',
				value: ''
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});
		it('Empty strings are not valid for  required text fields', function () {
			var configField = _extends({}, textField, {
				ID: 'fld43',
				value: '',
				isRequired: true
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(false);
		});
	});

	describe('select field validator', function () {
		var selectField = {
			type: 'select',
			inputType: 'text',
			options: [{
				value: 2,
				label: 'Two'
			}, {
				value: 'three',
				label: 'Three'
			}],
			isRequired: false

		};
		it('adds a validator for select fields', function () {
			var configField = _extends({}, selectField, {
				ID: 'fld510',
				value: 2
			});
			expect((0, _util.addAutomaticValidators)(configField).validators).toHaveLength(1);
		});
		it('considers a number valid', function () {
			var configField = _extends({}, selectField, {
				ID: 'fld51',
				value: 2
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('considers a string valid', function () {
			var configField = _extends({}, selectField, {
				ID: 'fld52',
				value: 'Three'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('considers no value valid if not required', function () {
			var configField = _extends({}, selectField, {
				ID: 'fld53'
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(true);
		});

		it('considers no value invalid if  required', function () {
			var configField = _extends({}, selectField, {
				ID: 'fld54',
				isRequired: true
			});
			var values = (0, _util2.reduceConfigFieldsToValues)([configField]);
			expect((0, _util.addAutomaticValidators)(configField).validators[0](values)).toEqual(false);
		});
	});
});