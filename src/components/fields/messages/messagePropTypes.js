import PropTypes from 'prop-types';

/**
 * The shape of the message object passed to Message compoent
 *
 * @type {shim}
 */
export const messagePropShape = PropTypes.shape(
	{
		error: PropTypes.bool,
		text: PropTypes.string
	}
);