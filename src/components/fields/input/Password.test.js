import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Password} from './Password';
import {FieldGroup} from "../FieldGroup";

Enzyme.configure({adapter: new Adapter()});

describe('Input component', () => {
	it('Passes its props', () => {
		const component = renderer.create(
			<Password
				id={'bags'}
				fieldClassName={'foo'}
				onValueChange={() => {
				}}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe('Password component rendering', () => {

		it( 'passes value to change handler', () => {
			let receivedValue = '';
			const handler = (newValue) => {
				receivedValue = newValue;
			};
			const wrapper = shallow(
				<Password
					id={'password2'}
					fieldClassName={'password'}
					onValueChange={handler}
					value={receivedValue}
				/>
			);
			wrapper.find('#password2').simulate('change', { target: { value: '12345' } });
			expect(receivedValue).toBe('12345');
			//expect(wrapper.find('input').prop('type')).toBe('password');
		});

		it( 'Renders in FieldGroup', () => {

			const wrapper = shallow(
				<FieldGroup
					id={'password3'}
					label={'password'}
					type={'password'}
					innertype={'password'}
					isRequired={true}
					value={'12345'}
					onValueChange={() => {

					}}
					help={'aaa'}

				/>
			)
			expect(wrapper.find('#password3').prop('type')).toBe('password');
		});

	});


});



