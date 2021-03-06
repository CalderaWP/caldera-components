'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getHtmlInputTypes = getHtmlInputTypes;
exports.isValidHtml5type = isValidHtml5type;
/**
 * Create the aria-describedby attribute or id attribute for the describing element
 *
 * @param {String} id Id attribute of input being described
 * @param {String} help Optional. Help text. If empty return is null.
 * @returns {String|null}
 */
var ariaDescribedbyAttr = exports.ariaDescribedbyAttr = function ariaDescribedbyAttr(id) {
	var help = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	var ariaDescribedby = null;
	if (help.length) {
		ariaDescribedby = id + '-description';
	}
	return ariaDescribedby;
};

/**
 * Get HTML5 input types that are valid
 * @returns {string[]}
 */
function getHtmlInputTypes() {
	return ['text', 'email', 'number', 'date', 'datetime', 'password', 'submit', 'reset', 'checkbox', 'hidden'];
}

/**
 * Checks if a given input type is an acceptable HTML5 input type
 *
 * @param {String} type
 * @returns {boolean}
 */
function isValidHtml5type(type) {
	return getHtmlInputTypes().includes(type);
}

/**
 * Remove a value from an array if present, if not present, add it
 *
 * @param {String|number} value Value to add or remove
 * @param {Array} array Array to mutate
 * @return {*}
 */
var addOrRemoveFromArray = exports.addOrRemoveFromArray = function addOrRemoveFromArray(value, array) {
	var index = array.indexOf(value);
	if (index !== -1) {
		array.splice(index, 1);
	} else {
		array.push(value);
	}
	return array;
};

/**
 * Cast a boolean or boolean like to a true or false
 *
 * @param Mixed} value Value to cast
 * @return {boolean}
 */
var toBoolean = exports.toBoolean = function toBoolean(value) {
	switch (value) {
		case true:
		case 'true':
		case 1:
		case '1':
		case 'on':
		case 'yes':
			return true;
		default:
			return false;
	}
};