import {fieldGroupPropTypes} from '../propTypes';
import {isValidHtml5type} from '../util';

/**
 * Validates field configurations
 *
 * NOTE: This is called internally by factory. You probably do not want to call this.
 *
 * @param {Object}fieldArgs
 * @returns {*}
 */
export const prepareFieldConfig = (fieldArgs) => {
	/**
	 * Pick whitlisted keys from object
	 *
	 * @see http://www.jstips.co/en/javascript/picking-and-rejecting-object-properties/
	 *
	 * @param {Object} obj The object to pick from
	 * @param {Array} keys The whitelist of keys
	 * @return {*}
	 */
	function pick(obj, keys) {
		return keys.map(k => k in obj ? {[k]: obj[k]} : {})
			.reduce((res, o) => Object.assign(res, o), {});
	}

	if( ! ['select', 'fieldset' ].includes(fieldArgs.type ) ){
		switch( fieldArgs.type ){
		case 'text':
		case 'number':
		default:
			fieldArgs.inputType = isValidHtml5type(fieldArgs.type) ? fieldArgs.type : 'text';
			fieldArgs.type = 'input';
			break;
		}

	}

	if( fieldArgs.hasOwnProperty('desc') ){
		fieldArgs.help = fieldArgs.desc;
	}
	if( fieldArgs.hasOwnProperty('description') ){
		fieldArgs.help = fieldArgs.description;
	}
	return pick(fieldArgs, Object.keys(fieldGroupPropTypes));
};