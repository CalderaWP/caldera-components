import React from  'react';
import PropTypes from 'prop-types';

/**
 * A status indicator componet with CF Admin classes expected for CSS
 * @param props
 * @return {*}
 * @constructor
 */
export  const StatusIndicator = (props) =>{
	if( ! props.show){
		return null;
	}
	let className = 'cf-alert';
	if( props.success){
		className = `${className} cf-alert-success`;
	}else{
		className = `${className} cf-alert-error`;
	}

	return(
		<div className={'cf-alert-wrap'}>
			<p
				className={className}
			>
				{props.message}
			</p>
		</div>
	);

};
/**
 * Default props for the StatusIndicator compoents
 * @type {{message: shim, success: shim, show: shim}}
 */
StatusIndicator.propTypes = {
	message: PropTypes.string,
	success: PropTypes.bool,
	show: PropTypes.bool,
};