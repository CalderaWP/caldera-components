import PropTypes from 'prop-types';
import {messagePropShape} from './messages/messagePropTypes';

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
export const inputTypeProp = PropTypes.string;

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
	type: PropTypes.oneOf(['input', 'select', 'fieldset', 'magic', 'file']),
	value: valuePropType,
	onValueChange: onValueChangePropType,
	options: PropTypes.array,
	inputType: inputTypeProp,
	disabled: PropTypes.bool,
	message: messagePropShape,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func
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
	inputType: inputTypeProp,
	ariaDescribedbyAttr: PropTypes.string,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func
};

export const fieldPropTypes = fieldInnerPropTypes;

/**
 * The shape of one option for a select field
 *
 * @type {{label: shim, value: shim}}
 */
export const optionShape = {
	label: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	])
};

/**
 * Shape of options prop for select fields
 *
 * @type {shim}
 */
export const optionsShapeProp = PropTypes.arrayOf(
	PropTypes.shape(optionShape)
);

export const magicGroupPropTypes = {
	...fieldGroupPropTypes,
	fieldsList: optionsShapeProp,
	systemTagsList: optionsShapeProp,
	defaultList: PropTypes.string,
	isOpen: PropTypes.bool,
	type: PropTypes.string,
};

/**
 * Define Prop types needed by File Dropzone
 * 
 * @type {{ signingUrl: string, signingUrlMethod: string, accept: string, s3path: string, onUploadStart: func, onSignedUrl: func, onProgress: func,	onError: func, onFinish: func, signingUrlHeaders: object, signingUrlQueryParams: object, signingUrlWithCredentials: bool, uploadRequestHeaders: object, contentDisposition: string, scrubFilename: func, server: string, inputRef: func, autoUpload: bool }}	
 * */
export const fileFieldPropTypes = {
	...fieldGroupPropTypes,
	attachToMailer: PropTypes.bool,
	saveInLibrary: PropTypes.bool,
	style: PropTypes.object,
	accept: PropTypes.string,
	getDataTransferItems:  PropTypes.func,
	inputProps: PropTypes.object,
	disabled: PropTypes.bool
}