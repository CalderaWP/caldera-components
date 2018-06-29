import React from 'react';
import PropTypes from 'prop-types';
import {messagePropShape} from './messagePropTypes';
import classNames from 'classnames';

/**
 * The class that message components always wrap messages in
 * @type {string}
 */
export const MESSAGE_CLASS = 'caldera-components-message';

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
		return <React.Fragment></React.Fragment>;
	}
	return(
		<div
			className={classNames(
				props.className,
				MESSAGE_CLASS,
				{
					'has-error': error,
					'caldera-components-error': error,
					'caldera-components-not-error': ! error,

				}
			)}
		>
			{message}
		</div>
	);
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

