import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Input} from './Input';
Enzyme.configure({ adapter: new Adapter() });

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
});
