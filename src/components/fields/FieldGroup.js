import React from 'react';
import classNames from 'classnames';
import {ariaDescribedbyAttr} from './util';
import {
	fieldGroupPropTypes,
} from './propTypes';

import {FieldInner} from './FieldInner';


export const FieldGroup = (props) => {
	function idAttrFromProps() {
		return ariaDescribedbyAttr(props.id, props.help);
	}

	/**
	 *
	 * @return {*}
	 */
	function fieldInner(fieldProps){
		if( 'hidden' === fieldProps.inputType ){
			return (
				FieldInner(
					{
						type: props.type,
						id: props.id,
						fieldClassName: classNames(
							'field-config',
							{
								required: fieldProps.isRequired,
							}
						),
						value:fieldProps.value,
						onValueChange:fieldProps.onValueChange,
						inputType: fieldProps.inputType
					}
				)
			);
		}

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
						fieldClassName: classNames(
							'field-config',
							{
								required: fieldProps.isRequired,
								'block-input': fieldProps.isBlockInput
							}
						),
						help:fieldProps.help,
						value:fieldProps.value,
						onValueChange:fieldProps.onValueChange,
						inputType: fieldProps.inputType
					}
				)}
				{fieldProps.help &&
				<p
					id={`${idAttrFromProps()}`}
					className={'description'}
				>
					{fieldProps.help}
				</p>
				}
			</React.Fragment>
		)
	}

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