import validation from '../../validation/index';

/**
 * Adds generic validators as needed
 *
 * @param fieldConfig
 * @return {*}
 */
export const addAutomaticValidationToFieldConfig = (fieldConfig) => {
const ID = fieldConfig.ID;
	switch (fieldConfig.inputType) {
		case 'email':
			fieldConfig.validators.push((values) => {
				if (!values.hasOwnProperty(ID)) {
					if (fieldConfig.isRequired) {
						return false;
					} else {
						return true;
					}
				}

				const value = values[ID];

				if (fieldConfig.isRequired) {
					return validation.isValid.email(value);
				} else {
					return validation.isEmpty.string(value) && validation.isValid.email(value);
				}


			});
			break;
		default :
			if( fieldConfig.isRequired ){
				fieldConfig.validators.push((values) => {
					return  values.hasOwnProperty(ID) && validation.isEmpty.anything(values[ID])
				});
			}


	}


	return fieldConfig;
};