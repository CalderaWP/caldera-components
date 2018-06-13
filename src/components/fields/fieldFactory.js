import {fieldGroupPropTypes} from './propTypes';
import {
	isValidHtml5type
} from './util';
import {FieldGroup} from './FieldGroup';

export const prepareFieldConfig = (fieldArgs) => {
	function pick(obj, keys) {
		return keys.map(k => k in obj ? {[k]: obj[k]} : {})
			.reduce((res, o) => Object.assign(res, o), {});
	}

	switch( fieldArgs.type ){
	case 'text':
	case 'number':
	default:
		fieldArgs.inputType = isValidHtml5type(fieldArgs.type) ? fieldArgs.type : 'text';
		fieldArgs.type = 'input';
		break;
	}
	if( fieldArgs.hasOwnProperty('desc') ){
		fieldArgs.help = 'desc';
	}
	return pick(fieldArgs, Object.keys(fieldGroupPropTypes));
};
/**
 * Generates field controls
 *
 * @param {Array} fieldArgs Field config
 * @returns {*}
 */
export const fieldFactory = (fieldArgs) =>{
	return FieldGroup(prepareFieldConfig(fieldArgs));

};

/**
 * Given an array of field configs, generates and array of field controls
 *
 * @param {Array} fields Field configs
 * @returns {Array}
 */
export const fieldSetFactory = (fields) =>{
	let out = [];
	Object.values(fields).forEach( field => {
		out.push(fieldFactory(field));
	});
	return out;
};