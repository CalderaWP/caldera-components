import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup,FormControl,ControlLabel,HelpBlock } from 'react-bootstrap';
export function FieldGroup({ id, label, help, ...props }) {
	return (
		<FormGroup controlId={id}>
			<ControlLabel
				controlId={id}
			>
				{label}
			</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
	);
}

FieldGroup.propTypes = {
	id: PropTypes.string.isRequired,
	props: PropTypes.object,
	help: PropTypes.string,
	label: PropTypes.string.isRequired
};