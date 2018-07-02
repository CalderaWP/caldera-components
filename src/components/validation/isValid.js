import {isEmail,isUrl, isDate} from '@helpdotcom/is';
import isEmpty from './isEmpty';

/**
 * CalderaValidators for common types of validation needed
 *
 * Empty values are not valid.
 * Ue isValidOrEmpty instead if you want empty values to pass
 */
export default {
	/**
	 * Check if a given value is an email address
	 *
	 * @param {String} value Value to check
	 * @return {boolean}
	 */
	email(value){
		return isEmail(value);
	},
	/**
	 * Check if given value is a non-empty string
	 *
	 * @param {String} value Value to check
	 */
	string(value){
		return 'string' === typeof value && ! isEmpty.string(value);
	},
	/**
	 * Check if given value is a string
	 *
	 * @param {String} value Value to check
	 */
	stringOrNumber(value){
		if( null !== value ){
			return this.string(value) || this.number(value);
		}
		return false;
	},
	/**
	 * Check if a given value is a valid url
	 *
	 * @param {String} value Value to check
	 * @return {boolean}
	 */
	url(value){
		return isUrl(value);
	},
	/**
	 * Check if a given value is an date.
	 *
	 * Considers Date objects and strings conforming to ISO 8601 standard to be valid.
	 *
	 * @param {String|Date} value Value to check
	 * @return {boolean}
	 */
	date(value){
		return isDate(value);
	},
	/**
	 * Check if a given value is numeric
	 *
	 * @param {String|number} value Value to check
	 * @return {boolean}
	 */
	number(value){
		if( '' === value ){
			return false;
		}
		if( Array.isArray( value ) ){
			return false;
		}
		return ! isNaN(value);
	}
};