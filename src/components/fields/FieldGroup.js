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

	if( 'hidden' === props.inputType ){
		return (
			FieldInner(
				{
					id: props.id,
					fieldClassName: classNames(
						'field-config',
						{
							required: props.isRequired,
						}
					),
					value:props.value,
					onValueChange:props.onValueChange,
					inputType: props.inputType
				}
			)
		);
	}

	return (
		<div
			className={'caldera-config-group'}
		>
			<label
				htmlFor={props.id}
			>
				{props.label}
			</label>
			{FieldInner(
				{
					id: props.id,
					fieldClassName: classNames(
						'field-config',
						{
							required: props.isRequired,
							'block-input': props.isBlockInput
						}
					),
					help:props.help,
					value:props.value,
					onValueChange:props.onValueChange,
					inputType: props.inputType
				}
			)}
			{props.help &&
				<p
					id={`${idAttrFromProps()}`}
					className={'description'}
				>
					{props.help}
				</p>
			}
		</div>
	);
};




FieldGroup.propTypes = fieldGroupPropTypes;

FieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};