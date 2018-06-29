import React from 'react';
import classNames from 'classnames';
import {addOrRemoveFromArray, ariaDescribedbyAttr} from './util';
import {
	fieldGroupPropTypes,
} from './propTypes';

import {FieldInner} from './FieldInner';
import {RenderGroup} from '../RenderGroup';
import {Message} from './messages/Message';
import {messageObjectFactory} from './messages/messageObjectFactory';

/**
 * Represents one configField -- wrapper, label and input.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const FieldGroup = (props) => {

	/**
	 * Creates the id attribute
	 * @return {String}
	 */
	function idAttrForHelpElement() {
		return ariaDescribedbyAttr(props.id, props.help);
	}

	function checkboxChangeHandler(option,values) {
		if (!Array.isArray(values)) {
			if ('string' === typeof values || 'number' === typeof  values) {
				values = [values];
			} else {
				values = [];

			}
		}
		values = addOrRemoveFromArray(option.value, values);
		props.onValueChange(values);
	}

	/**
	 * Based on type, render the field.
	 *
	 * @return {*}
	 */
	function fieldInner(fieldProps){
		const message = 'object' === typeof  fieldProps.message
			? messageObjectFactory(fieldProps.message)
			: messageObjectFactory({message:null, error: false });
		function getFieldClassName(conditionalClassNames) {
			return classNames(
				{
					required: fieldProps.isRequired,
					...conditionalClassNames
				}
			);
		}

		/**
		 * Is this option the checked value?
		 * @param {object}option
		 * @param {String|number|Array} currentValue
		 * @return {boolean}
		 */
		function isCheckedOption( option, currentValue){
			if( Array.isArray( currentValue ) ){
				return currentValue.includes(option.value);
			}
			return option.value === currentValue;
		}

		//Fieldsets are rendered recursively.
		if( 'fieldset' === fieldProps.type ){
			return (
				<fieldset
					id={props.id}
				>
					<legend>
						{props.label}
					</legend>
					{props.options.map(option =>  {


						//Call this same function, as a regular checkbox
						return (
							<React.Fragment
								key={ `${props.id}-${option.value}` }
							>
								{fieldInner({
									type: 'input',
									inputType: 'checkbox',
									id: `${props.id}-${option.value}`,
									value: isCheckedOption(option,props.value),
									fieldClassName: getFieldClassName({
										'fieldset-checkbox' : true,
									}),
									label: option.label,
									disabled:props.disabled,
									onValueChange: () => {
										checkboxChangeHandler(option,props.values);
									}
								})}
							</React.Fragment>
						);
					})}
				</fieldset>
			);
		}else if( 'hidden' === fieldProps.inputType ){
			return (
				FieldInner(
					{
						type: props.type,
						id: props.id,
						fieldClassName: getFieldClassName(),
						value:fieldProps.value,
						onValueChange:fieldProps.onValueChange,
						inputType: fieldProps.inputType,
						disabled:props.disabled,
					}
				)
			);
		}else{
			return (
				<div
					className={RenderGroup.classNames.fieldWrapper}
				>
					<label
						htmlFor={fieldProps.id}
					>
						{fieldProps.label}
					</label>
					<Message
						message={message}
					/>
					{FieldInner(
						{
							type: fieldProps.type,
							id: fieldProps.id,
							fieldClassName: getFieldClassName({
								'block-input': fieldProps.isBlockInput
							}),
							help:fieldProps.help,
							value:fieldProps.value,
							onValueChange:fieldProps.onValueChange,
							inputType: fieldProps.inputType,
							options: fieldProps.options,
							disabled:props.disabled,
						}
					)}
					{fieldProps.help &&
					<p
						id={`${idAttrForHelpElement()}`}
						className={'description'}
					>
						{fieldProps.help}
					</p>
					}
				</div>
			);
		}

	}

	/**
	 * Render field group
	 */
	return fieldInner(props);
};




FieldGroup.propTypes = fieldGroupPropTypes;

FieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};