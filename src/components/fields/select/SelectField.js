import React from 'react'
import Downshift from 'downshift'
import PropTypes from 'prop-types'
import {fieldPropTypes} from "../propTypes";

export const SelectField = (props) => {
	function changeHandler(selection) {
		return props.onValueChange(selection);
	}

	return (
		<Downshift
			inputValue={props.value}
			defaultInputValue={props.value}
			onChange={changeHandler}
			itemToString={item => (item ? item.value : '')}
			defaultIsOpen={props.isOpen}
		>
			{({
				  getInputProps,
				  getItemProps,
				  getLabelProps,
				  isOpen,
				  inputValue,
				  highlightedIndex,
				  selectedItem,
			  }) => (
				<div>
					<input {...getInputProps({
						id: props.id
					})} />
					{isOpen ? (
						<div>
							{props.options
								.filter(item => !inputValue || item.value.includes(inputValue))
								.map((item, index) => (
									<div
										{...getItemProps({
											key: item.value,
											index,
											item,
											style: {
												backgroundColor:
													highlightedIndex === index ? 'lightgray' : 'white',
												fontWeight: selectedItem === item ? 'bold' : 'normal',
											},
											className:'caldera-config-option'
										})}
									>
										{item.value}
									</div>
								))}
						</div>
					) : null}
				</div>
			)}
		</Downshift>
	)
};


SelectField.propTypes = {
	...fieldPropTypes,
	isOpen: PropTypes.bool,
}