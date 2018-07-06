import React from 'react';
import {
	optionShape
} from '../propTypes';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Create magic item for option of magic selects
 *
 * This can not be a functional component
 * https://github.com/reactjs/react-autocomplete/pull/293#issuecomment-371617758
 *
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export class MagicItem extends React.PureComponent {

	/**
	 * Render magic item components
	 */
	render() {
		return React.createElement(
			this.props.elementType,
			{
				style: {background: this.props.isHighlighted ? this.props.highlightColor : this.props.notHighlighterColor},
				className: classNames(this.props.className, 'magic-input-option'),

			},
			[
				React.createElement(
					this.props.innerElementType,
					{
						key: `left--${this.props.innerKey}`,
						className: classNames('magic-item-value', 'magic-item-left')
					},
					this.props.item.value
				),
				React.createElement(
					this.props.innerElementType,
					{
						key: `right--${this.props.innerKey}`,
						className: classNames('magic-item-label', 'magic-item-right')
					},
					this.props.item.label
				)
			]
		);
	}
};

/**
 * Prop definition for allowed element types
 * @type {shim}
 */
const elementTypesProp = PropTypes.oneOf(['div', 'span']);
/**
 * Prop definitions for MagicItem component
 *
 * @type {{item: shim, isHighlighted: shim, className: shim, highlightColor: shim, notHighlighterColor: shim}}
 */
MagicItem.propTypes = {
	elementType: elementTypesProp,
	innerElementType: elementTypesProp,
	item: PropTypes.shape(optionShape),
	isHighlighted: PropTypes.bool,
	className: PropTypes.string,
	highlightColor: PropTypes.string,
	notHighlighterColor: PropTypes.string,
	innerKey: PropTypes.string.isRequired
};

/**
 * Default props for the MagicItem component
 *
 * @type {{isHighlighted: boolean, highlightColor: string, notHighlightedColor: string}}
 */
MagicItem.defaultProps = {
	elementType: 'div',
	innerElementType: 'span',
	isHighlighted: false,
	highlightColor: 'lightgray',
	notHighlightedColor: 'white',
};