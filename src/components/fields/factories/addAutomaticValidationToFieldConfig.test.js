import {addAutomaticValidationToFieldConfig} from "./addAutomaticValidationToFieldConfig";
import {prepareFieldConfig} from "./prepareFieldConfig";
import validation from '../../validation';

describe( 'Adding automatic validators to configuration', () => {
	const validEmailField = prepareFieldConfig({
		ID: 'fld1',
		type: 'email',
		value: 'Roy@hiRoy.com',
		isRequired: false,
	});
	const validEmailFieldRequired = prepareFieldConfig({
		ID: 'fld12',
		type: 'email',
		value: 'Roy@hiRoy.com',
		isRequired: true,
	});


	describe( 'considers empty required fields invalid', () => {
		const configField = prepareFieldConfig({
			ID: 'fld01',
			type: 'text',
			isRequired: true,
			value: ''
		});
		it( 'adds required validator', () => {
			expect( addAutomaticValidationToFieldConfig(configField).validators.length ).toBe(1);
		});

		it( 'considers configFields that are required and have an empty string for a value to be invalid', () => {
			expect(
				validation.checkValidatorsForConfigField(
				addAutomaticValidationToFieldConfig(configField),
				{fld01:''}
			)).toBe(false);
		});

	});

	describe( 'email validators', () => {
		const validEmailFieldWithValidators = addAutomaticValidationToFieldConfig(validEmailField );
		it( 'Does not remove inputType', () => {
			expect( validEmailFieldWithValidators.inputType ).toBe('email');
		});

		it( 'adds validator for email fields', () => {
			expect( validEmailFieldWithValidators.validators.length ).toBe(1);
		});

		it( 'considers empty email field valid if not required', () => {
			const validEmptyEmailFieldWithValidators = addAutomaticValidationToFieldConfig({
				...validEmailField,
				value: ''
			} );
			const fieldValues = validation.reduceConfigFieldsToValues([validEmptyEmailFieldWithValidators]);
			expect( validation.checkValidatorsForConfigField(validEmptyEmailFieldWithValidators,fieldValues)).toBe(true);
		});

		it( 'considers empty email field not valid if required', () => {
			const validEmailFieldRequiredWithValidatorsAndEmptyValue = addAutomaticValidationToFieldConfig({
				type: 'email',
				value: '',
				ID: 'fld121',
				isRequired: true,
			} );
			const fieldValues = validation.reduceConfigFieldsToValues([validEmailFieldRequiredWithValidatorsAndEmptyValue]);

			expect( validation.checkValidatorsForConfigField(validEmailFieldRequiredWithValidatorsAndEmptyValue,fieldValues)).toBe(false);
		});

		it( 'considers an email field with valid email valid', () => {
			const validEmailFieldRequiredWithValidatorsAndEmptyValue = addAutomaticValidationToFieldConfig({
				type: 'email',
				value: 'Roy@hiRoy.com',
				ID: 'fld122'
			} );

			const fieldValues = validation.reduceConfigFieldsToValues([validEmailFieldRequiredWithValidatorsAndEmptyValue]);
			expect( validation.checkValidatorsForConfigField(validEmailFieldRequiredWithValidatorsAndEmptyValue,fieldValues)).toBe(true);
		});
	});




});