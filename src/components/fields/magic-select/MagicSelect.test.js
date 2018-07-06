import renderer from 'react-test-renderer';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MagicSelect} from './MagicSelect';

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {
};
describe('MagicSelect component', () => {

	it('Matches snapshot', () => {
		const component = renderer.create(
			<MagicSelect
				id={'magic-1'}
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
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Has inner input', () => {
		const component = mount(
			<MagicSelect
				id={'magic-2a'}
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
			/>
		);
		expect(component.find('input')).toHaveLength(1);
	});

	it('puts the right id attribute on inner input', () => {
		const component = mount(
			<MagicSelect
				id={'magic-2'}
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
			/>
		);
		expect(component.find('input').prop('id')).toBe('magic-2');
	});

	describe('Options', () => {
		it('shows no options if closed', () => {
			const component = mount(
				<MagicSelect
					id={'magic-3'}
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

		it('Updates is open state when focused', () => {
			let updatedValue = null;
			const component = mount(
				<MagicSelect
					id={'magic-9'}
					fieldClassName={'magic'}
					onValueChange={(newValue) => {
						updatedValue = newValue;
					}}
					options={[
						{
							label: 'a1',
							value: 1
						},
						{
							label: 'a14',
							value: 14
						}
					]}
				/>
			);
			component.find( 'input' ).simulate('focus');
			expect(component.state('isOpen')).toEqual(true);
		});

		it('Updates is open state when blurred', () => {
			let updatedValue = null;
			const component = mount(
				<MagicSelect
					id={'magic-9-blur'}
					fieldClassName={'magic'}
					onValueChange={(newValue) => {
						updatedValue = newValue;
					}}
					options={[
						{
							label: 'a1',
							value: 1
						},
						{
							label: 'a14',
							value: 14
						}
					]}
				/>
			);
			component.find( 'input' ).simulate('blur');
			expect(component.state('isOpen')).toEqual(false);
		});

		it('Uses options prop by default - right number of options', () => {
			const component = mount(
				<MagicSelect
					id={'magic-4'}
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
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses options prop by default - right number of options', () => {
			const component = mount(
				<MagicSelect
					id={'magic-4'}
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
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses fieldsList prop if no options prop', () => {
			const component = mount(
				<MagicSelect
					id={'magic-5'}
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
			expect(component.find('.magic-input-option')).toHaveLength(3);
		});

		it('Uses systemTagsList prop if no options prop and currentList state is system', () => {
			const component = mount(
				<MagicSelect
					id={'magic-5'}
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
			component.setState({currentList: 'system'});
			expect(component.find('.magic-input-option')).toHaveLength(1);
		});
	});


	describe('Value', () => {
		it('Uses props.value to set value', () => {
			const component = mount(
				<MagicSelect
					id={'magic-7'}
					fieldClassName={'magic'}
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
				<MagicSelect
					id={'magic-9'}
					fieldClassName={'magic'}
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
});