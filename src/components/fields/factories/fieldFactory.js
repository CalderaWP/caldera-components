import {prepareFieldConfig} from './prepareFieldConfig';
import {FieldGroup} from '../FieldGroup';


/**
 * Generates field controls
 *
 * @param {Object} fieldArgs Field config
 * @returns {*}
 */
export const fieldFactory = (fieldArgs) =>{
	return FieldGroup(prepareFieldConfig(fieldArgs));
};
