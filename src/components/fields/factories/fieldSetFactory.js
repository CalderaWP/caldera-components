import {fieldFactory} from './fieldFactory';

/**
 * Given an array of field configs, generates and array of field controls
 *
 * Should be used for a group of settings, such as all settings for a processor.
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