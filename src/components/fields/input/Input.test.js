import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Input} from './Input';
Enzyme.configure({ adapter: new Adapter() });
import {getHtmlInputTypes} from '../util';

describe( 'Input component', () => {
	describe( 'Input component props', () => {
		it( 'Passes its props', () => {
			const component = renderer.create(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {}}
				/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});

		it( 'passes the value', () => {
			const wrapper = renderer.create(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {}}
					value={'Sivans'}
				/>
			);
			expect( wrapper.toJSON() ).toMatchSnapshot();
		});
	});

	describe( 'Input component rendering', () => {
		it( 'Has the correct id attribute', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {}}

				/>
			);
			expect( wrapper.find( '#bags')).toHaveLength(1);
		});

		it( 'Has the correct class attribute', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {}}
				/>
			);
			expect( wrapper.find( '.foo' )).toHaveLength(1);
		});

		it( 'Has the value', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
					onValueChange={() => {}}
					value={'Sivans'}
				/>
			);
			expect( wrapper.find('input').prop('value') ).toBe('Sivans');
		});

		it( 'Updates the value when changed', () => {
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
			wrapper.find('input').simulate('change', { target: { value: 'r3s' } });
			expect( setValue ).toEqual('r3s');
		});
	});

	describe('Works for all HTML5 input types via inputType prop', () => {
		getHtmlInputTypes().forEach((type) => {
			it(`inputType prop of ${type} works`, () => {
				const wrapper = shallow(
					<Input
						id={'bags'}
						fieldClassName={'foo'}
						onValueChange={() => {}}
						value={'Sivans'}
						inputType={type}
					/>
				);
				expect(wrapper.find('input').prop('type')).toBe(type);
			});

		});
	});

	describe.skip('Checkbox', () => {
		it('Can be a checkbox', () => {
			const component = renderer.create(
				<Input
					id={'check1'}
					fieldClassName={'check1'}
					onValueChange={() => {}}
					value={true}
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
					onValueChange={() => {}}
					value={true}
					inputType={'checkbox'}
				/>
			);
			expect(wrapper.find('input').prop('type')).toEqual('checkbox');
		});

		it('Sets checked prop to true if value is true', () => {
			const wrapper = shallow(
				<Input
					id={'check3'}
					fieldClassName={'check1'}
					onValueChange={() => {}}
					value={true}
					inputType={'checkbox'}
				/>
			);
			expect(wrapper.find('input').prop('checked')).toEqual(true);
		});

		it('Sets checked prop to false if value is false', () => {
			const wrapper = shallow(
				<Input
					id={'check4'}
					fieldClassName={'check1'}
					onValueChange={() => {}}
					value={false}
					inputType={'checkbox'}
				/>
			);
			expect(wrapper.find('input').prop('checked')).toEqual(false);
		});

		it('Updates checked prop when clicked and value is true', () => {
			const wrapper = shallow(
				<Input
					id={'check5'}
					fieldClassName={'check1'}
					onValueChange={() => {}}
					value={true}
					inputType={'checkbox'}
				/>
			);
			wrapper.find('input').simulate('click');
			expect(wrapper.find('input').prop('checked')).toEqual(false);
		});

		it('Updates checked prop when clicked and value is false', () => {
			const wrapper = shallow(
				<Input
					id={'check5'}
					fieldClassName={'check1'}
					onValueChange={() => {}}
					value={false}
					inputType={'checkbox'}
				/>
			);
			wrapper.find('input').simulate('click');
			expect(wrapper.find('input').prop('checked') ).toEqual(true);
		});

	});

});
