import React from 'react';
import propTypes from 'prop-types';
import {fieldSetFactory} from './fields/factories/fieldSetFactory';

/**
 * Component for rendering an array of field configs
 */
export class RenderGroup extends React.Component {


	/**
	 * Constructor for RenderGroup component
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);
		this.createComponents = this.createComponents.bind(this);
	}

	/**
	 * Create components
	 *
	 * @return {Array}
	 */
	createComponents() {
		let configFields = this.props.configFields;

		/**
		 * Find config field ID/id
		 *
		 * @param {Object} configField
		 * @return {boolean}
		 */
		function findFieldId(configField) {
			return configField.ID ? configField.ID : configField.id ? configField.id : false;
		}

		if( 'function' === typeof this.props.onBlur  ){
			configFields.forEach((configField, configFieldIndex ) => {
				const configFieldId = findFieldId(configField);
				if( configFieldId ){
					configFields[configFieldIndex].onBlur = () => {
						this.props.onBlur(configFieldId);
					};

				}

			});

		}
		if( 'function' === typeof this.props.onFocus ){
			configFields.forEach((configField, configFieldIndex ) => {
				const configFieldId = findFieldId(configField);
				if( configFieldId ){
					configFields[configFieldIndex].onFocus = () => {
						this.props.onFocus(configFieldId);
					};

				}

			});
		}
		return fieldSetFactory(configFields);
	}

	/**
	 * Renderer for RenderGroup component
	 *
	 * @return {*}
	 */
	render() {
		return (
			<div
				className={this.props.className ? this.props.className : RenderGroup.classNames.renderGroupWrapper}
			>
				{this.createComponents().map((configField, i) => {
					return React.createElement(
						'div', {
							key: i,
							className: RenderGroup.classNames.fieldGroup
						},
						configField
					);
				})}
			</div>
		);
	}
}

/**
 * Prop definitions for RenderGroup component
 * @type {{configFields: *, className: shim}}
 */
RenderGroup.propTypes = {
	configFields: propTypes.array.isRequired,
	className: propTypes.string,
	onBlur: propTypes.func,
	onFocus: propTypes.func
};

/**
 * Classnames for elements (wrappers, field groups and form fields)
 *
 * @type {{renderGroupWrapper: string, fieldWrapper: string}}
 */
RenderGroup.classNames = {
	renderGroupWrapper: 'caldera-config-field-setup',
	fieldGroup: 'caldera-config-group',
	fieldWrapper: 'caldera-config-field',
	input: 'field-config',
	button: 'caldera-config-button',

};