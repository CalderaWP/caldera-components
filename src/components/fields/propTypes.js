import PropTypes from 'prop-types';

export const valuePropType = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number,
	PropTypes.array
]);

export const onValueChangePropType = PropTypes.func.isRequired;
