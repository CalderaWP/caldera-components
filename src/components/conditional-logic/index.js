/*eslint no-undef: "error"*/
/*eslint-env node*/
import {checkConfigFieldConditionals} from './checkConfigFieldConditionals';
import {checkConfigFieldsConditionals} from './checkConfigFieldsConditionals';
import {reduceConfigFieldsToValues} from './util';

/**
 * The Caldera Components conditional logic system
 */
export default {
	checkConfigFieldConditionals,
	checkConfigFieldsConditionals,
	reduceConfigFieldsToValues
};