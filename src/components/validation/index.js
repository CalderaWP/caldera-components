/*eslint no-undef: "error"*/
/*eslint-env node*/
import getValidatorsFromConfigField from './getValidatorsFromConfigField';
import checkValidatorsForConfigFields from './checkValidatorsForConfigField';
import checkValidatorsForConfigField from './checkValidatorsForConfigFields';
import messageStrings from './messageStrings';
import isEmpty from './isEmpty';
import isValid from './isValid';
import isValidOrEmpty from './isValidOrEmpty';
//Usage here indicates that this is a cross-cutting concern, & it totally is
//Move to shared module?
import {reduceConfigFieldsToValues} from '../conditional-logic/util';

/**
 * One export for validation system
 */
export default {
	getValidatorsFromConfigField,
	checkValidatorsForConfigFields,
	checkValidatorsForConfigField,
	isEmpty,
	isValid,
	isValidOrEmpty,
	reduceConfigFieldsToValues,
	messageStrings
};