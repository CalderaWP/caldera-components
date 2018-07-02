import {reduceConfigFieldsToValues} from '../conditional-logic/util';
import {addAutomaticValidators} from "./addAutomaticValidators";

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


	describe( 'text validator', () => {
		const textField = {
			type: 'input',
			inputType: 'text',
			isRequired:false,
			value: '#almostBluma'
		};
		it( 'Strings are valid for text inputs', () => {
			const  configField = {
				...textField,
				ID: 'fld41'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );

		});

		it( 'Empty strings are valid for non required text fields', () => {
			const  configField = {
				...textField,
				ID: 'fld42',
				value: ''
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );

		});
		it( 'Empty strings are not valid for  required text fields', () => {
			const  configField = {
				...textField,
				ID: 'fld43',
				value: '',
				isRequired:true
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( false );

		});
	});

	describe( 'select field validator', () => {
		const selectField = {
			type: 'select',
			inputType: 'text',
			options: [{
				value: 2,
				label: 'Two'
			},
				{
					value: 'three',
					label: 'Three'
				}],
			isRequired:false,

		};
		it( 'adds a validator for select fields', () => {
			const  configField = {
				...selectField,
				ID: 'fld510',
				value: 2
			};
			expect( addAutomaticValidators(configField).validators ).toHaveLength( 1 );
		});
		it( 'considers a number valid', () => {
			const  configField = {
				...selectField,
				ID: 'fld51',
				value: 2
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});

		it( 'considers a string valid', () => {
			const  configField = {
				...selectField,
				ID: 'fld52',
				value: 'Three'
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});

		it( 'considers no value valid if not required', () => {
			const  configField = {
				...selectField,
				ID: 'fld53',
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( true );
		});

		it( 'considers no value invalid if  required', () => {
			const  configField = {
				...selectField,
				ID: 'fld54',
				isRequired: true
			};
			const values = reduceConfigFieldsToValues([configField]);
			expect( addAutomaticValidators(configField).validators[0](values) ).toEqual( false );
		});
	});

});