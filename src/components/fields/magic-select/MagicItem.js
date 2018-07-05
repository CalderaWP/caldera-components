import React from 'react';
import {
	optionShape
} from '../propTypes';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Create magic item for option of magic selects
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const MagicItem = (props) => {
	return React.createElement(
		props.elementType,
		{
			style: {background: props.isHighlighted ? props.highlightColor : props.notHighlighterColor},
			className: classNames(props.className, 'magic-input-option')

		},
		(
			<React.Fragment>
				<span
					className={classNames('magic-item-label', 'magic-item-left')}

				>
				{props.item.value}
			</span>

				<span
					className={classNames('magic-item-value', 'magic-item-right')}
				>
				{props.item.label}
			</span>
			</React.Fragment>
		)
	);
};

/**
 * Prop definitions for MagicItem component
 *
 * @type {{item: shim, isHighlighted: shim, className: shim, highlightColor: shim, notHighlighterColor: shim}}
 */
MagicItem.propTypes = {
	elementType: PropTypes.oneOf(['div', 'span']),
	item: PropTypes.shape(optionShape),
	isHighlighted: PropTypes.bool,
	className: PropTypes.string,
	highlightColor: PropTypes.string,
	notHighlighterColor: PropTypes.string
};

/**
 * Default props for the MagicItem component
 *
 * @type {{isHighlighted: boolean, highlightColor: string, notHighlightedColor: string}}
 */
MagicItem.defaultProps = {
	elementType: 'div',
	isHighlighted: false,
	highlightColor: 'lightgray',
	notHighlightedColor: 'white'
};