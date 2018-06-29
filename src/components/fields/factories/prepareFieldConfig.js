import {fieldGroupPropTypes} from '../propTypes';
import {isValidHtml5type, toBoolean} from '../util';
import {messageObjectFactory} from '../messages/messageObjectFactory';

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

	switch (fieldArgs.type) {
	case 'select':
	case 'dropdown':
		fieldArgs.type = 'select';
		break;
	case 'fieldset':
		fieldArgs.type = 'fieldset';
		break;
	case 'text':
	case 'number':
	default:
		fieldArgs.inputType = isValidHtml5type(fieldArgs.type) ? fieldArgs.type : 'text';
		fieldArgs.type = 'input';
		break;
	}

	if (fieldArgs.hasOwnProperty('desc')) {
		fieldArgs.help = fieldArgs.desc;
	}
	if (fieldArgs.hasOwnProperty('description')) {
		fieldArgs.help = fieldArgs.description;
	}

	fieldArgs = pick(fieldArgs, Object.keys(fieldGroupPropTypes));
	fieldArgs.disabled = toBoolean(fieldArgs.disabled);
	fieldArgs.message = 'object' === typeof  fieldArgs.message
		? messageObjectFactory(fieldArgs.message)
		: messageObjectFactory({message:null, error: false });
	return fieldArgs;
};