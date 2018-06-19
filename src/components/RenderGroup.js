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
	constructor(props){
		super(props);
		this.createComponents = this.createComponents.bind(this);
	}

	/**
	 * Create components
	 *
	 * @return {Array}
	 */
	createComponents(){
		return fieldSetFactory(this.props.configFields);
	}

	/**
	 * Renderer for RenderGroup component
	 *
	 * @return {*}
	 */
	render(){
		return(
			<div className={this.props.className ? this.props.className : ''}>
				{this.createComponents().map((configField,i) => {
					return React.createElement(
						React.Fragment, {
							key: i,
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
	className: propTypes.string
};