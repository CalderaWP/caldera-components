import validation from './index';
import getValidatorsFromConfigField from './getValidatorsFromConfigField';
import checkValidatorsForConfigField from './checkValidatorsForConfigField';
import {reduceConfigFieldsToValues} from '../conditional-logic/util';
import checkValidatorsForConfigFields from './checkValidatorsForConfigFields';
import isValid from './isValid';

describe('validation export', () => {
	it('exports getValidatorsFromConfigField', () => {
		expect(typeof validation.getValidatorsFromConfigField).toEqual('function');
	});
	it('exports checkValidatorsForConfigFields', () => {
		expect(typeof validation.checkValidatorsForConfigFields).toEqual('function');
	});
	it('exports checkValidatorsForConfigField', () => {
		expect(typeof validation.checkValidatorsForConfigField).toEqual('function');
	});
});

function validateTrue() {
	return true;
}

describe('getValidatorsFromConfigField', () => {

	const validators = [
		() => {
			return false;
		},
		validateTrue
	];

	const configField = {
		ID: 'fld1234',
		validators: validators
	};


	it('Finds the array', () => {
		expect(getValidatorsFromConfigField(configField)).toEqual(validators);
	});

	it('returns empty array if validators is not set', () => {
		expect(getValidatorsFromConfigField({ID: 'fld1'})).toEqual([]);
	});

	it('returns empty array if validators is not an array', () => {
		expect(getValidatorsFromConfigField({
			ID: 'fld1', validators: {
				validateTrue
			}
		})).toEqual([]);
	});

	describe('checkValidatorsForConfigField', () => {
		it('returns true if no validators', () => {
			expect(checkValidatorsForConfigField({
				ID: 'fld1234',
			})).toEqual(true);

		});
		it('returns true if empty validators', () => {
			expect(checkValidatorsForConfigField({
				validators: []
			})).toEqual(true);
		});

		it('returns true if all validators return true', () => {
			expect(checkValidatorsForConfigField({
				validators: [
					validateTrue()
				]
			})).toEqual(true);
		});

		it('returns false if any validators return false', () => {
			expect(checkValidatorsForConfigField({
				validators: [
					() => {
						return false;
					},
					validateTrue()
				]
			})).toEqual(false);
		});
	});


	describe('checkValidatorsForConfigFields', () => {
		let valuesPassedToValiator = {};
		beforeEach(() => {
			valuesPassedToValiator = {};
		});

		const configFields = [
			{
				type: 'email',
				ID: 'validEmailField',
				validators: [
					() => {
						return true;
					},
				]
			},
			{
				type: 'email',
				ID: 'invalidEmailField',
				validators: [
					() => {
						return false;
					},
				]
			},
			{
				type: 'email',
				ID: 'otherField',
				value: 'pants',
				validators: [
					(fieldValues) => {
						valuesPassedToValiator = fieldValues;
						return true;
					},
				]
			},
		];

		const fieldValues = reduceConfigFieldsToValues(configFields);

		it('passes field values to callbacks', () => {
			checkValidatorsForConfigFields(configFields, fieldValues);
			expect(valuesPassedToValiator).toEqual(fieldValues);
		});

		describe('reports results', () => {
			const results = checkValidatorsForConfigFields(configFields, fieldValues);
			it('reports valid', () => {
				expect(results.validEmailField).toBe(true);
			});
			it('reports invalid', () => {
				expect(results.invalidEmailField).toBe(false);
			});
		});
	});

	describe('using default validators', () => {
		const configFieldsWithValidators = [
			{
				type: 'email',
				ID: 'validEmailField',
				validators: [
					(fieldValues) => {
						return isValid.email(fieldValues.validEmailField);
					},
				],
				value: 'roy@hiroy.club'
			},
			{
				type: 'email',
				ID: 'invalidEmailField',
				validators: [
					(fieldValues) => {
						return isValid.email(fieldValues.invalidEmailField);
					},
				],
				value: 'pants'
			},
			{
				type: 'number',
				ID: 'invalidNumber',
				validators: [
					(fieldValues) => {
						return isValid.number(fieldValues.invalidNumber);
					},
				],
				value: 'pants'
			},
			{
				type: 'number',
				ID: 'validNumber',
				validators: [
					(fieldValues) => {
						return isValid.number(fieldValues.validNumber);
					},
				],
				value: 1
			},
			{
				type: 'date',
				ID: 'validDate',
				validators: [
					(fieldValues) => {
						return isValid.number(fieldValues.validNumber);
					},
				],
				value: new Date('13 October 1982 00:00 UTC')
			},
			{
				type: 'date',
				ID: 'invalidDate',
				validators: [
					(fieldValues) => {
						return isValid.number(fieldValues.invalidDate);
					},
				],
				value: 'Nothing stops Bluma'
			},
			{
				type: 'date',
				ID: 'validDate',
				validators: [
					(fieldValues) => {
						return isValid.number(fieldValues.validNumber);
					},
				],
				value: new Date('13 October 1982 00:00 UTC')
			},
			{
				type: 'url',
				ID: 'invalidUrl',
				validators: [
					(fieldValues) => {
						return isValid.url(fieldValues.invalidUrl);
					},
				],
				value: 'Nothing stops Bluma'
			},
			{
				type: 'url',
				ID: 'validUrl',
				validators: [
					(fieldValues) => {
						return isValid.url(fieldValues.validUrl);
					},
				],
				value: 'https://corkum.mike'
			},

		];
		const fieldValuesForThisTest = reduceConfigFieldsToValues(configFieldsWithValidators);


		it('Produces the right results', () => {
			expect(JSON.stringify(checkValidatorsForConfigFields(configFieldsWithValidators, fieldValuesForThisTest))).toMatchSnapshot();
		});


	});
});

