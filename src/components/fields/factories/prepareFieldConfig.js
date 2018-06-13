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