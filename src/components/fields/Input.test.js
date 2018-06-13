import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Input} from "./Input";
Enzyme.configure({ adapter: new Adapter() });

describe( 'Input component', () => {
	describe( 'Input component props', () => {
		it( 'Passes its props', () => {
			const component = renderer.create(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
				/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		})
	});

	describe( 'Input component rendering', () => {
		it( 'Has the correct id attribute', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
				/>
			);
			expect( wrapper.find( '#bags').length).toBe(1);
		});

		it( 'has the correct class attribute', () => {
			const wrapper = shallow(
				<Input
					id={'bags'}
					fieldClassName={'foo'}
				/>
			);
			expect( wrapper.find( '.foo').length).toBe(1);
		});
	});
});
