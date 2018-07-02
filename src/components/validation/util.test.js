import {addAutomaticValidators,findFieldValueInFieldValues} from './util';
import {prepareFieldConfig} from '../fields/factories/prepareFieldConfig';
import {reduceConfigFieldsToValues} from '../conditional-logic/util';

describe( 'findFieldValueInFieldValues', () => {
	it( 'Finds  value if possible', () => {
		const values = {
			'fld0' : '01one',
			'fld1' : '11one',
			'fld2' : '22one'
		};
		expect( findFieldValueInFieldValues( 'fld1', values ) ).toBe('11one');
	});
	it( 'Finds null value if no value', () => {
		const values = {
			'fld0' : '0two',
			'fld2' : '22two'
		};
		expect( findFieldValueInFieldValues( 'fld1', values ) ).toBe(null);
	});
});
describe( 'Adding automatic validation', () => {
	function falseValidator(){
		return false;
	}

	it( 'Does not change validators if already set', () => {

		const validators = [
			falseValidator
		];

		const configField = {
			type: 'input',
			validators: validators
		};
		expect( addAutomaticValidators(configField).validators ).toEqual( validators );
	});

	describe( 'Adding email validators', () => {

		const emailFieldConfig = {
			type: 'input',
			inputType: 'email',
			value: 'roy@hiroy.club.com',
			isRequired: true,
		};

		it( 'adds validator for email fields', () => {
			expect( addAutomaticValidators({
				...emailFieldConfig,
				ID: 'fld01',
			}).validators ).toHaveLength( 1 );
		});

		it( 'Valid emails validate true', () => {
			const configField = {
				...emailFieldConfig,
				ID: 'fld02',
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});

		it( 'Invlaid emails validate false', () => {
			const configField = {
				...emailFieldConfig,
				ID: 'fld03',
				value: '#almostBluma'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( false );
		});

		it( 'empty emails validate true if not required', () => {
			const configField = {
				...emailFieldConfig,
				ID: 'fld04',
				isRequired:false,
				value: ''
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});
	});


});