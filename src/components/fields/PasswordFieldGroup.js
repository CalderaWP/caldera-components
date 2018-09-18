import React from 'react';
import classNames from 'classnames';
import {ariaDescribedbyAttr} from './util';
import {
	fieldGroupPropTypes,
} from './propTypes';
import {FieldGroup} from "./FieldGroup";
import {FieldInner} from './FieldInner';
import {RenderGroup} from '../RenderGroup';
import {Message} from './messages/Message';
import {messageObjectFactory} from './messages/messageObjectFactory';
import {Password} from "./input/password";

/**
 * Represents one configField -- wrapper, label and input.
 *
 * @param props
 * @return {*}
 * @constructor
 */
export const PasswordFieldGroup = (props) => {

	/**
	 * Creates the id attribute
	 * @return {String}
	 */
	function idAttrForHelpElement() {
		return ariaDescribedbyAttr(props.id, props.help);
	}

	const message = 'object' === typeof  props.message
		? messageObjectFactory(props.message)
		: messageObjectFactory({message: null, error: false});

	return (
		<div
			className={RenderGroup.classNames.fieldWrapper}
		>
			<FieldGroup.Label
				id={props.id}
				label={props.label}
			/>

			<Message
				message={message}
			/>
			<Password
				id={props.id}
				type={'password'}
				help={props.help}
				onClick={props.onClick}
				disabled={props.disabled}
				onFocus={props.onFocus}
				onBlur={props.onBlur}
				fieldClassName={
					classNames(
						props.fieldClassName,
						{
							required: props.isRequired,
						}
					)
				}
			/>

			{props.help &&
			<p
				id={`${idAttrForHelpElement()}`}
				className={'description'}
			>
				{props.help}
			</p>
			}
		</div>
	);


};

/**
 * The prop type definitions for FieldGroup components
 *
 * @type {{id: (boolean|shim|*), isBlockInput: shim, isRequired: shim, help: shim, label: (boolean|shim|*), type: shim, value: shim, onValueChange: (boolean|shim|*), inputType: shim}}
 */
PasswordFieldGroup.propTypes = fieldGroupPropTypes;

/**
 * Default props for FieldGroups
 *
 * @type {{isBlockInput: boolean, isRequired: boolean, help: string}}
 */
PasswordFieldGroup.defaultProps = {
	isBlockInput: true,
	isRequired: false,
	help: ''
};
