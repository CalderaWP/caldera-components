import {FieldGroup} from './FieldGroup';
import {fieldGroupPropTypes} from './propTypes';

/**
 * Generates field controls
 *
 * @param {Array} field Field config
 * @returns {*}
 */
export const fieldFactory = (fieldArgs) =>{
	function pick(obj, keys) {

		return keys.map(k => k in obj ? {[k]: obj[k]} : {})
			.reduce((res, o) => Object.assign(res, o), {});
	}
	const html5types = [
		'text',
		'email',
		'number',
		'date',
		'datetime',
		'password',
		'submit',
		'reset',
		'checkbox'
	];

	switch( fieldArgs.type ){
	case 'text':
	case 'number':
	default:
		fieldArgs.inputType = html5types.includes(fieldArgs.type) ? fieldArgs.type : 'text';
		fieldArgs.type = 'input';
		break;
	}
	if( fieldArgs.hasOwnProperty('desc') ){
		fieldArgs.help = 'desc';
	}

	return FieldGroup(pick(fieldArgs, Object.keys(fieldGroupPropTypes)));

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