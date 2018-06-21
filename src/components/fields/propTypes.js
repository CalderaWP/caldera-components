import PropTypes from 'prop-types';

/**
 * PropType for the field value used in multiple components
 *
 * @type {shim}
 */
export const valuePropType = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number,
	PropTypes.array,
	PropTypes.bool
]);

/**
 * PropType for the field value change event used in multiple components
 *
 * @type {shim}
 */
export const onValueChangePropType = PropTypes.func.isRequired;

/**
 * Proptypes for Input component
 * @type {shim}
 */
export  const inputTypeProp = PropTypes.string;

/**
 * PropTypes for field groups
 *
 * @type {{id: (boolean|shim|*), isBlockInput: shim, isRequired: shim, help: shim, label: (boolean|shim|*), type: shim, value: shim, onValueChange: (boolean|shim|*), inputType: shim}}
 */
export const fieldGroupPropTypes = {
	id: PropTypes.string.isRequired,
	isBlockInput: PropTypes.bool,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	label: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['input','select', 'fieldset']),
	value: valuePropType,
	onValueChange: onValueChangePropType,
	inputType:inputTypeProp,
};

/**
 * PropTypes for the InnerField component
 *
 * @type {{id: (boolean|shim|*), fieldClassName: (boolean|shim|*), help: shim, value: shim, onValueChange: (boolean|shim|*), inputType: shim}}
 */
export const fieldInnerPropTypes = {
	id: PropTypes.string.isRequired,
	fieldClassName: PropTypes.string.isRequired,
	help: PropTypes.string,
	value: valuePropType,
	onValueChange: onValueChangePropType,
	inputType: inputTypeProp
};

export const fieldPropTypes = {
	...fieldInnerPropTypes,
	options: PropTypes.array,
	ariaDescribedbyAttr: PropTypes.string,
};