import {prepareFieldConfig} from './prepareFieldConfig';
import {FieldGroup} from '../FieldGroup';


/**
 * Generates field controls
 *
 * @param {Array} fieldArgs Field config
 * @returns {*}
 */
export const fieldFactory = (fieldArgs) =>{
	return FieldGroup(prepareFieldConfig(fieldArgs));
};
