/*eslint no-undef: "error"*/
/*eslint-env node*/
import {FieldGroup} from './FieldGroup';
import {SelectFieldFancy} from './select/SelectFieldFancy';
import {Input} from './input/Input';

module.exports = {
	FieldGroup,
	SelectField: SelectFieldFancy,
	Input
};