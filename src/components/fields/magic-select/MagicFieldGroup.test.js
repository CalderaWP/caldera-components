import renderer from 'react-test-renderer';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MagicFieldGroup} from './MagicFieldGroup';

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {
};
describe('MagicFieldGroup component', () => {


	it( 'matches snapshot', () => {
		const component = renderer.create(
			<MagicFieldGroup
				id={'magic-3'}
				label={'Hi Roy'}
				fieldClassName={'magic'}
				onValueChange={genericChangeHandler}
				options={[
					{
						label: 'HTML',
						value: 'html'
					},
					{
						label: 'Plain Text',
						value: 'plain'
					}
				]}
				isOpen={false}
			/>
		);
		expect(component.toJSON() ).toMatchSnapshot();
	});

	describe( 'Inner input', () => {
		it('Has inner input', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-1'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={false}
				/>
			);
			expect(component.find('input').length).toBe(1);
		});
	});
	describe('Options', () => {
		it('shows no options if closed', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-3'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={false}
				/>
			);
			expect(component.find('.magic-input-option')).toHaveLength(0);
		});


		it('Uses options prop by default - right number of options', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-4'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses options prop by default', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-4'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option').length).toBe(2);
		});

		it('Uses fieldsList prop if no options prop', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					label={'Hi Roy'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option').length).toBe(3);
		});

		it('Uses systemTagsList prop if no options prop and currentListType state is system', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			component.setState({currentListType: 'system'});
			expect(component.find('.magic-input-option').length).toBe(1);
		});

		it('Receives updated value', () => {
			let value = '1';
			const component = mount(
				<MagicFieldGroup
					id={'magic-5'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={(newValue) => {
						value = newValue;
					}}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					value={value}
					isOpen={true}
				/>
			);
			component.find('input').simulate('focus');
			component.find('input').simulate('change', { target: { value: '3' } });
			expect( value ).toEqual('3');
		});
	});


	describe('Value', () => {
		it('Uses props.value to set value', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-7'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: '1',
							value: 1
						}
					]}
					value={1}
				/>
			);
			expect(component.find('input').prop('value')).toBe(1);
		});


		it('Passes updated value properly through the onSelect handler', () => {
			let updatedValue = null;
			const component = mount(
				<MagicFieldGroup
					id={'magic-9'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={(newValue) => {
						updatedValue = newValue;
					}}
					options={[
						{
							label: '1',
							value: 1
						},
						{
							label: '14',
							value: 14
						}
					]}
					value={1}
				/>
			);

			component.instance().onSelect(14);
			expect(updatedValue).toEqual(14);
		});
	});

	describe( 'Button group for type choice', () => {
		it( 'Outputs the buttons if open', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-50'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={true}
				/>
			);
			expect(component.find('button').length).toBe(2);
		});
		it( 'Does not output the buttons if not open', () => {
			const component = mount(
				<MagicFieldGroup
					id={'magic-50'}
					fieldClassName={'magic'}
					label={'Hi Roy'}
					onValueChange={genericChangeHandler}
					fieldsList={[
						{
							label: '0',
							value: 0
						},
						{
							label: '1',
							value: 1
						},
						{
							label: '3',
							value: 3
						}
					]}
					systemTagsList={[
						{
							label: '3',
							value: 3
						}
					]}
					isOpen={false}
				/>
			);
			expect(component.find('button').length).toBe(0);
		});
	});
});