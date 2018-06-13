import PropTypes from 'prop-types';

export const valuePropType = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number,
	PropTypes.array
]);

export const onValueChangePropType = PropTypes.func.isRequired;

export  const inputTypeProp = PropTypes.string;
export const fieldGroupPropTypes = {
	id: PropTypes.string.isRequired,
	isBlockInput: PropTypes.bool,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['input']),
	value: valuePropType,
	onValueChange: onValueChangePropType,
	inputType:inputTypeProp,
};
