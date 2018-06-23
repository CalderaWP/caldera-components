import {FieldGroup} from './FieldGroup';
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe( 'Field Group component', () => {
	describe('Field group component props', () => {
		it('Works with help text', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-20'}
					label={'Who'}
					help={'Who to say hi to'}
					onValueChange={() => {}}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Help text is optional', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-21'}
					label={'Who'}
					onValueChange={() => {}}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can show an input ', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-22'}
					label={'Who'}
					type={'input'}
					onValueChange={() => {}}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can mark inner input as required', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-223'}
					label={'Who'}
					type={'input'}
					isRequired={true}
					onValueChange={() => {}}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Field group component rendering', () => {


		describe( 'inner input', () => {
			it('Has inner input', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
					onValueChange={() => {}}
				/>);

				expect(wrapper.find('#test-control input').length).toBeTruthy();
			});

			it('controls inner input  html5 type', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
					onValueChange={() => {}}
					value={'Sivans'}
					inputType={'hidden'}
				/>);

				expect( wrapper.find('#test-control input').prop( 'type') ).toEqual('hidden');
			});

			it( 'Can change inner input', () => {
				let setValue = '';

				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
					onValueChange={(newValue) => {
						setValue = newValue;
					}}
					value={'Sivans'}
				/>);

				wrapper.find('#test-control input').simulate('change', { target: { value: 'r3s' } });
				expect( setValue ).toEqual('r3s');

			});
		});

		describe( 'Label of Input', () => {
			it( 'Has no label for hidden fields ', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'I will not be outputed'}
					type={'input'}
					inputType={'hidden'}
					onValueChange={() => {}}
					value={'Sivans'}
				/>);
				expect( wrapper.find( 'input') ).toHaveLength(1);
				expect( wrapper.find( 'label') ).toHaveLength(0);
			});

			it( 'Has has label for other input fields ', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'I will not be outputed'}
					type={'input'}
					onValueChange={() => {}}
					value={'Sivans'}
				/>);
				expect( wrapper.find( 'input') ).toHaveLength(1);
				expect( wrapper.find( 'label') ).toHaveLength(1);
			});

		});

	});

	describe.skip( 'Using as a select field', () => {

		it( 'Outputs a select field', () => {
			const wrapper = mount(<FieldGroup
				id={'select'}
				label={'Basic select field'}
				value={'1'}
				type={'select'}
				onValueChange={() => {

				}}
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
			/>);
			expect( wrapper.find( 'select') ).toHaveLength(1);
			expect( wrapper.find( 'label') ).toHaveLength(1);
		});

		it( 'Outputs a select field label', () => {
			const wrapper = mount(<FieldGroup
				id={'select2'}
				label={'Basic select field'}
				value={'1'}
				type={'select'}
				onValueChange={() => {

				}}
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
			/>);
			expect( wrapper.find( 'label') ).toHaveLength(1);
		});

		it( 'Outputs the right select field label', () => {
			const wrapper = mount(<FieldGroup
				id={'select3'}
				label={'Basic select field'}
				value={'1'}
				type={'select'}
				onValueChange={() => {
				}}
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
			/>);
			expect( wrapper.find( 'label').text() ).toEqual( 'Basic select field' );
		});
	});

	describe( '<fieldset>', () =>{
		describe( 'checkbox fieldsets', () =>{
			it( 'Has a fieldset wrapper', () => {
				const wrapper = mount(
					<FieldGroup
						id={'fieldset-1'}
						label={'How many'}
						onValueChange={() => {}}
						inputType={'checkbox'}
						type={'fieldset'}
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
				expect( wrapper.find('fieldset')).toHaveLength(1);
			});

			it( 'Has a legend inside of the fieldset ', () => {
				const wrapper = mount(
					<FieldGroup
						id={'fieldset-2'}
						label={'How many'}
						onValueChange={() => {}}
						inputType={'checkbox'}
						type={'fieldset'}
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
				expect( wrapper.find('fieldset').children().find('legend')).toHaveLength(1);
			});

			it( 'Has a the right legend inside of the fieldset ', () => {
				const wrapper = mount(
					<FieldGroup
						id={'fieldset-3'}
						label={'How many'}
						onValueChange={() => {}}
						inputType={'checkbox'}
						type={'fieldset'}
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
				expect( wrapper.find('fieldset').children().find('legend').text()).toEqual('How many');
			});

			it( 'Has 2 checkboxes inside of the fieldset', () => {
				const wrapper = mount(
					<FieldGroup
						id={'fieldset-3'}
						label={'How many'}
						onValueChange={() => {}}
						inputType={'checkbox'}
						type={'fieldset'}
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
				expect( wrapper.find('fieldset').children().find('input')).toHaveLength(2);
			});

		});

	});
});