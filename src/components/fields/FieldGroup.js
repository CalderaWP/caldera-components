import React from 'react';
import classNames from 'classnames';
import {addOrRemoveFromArray, ariaDescribedbyAttr} from './util';
import {
	fieldGroupPropTypes,
} from './propTypes';

import {FieldInner} from './FieldInner';

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

	/**
	 * Based on type, render the field.
	 *
	 * @return {*}
	 */
	function fieldInner(fieldProps){
		function getFieldClassName(conditionalClassNames) {
			return classNames(
				'field-config',
				{
					required: fieldProps.isRequired,
					...conditionalClassNames
				}
			);
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
									onValueChange: () => {
										let values = props.value;
										if( ! Array.isArray( values) ){
											if( 'string' === typeof values || 'number' === typeof  values ){
												values = [values];
											}else{
												values = [];

											}
										}
										values = addOrRemoveFromArray( option.value, values );
										props.onValueChange(values);
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
						inputType: fieldProps.inputType
					}
				)
			);
		}else{
			return (
				<React.Fragment>
					<label
						htmlFor={fieldProps.id}
					>
						{fieldProps.label}
					</label>
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
							inputType: fieldProps.inputType
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
				</React.Fragment>
			);
		}

	}

	/**
	 * Render field group
	 */
	return (
		<div
			className={'caldera-config-group'}
		>
			{fieldInner(props)}

		</div>
	);
};




FieldGroup.propTypes = fieldGroupPropTypes;

FieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};