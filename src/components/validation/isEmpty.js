/**
 * CalderaValidators that check if a value is empty or not
 */
export default {
	/**
	 * Check if different types (numbers, strings, objects, arrays or Maps) are empty
	 *
	 * @param {String|number|Array|object|Map} value
	 * @return {boolean}
	 */
	anything(value){
		if( Array.isArray(value)){
			return this.array(value);
		}
		if( value instanceof Map ){
			return this.map(value);
		}
		switch (typeof value){
			case 'object':
				return this.object(value);
			case 'string':
				return this.string(value);
			default:
				return false;//
		}
		return false;
	},
	/**
	 * Check if value is an empty object
	 *
	 * @param {Object} value The object to check
	 * @return {boolean}
	 */
	object(value){
		for(let key in value) {
			if(value.hasOwnProperty(key))
				return false;
		}
		return true;
	},
	/**
	 * Check if value is an empty array
	 *
	 * @param {Array} value Array to check
	 * @return {boolean}
	 */
	array(value){
		return 0 === value.length;
	},
	/**
	 * Check if value is not an empty string
	 *
	 * @param {String} value String to check
	 * @return {boolean}
	 */
	string(value){
		return !value;
	},
	/**
	 * Check if value is not an empty map
	 *
	 * @param {Map} value The Map to check
	 * @return {boolean}
	 */
	map( value ){
		return 0 === value.size;
	}
}