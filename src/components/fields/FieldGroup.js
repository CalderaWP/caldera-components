import React from 'react';
import PropTypes from 'prop-types';
import {Input} from './Input';
import classNames from 'classnames';
import {ariaDescribedbyAttr} from './util';
import {
	onValueChangePropType,
	valuePropType
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
			/>);
	}

};

FieldInner.propTypes = {
	id: PropTypes.string.isRequired,
	fieldClassName: PropTypes.string.isRequired,
	help: PropTypes.string,
	value: valuePropType,
	onValueChange: onValueChangePropType
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
					onValueChange:props.onValueChange
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

FieldGroup.propTypes = {
	id: PropTypes.string.isRequired,
	isBlockInput: PropTypes.bool,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['input' ]),
	value: valuePropType,
	onValueChange: onValueChangePropType
};

FieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};