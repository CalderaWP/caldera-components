import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Input} from './Input';

Enzyme.configure({adapter: new Adapter()});
import {getHtmlInputTypes} from '../util';
import {fieldsetCheckboxHandler} from "../field-group-change-handlers/fieldsetCheckboxHandler";

describe('Input component', () => {
	describe('Input component props', () => {
		it('Passes its props', () => {
			const component = renderer.create(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {
					}}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('passes the value', () => {
			const wrapper = renderer.create(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {
					}}
					value={'Sivans'}
				/>
			);
			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe('Input component rendering', () => {
		it('Has the correct id attribute', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {
					}}

				/>
			);
			expect(wrapper.find('#bags')).toHaveLength(1);
		});

		it('Has the correct class attribute', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {
					}}
				/>
			);
			expect(wrapper.find('.foo')).toHaveLength(1);
		});

		it('Has the value', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {
					}}
					value={'Sivans'}
				/>
			);
			expect(wrapper.find('input').prop('value')).toBe('Sivans');
		});

		it('Updates the value when changed', () => {
			let setValue = '';
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={(newValue) => {
						setValue = newValue;
					}}
					value={'Sivans'}
				/>
			);
			wrapper.find('input').simulate('change', {target: {value: 'r3s'}});
			expect(setValue).toEqual('r3s');
		});

		describe('Disabled prop', () => {
			it('Does not disable by default', () => {
				const wrapper = shallow(
					<Input
						id={'i8'}
						fieldClassName={'foo'}
						onValueChange={() => {
						}}
						value={'Sivans'}
					/>
				);
				expect(wrapper.find('input').prop('disabled')).toBe(undefined);
			});

			it('Does  disable by default', () => {
				const wrapper = shallow(
					<Input
						id={'i8'}
						fieldClassName={'foo'}
						onValueChange={() => {
						}}
						value={'Sivans'}
						disabled={true}
					/>
				);
				expect(wrapper.find('input').prop('disabled')).toBe(true);
			});
		});
	});

	describe('Works for all HTML5 input types via inputType prop', () => {
		getHtmlInputTypes().forEach((type) => {
			it(`inputType prop of ${type} works`, () => {
				const wrapper = shallow(
					<Input
						id={'bags'}
						fieldClassName={'foo'}
						onValueChange={() => {
						}}
						value={'Sivans'}
						inputType={type}
					/>
				);
				expect(wrapper.find('input').prop('type')).toBe(type);
			});

		});
	});

	describe('Checkbox', () => {
		describe('props for checkboxes', () => {
			it('Can be a checkbox', () => {
				const component = renderer.create(
					<Input
						id={'check1'}
						fieldClassName={'check1'}
						onValueChange={() => {
						}}
						value={'true'}
						inputType={'checkbox'}
					/>
				);
				expect(component.toJSON()).toMatchSnapshot();
			});

			it('Has checkbox type', () => {
				const wrapper = shallow(
					<Input
						id={'check2'}
						fieldClassName={'check1'}
						onValueChange={() => {
						}}
						value={'true'}
						inputType={'checkbox'}
					/>
				);
				expect(wrapper.find('input').prop('type')).toEqual('checkbox');
			});

			it('Sets defaultChecked prop to true', () => {
				let value = true;
				const wrapper = shallow(
					<Input
						id={'check5'}
						fieldClassName={'check1'}
						onValueChange={(newValue) => {
							value = newValue;
						}}
						value={value}
						inputType={'checkbox'}
					/>
				);
				expect(wrapper.find('input').prop('defaultChecked')).toEqual(true);
			});

			it('Sets defaultChecked prop to false', () => {
				let value = false;
				const wrapper = shallow(
					<Input
						id={'check6'}
						fieldClassName={'check1'}
						onValueChange={(newValue) => {
							value = newValue;
						}}
						value={value}
						inputType={'checkbox'}
					/>
				);
				expect(wrapper.find('input').prop('defaultChecked')).toEqual(false);
			});

		});

	});

});




