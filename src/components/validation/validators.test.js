import validation from './index';
import getValidatorsFromConfigField from "./getValidatorsFromConfigField";
import checkValidatorsForConfigField from "./checkValidatorsForConfigField";
import {reduceConfigFieldsToValues} from "../conditional-logic/util";
import checkValidatorsForConfigFields from "./checkValidatorsForConfigFields";

describe('validation export', () => {
	it('exports getValidatorsFromConfigField', () => {
		expect(typeof validation.getValidatorsFromConfigField).toEqual('function')
	});
	it('exports checkValidatorsForConfigFields', () => {
		expect(typeof validation.checkValidatorsForConfigFields).toEqual('function')
	});
	it('exports checkValidatorsForConfigField', () => {
		expect(typeof validation.checkValidatorsForConfigField).toEqual('function')
	});
});

function validateTrue() {
	return true
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

	describe( 'checkValidatorsForConfigField', () => {
		it( 'returns true if no validators', () => {
			expect(checkValidatorsForConfigField({
				ID: 'fld1234',
			})).toEqual(true);

		});
		it( 'returns true if empty validators', () => {
			expect(checkValidatorsForConfigField({
				validators: []
			})).toEqual(true);
		});

		it( 'returns true if all validators return true', () => {
			expect(checkValidatorsForConfigField({
				validators: [
					validateTrue()
				]
			})).toEqual(true);
		});

		it( 'returns false if any validators return false', () => {
			expect(checkValidatorsForConfigField({
				validators: [
					() => {return false; },
					validateTrue()
				]
			})).toEqual(false);
		});
	});

	describe( 'checkValidatorsForConfigFields', () => {
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
						valuesPassedToValiator=fieldValues;
						return true;
					},
				]
			},
		];

		const fieldValues = reduceConfigFieldsToValues(configFields);

		it( 'passes field values to callbacks', () => {
			checkValidatorsForConfigFields(configFields,fieldValues);
			expect(valuesPassedToValiator).toEqual(fieldValues);
		});

		describe( 'reports results', () => {
			const results = checkValidatorsForConfigFields(configFields,fieldValues);
			it( 'reports valid', () => {
				expect( results.validEmailField ).toBe(true);
			});
			it( 'reports invalid', () => {
				expect( results.invalidEmailField ).toBe(false);
			});
		});
	});
});