import React from 'react';
import PropTypes from 'prop-types';
import {messagePropShape} from "./messagePropTypes";
import classNames from 'classnames';

/**
 * Prop for showing a validation message
 *
 * Use or for errors and such
 *
 * @param {object}  props
 * @return {*}
 * @constructor
 */
export const Message = (props) => {
	const {message,error} = props.message;
	if( !message || '' === message ){
		return;
	}
	return(
		<div
			className={classNames(
				props.className,
				'caldera-components-error',
				{
					'has-error': error,
				}
			)}
		>
			{message}
		</div>
	)
};

/**
 * Prop types for Message components
 *
 * @type {{className: shim, message}}
 */
Message.propTypes = {
	className: PropTypes.string,
	message: messagePropShape,
};

