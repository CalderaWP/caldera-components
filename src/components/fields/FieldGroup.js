import React from 'react';
import PropTypes from 'prop-types';
import {Input} from './Input';
import classNames from 'classnames';
import {ariaDescribedbyAttr} from './util';
import {
	onValueChangePropType,
	valuePropType,
	fieldGroupPropTypes,
	inputTypeProp
} from './propTypes';

const FieldInner = (props) => {
	function idAttrFromProps() {
		return ariaDescribedbyAttr(props.id, props.help);
	}

	switch( props.type ){
	default:
	case 'input':
		return (
			<Input
				id={props.id}
				fieldClassName={props.fieldClassName}
				ariaDescribedbyAttr={idAttrFromProps()}
				value={props.value}
				onValueChange={props.onValueChange}
				inputType={props.innerType}
			/>);
	}

};

FieldInner.propTypes = {
	id: PropTypes.string.isRequired,
	fieldClassName: PropTypes.string.isRequired,
	help: PropTypes.string,
	value: valuePropType,
	onValueChange: onValueChangePropType,
	inputType: inputTypeProp
};

FieldInner.defaultProps = {
	help: ''
};



export const FieldGroup = (props) => {
	function idAttrFromProps() {
		return ariaDescribedbyAttr(props.id, props.help);
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