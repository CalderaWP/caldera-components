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

		it( 'Invalid emails validate false', () => {
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

	describe( 'Adding url validators', () => {
		const urlFieldConfig = {
			type: 'input',
			inputType: 'url',
			value: 'https://hiRoy.club',
			isRequired: true,
		};

		it( 'adds validator for text fields', () => {
			expect( addAutomaticValidators({
				...urlFieldConfig,
				ID: 'fld01',
			}).validators ).toHaveLength( 1 );
		});

		it( 'Valid urls validate true', () => {
			const configField = {
				...urlFieldConfig,
				ID: 'fld02',
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});

		it( 'Non urls validate false', () => {
			const configField = {
				...urlFieldConfig,
				ID: 'fld03',
				value: '#almostBluma'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( false );
		});

		it( 'empty values validate as valid URL if not required', () => {
			const configField = {
				...urlFieldConfig,
				ID: 'fld04',
				isRequired:false,
				value: ''
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});
	});

	describe( 'Number validator', () => {
		const numberField = {
			type: 'input',
			inputType: 'number',
			isRequired:false,
			value: 22.1
		};
		it( ' validations  numbers', () => {
			const  configField = {
				...numberField,
				ID: 'fld21'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );

		});

		it( ' validations  not numbers', () => {
			const  configField = {
				...numberField,
				ID: 'fld22',
				value: 'foons'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( false );

		});
	});

	describe( 'Date validation', () => {
		const date = new Date('December 17, 1995 03:24:00');

		const dateField = {
			type: 'input',
			inputType: 'number',
			isRequired:true,

		};
		it( 'validates dates ', () => {
			const  configField = {
				...dateField,
				ID: 'fld31',
				value: date
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );

		});

		it( 'validates not dates dates ', () => {
			const  configField = {
				...dateField,
				ID: 'fld32',
				value: 'fasjksa;dljfd'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( false );

		});

		it( 'Validates nothing as valid if not required ', () => {
			const  configField = {
				...dateField,
				ID: 'fld33',
				isRequired:false,
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );

		});
	});

});