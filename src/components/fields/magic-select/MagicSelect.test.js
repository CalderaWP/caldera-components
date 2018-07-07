import renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme';
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
						value: 'html',
						innerKey:'html'
					},
					{
						label: 'Plain Text',
						value: 'plain',
						innerKey:'plain'
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
						value: 'html',
						innerKey:'html'
					},
					{
						label: 'Plain Text',
						value: 'plain',
						innerKey:'plain'
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
						value: 'html',
						innerKey:'html'
					},
					{
						label: 'Plain Text',
						value: 'plain',
						innerKey:'plain'
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
				value: 'html',
				innerKey:'html'
			},
			{
				label: 'Plain Text',
				value: 'plain',
				innerKey:'plain'
			}
		]}
					isOpen={false}
				/>
			);
			expect(component.find('.magic-input-option')).toHaveLength(0);
		});

		it('shows  options if opened', () => {
			const component = mount(
				<MagicSelect
					id={'magic-3'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
			{
				label: 'HTML',
				value: 'html',
				innerKey:'html'
			},
			{
				label: 'Plain Text',
				value: 'plain',
				innerKey:'plain'
			}
		]}
					isOpen={true}
				/>
			);
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Updates is open state when focused', () => {
			let isOpen = false;
			const component = mount(
				<MagicSelect
					id={'magic-9-blur'}
					fieldClassName={'magic'}
					onInputBlur={() => {
						isOpen = true;
					}}
					onFocus={() => {
						isOpen = false;
					}}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'a1',
							value: 1,
							innerKey: '1'
						},
						{
							label: 'a14',
							value: 14,
							innerKey: '2'

						}
					]}
				/>
			);
			component.find( 'input' ).simulate('focus');
			expect(component.prop('isOpen')).toEqual(false);
		});

		it('Updates is open state when blurred', () => {
			let isOpen = false;
			const component = mount(
				<MagicSelect
					id={'magic-9-blur'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					onInputBlur={() => {
						isOpen = true;
					}}
					onFocus={() => {
						isOpen = false;
					}}
					options={[
						{
							label: 'a1',
							value: 1,
							innerKey: '1'
						},
						{
							label: 'a14',
							value: 14,
							innerKey: '2'

						}
					]}
				/>
			);
			component.find( 'input' ).simulate('focus');
			component.find( 'input' ).simulate('blur');
			expect(component.prop('isOpen')).toEqual(false);
		});

		it('Uses options prop by default - right number of options', () => {
			const component = mount(
				<MagicSelect
					id={'magic-4'}
					fieldClassName={'magic'}
					onValueChange={genericChangeHandler}
					options={[
						{
							label: 'a1',
							value: 1,
							innerKey: '1'
						},
						{
							label: 'a14',
							value: 14,
							innerKey: '2'

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
				value: 'html',
				innerKey:'html'
			},
			{
				label: 'Plain Text',
				value: 'plain',
				innerKey:'plain'
			}
		]}
					isOpen={true}
				/>
			);
			expect(component.find('.magic-input-option')).toHaveLength(2);
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
							value: 1,
							innerKey: '11'
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
							value: 1,
							innerKey: '12'
						},
						{
							label: '14',
							value: 14,
							innerKey: '13'

						}
					]}
					value={1}
				/>
			);

			component.instance().onSelect(14);
			expect(updatedValue).toEqual(14);
		});

		it.skip('Receives the updated value ', () => {
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
							value: 12,
							innerKey: '12'
						}
					]}
					value={updatedValue}
					isOpen={true}
				/>
			);

			component.find('input').simulate('change', {event:{target: {value: 12}}} );
			expect(updatedValue).toEqual(14);
		});
	});



});