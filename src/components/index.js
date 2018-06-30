/*eslint no-undef: "error"*/
/*eslint-env node*/
import * as fields from './fields/index';
import * as factories from './fields/factories/index';
import {RenderGroup} from './RenderGroup';
import conditionals from './conditional-logic/index';
import validation from './validation/index';

/**
 * Caldera components
 *
 * @type {{RenderGroup: RenderGroup, fields: *, factories: *, conditionals: {checkConfigFieldConditionals, checkConfigFieldsConditionals, reduceConfigFieldsToValues}}}
 */
module.exports = {
	RenderGroup,
	fields,
	factories,
	conditionals,
	validation
};