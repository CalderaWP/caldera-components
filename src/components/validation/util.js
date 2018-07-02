import getValidatorsFromConfigField from './getValidatorsFromConfigField';
import isValid from './isValid';
import isValidOrEmpty from './isValidOrEmpty';

/**
 * Find the value of a field by ID
 *
 * Returns null if field is not in collection
 *
 * @param {String} fieldId Field to look for
 * @param {Object} fieldValues Values to look for field in
 * @return {String|Array|boolean|number|null}
 */
export const findFieldValueInFieldValues = (fieldId, fieldValues) => {
	if (fieldValues.hasOwnProperty(fieldId)) {
		return fieldValues[fieldId];
	}

	return null;
};

/**
 * Helper function to curry validator functions
 *
 * Validators expect 1 value, not an object of values, this function solves that.
 *
 * @param {String} fieldId Field to look for
 * @param {Function} validator Validator function
 * @return {function(*=): *}
 */
function curryValidator(fieldId, validator) {
	return (fieldValues) => {
		return validator(findFieldValueInFieldValues(fieldId, fieldValues));
	};
}

/**
 * Create validation function based on type and required
 *
 * @param {Object} configField Field to create validations for
 * @param {Array} validators Current array of validators
 * @param {string} validationType Type of validators to add.
 * @return {Array}
 */
function addValidatorsForType(configField, validators, validationType) {
	if (configField.isRequired) {
		validators.push(
			curryValidator(
				configField.ID, isValid[validationType]
			)
		);
	} else {
		validators.push(
			curryValidator(
				configField.ID, isValidOrEmpty[validationType]
			)
		);
	}

	return validators;
}

/**
 * Adds sensible, automatic validation to fields -- if no validators have been added yet.
 *
 * @param {Object} configField
 * @return {*}
 */
export const addAutomaticValidators = (configField) => {
	let validators = getValidatorsFromConfigField(configField);
	if (0 !== validators.length) {
		return configField;
	}

	switch (configField.type) {
	case 'input':
		if( [
			'email',
			'url',
			'date',
			'number',
		].includes( configField.inputType ) ){
			validators = addValidatorsForType(configField, validators, configField.inputType);
		}else if( 'text' === configField.inputType){
			validators = addValidatorsForType(configField, validators, 'string');

		}

		else{
			validators = addValidatorsForType( configField, validators, 'anything' );
		}

		break;
	case 'select':
		validators = addValidatorsForType( configField, validators, 'stringOrNumber' );
		break;
	}


	return {
		...configField,
		validators
	};


};
