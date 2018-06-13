import {fieldPropTypes} from './propTypes';
import React from 'react';
import {Input} from './input/Input';
import {SelectField} from './select/SelectField';
import {ariaDescribedbyAttr} from './util';

/**
 * Creates the field inside of a field group
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const FieldInner = (props) => {
	function idAttrFromProps() {
		return ariaDescribedbyAttr(props.id, props.help);
	}

	switch( props.type ){
	case 'select':
	case 'dropdown':
		return (
			<SelectField
				id={props.id}
				fieldClassName={props.fieldClassName}
				ariaDescribedbyAttr={idAttrFromProps()}
				value={props.value}
				onValueChange={props.onValueChange}
				inputType={props.inputType}
				options={props.opt}
			/>
		);
	default:
	case 'input':
		return (
			<Input
				id={props.id}
				fieldClassName={props.fieldClassName}
				ariaDescribedbyAttr={idAttrFromProps()}
				value={props.value}
				onValueChange={props.onValueChange}
				inputType={props.inputType}
			/>);
	}

};

/**
 * propTypes for FieldInner component
 *
 * @type {{options, ariaDescribedbyAttr}}
 */
FieldInner.propTypes = fieldPropTypes;

/**
 * Default props for FieldInner component
 * @type {{help: string}}
 */
FieldInner.defaultProps = {
	help: ''
};