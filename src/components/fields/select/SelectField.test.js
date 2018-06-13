import {SelectField} from "./SelectField";
import renderer from 'react-test-renderer'
import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {getHtmlInputTypes} from '../util';

describe( 'Select field component', () => {
	function genericChangeHandler() {

	}

	describe( 'Props', () => {
		it( 'Creates with out options or value', () => {
			const component = renderer.create(
				<SelectField
					id={'r'}
					fieldClassName={'rs'}
					onValueChange={genericChangeHandler}
				/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});

		it( 'Creates with options', () => {
			const component = renderer.create(
				<SelectField
					id={'r'}
					fieldClassName={'rs'}
					onValueChange={genericChangeHandler}
					options={[
						{
							value: 1,
							label: 'One'
						}
					]}
				/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});

		it( 'Creates with options and value', () => {
			const component = renderer.create(
				<SelectField
					id={'r'}
					fieldClassName={'rs'}
					onValueChange={genericChangeHandler}
					options={[
						{
							value: '1',
							label: 'One'
						}
					]}
					value={'1'}
				/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});
	});

	describe( 'Renders props with downshift correctly', () => {
		it( 'sets id attr', () => {
			const wrapper = mount(
				<SelectField
					id={'r3s'}
					fieldClassName={'rs'}
					onValueChange={genericChangeHandler}
				/>
			);
			expect(wrapper.find('input').prop('id')).toBe('r3s');
		});

		describe( 'Options ', () => {
			it( 'Adds options when open', () =>{
				const wrapper = mount(
					<SelectField
						id={'r'}
						fieldClassName={'rs'}
						onValueChange={genericChangeHandler}
						options={[
							{
								value: 1,
								label: 'One'
							},
							{
								value: 2,
								label: 'Two'
							}
						]}
					/>
				);
				expect(wrapper.find('.caldera-config-option').length).toBe(0);
			});

			it( 'Does not add options when not open', () => {
				const wrapper = mount(
					<SelectField
						id={'r'}
						fieldClassName={'rs'}
						onValueChange={genericChangeHandler}
						options={[
							{
								value: 1,
								label: 'One'
							},
							{
								value: 2,
								label: 'Two'
							}
						]}
						isOpen={true}
					/>
				);
				expect(wrapper.find('.caldera-config-option') .length).toBe(2);
			});

		});

		describe( 'Value of field', () => {
			it( 'Set value from default', () => {
				let updateValue = false;
				const wrapper = mount(
					<SelectField
						id={'r'}
						fieldClassName={'rs'}
						onValueChange={(newValue) => {
							updateValue = newValue;
						}}
						options={[
							{
								value: 'one',
								label: 'One'
							},
							{
								value: '2',
								label: 'Two'
							}
						]}
						value={'2'}
					/>
				);
				expect( wrapper.find('input').prop( 'value' ) ).toEqual('2');
			});
		});


	});



});