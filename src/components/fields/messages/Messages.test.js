import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Message} from "./Message";

Enzyme.configure({ adapter: new Adapter() });

describe( 'Message component', () => {
	describe( 'Classnames', () => {
		describe( 'Displaying message', () => {
			it( 'Shows a message', () => {
				const wrapper = shallow(
					<Message
						message={{
							message:'Hi Roy'
						}}
					/>
				);
				expect( wrapper.length ).toBe(1);
			});

			it( 'Shows the right message message', () => {
				const wrapper = shallow(
					<Message
						message={{
							message:'Hi Roy'
						}}
					/>
				);
				expect( wrapper.text() ).toBe('Hi Roy');
			});

		});

		it( 'shows classname prop as class', () => {
			const wrapper = shallow(
				<Message
					message={{
						message:'Hi Roy'
					}}
					className={'mike'}
				/>
			);
			expect( wrapper.find( '.mike').length ).toBe(1);
		});

		it( 'Has error class when is an error', () => {
			const wrapper = shallow(
				<Message
					message={{
						message:'Something bad has happened.',
						error: true,
					}}
				/>
			);
			expect( wrapper.find( '.has-error').length ).toBe(1);
		});

		it( 'Does not have error class when is not an error', () => {
			const wrapper = shallow(
				<Message
					message={{
						message:'Something good has happened.',
						error: false,
					}}
				/>
			);
			expect( wrapper.find( '.has-error').length ).toBe(0);
		});

		it( 'Does have caldera-components-error class when an error', () => {
			const wrapper = shallow(
				<Message
					message={{
						message:'Something',
						error: true,
					}}
				/>
			);
			expect( wrapper.find( '.caldera-components-error').length ).toBe(1);
		});

		it( 'Does have caldera-components-error class when not an error', () => {
			const wrapper = shallow(
				<Message
					message={{
						message:'Something',
						error: false,
					}}
				/>
			);
			expect( wrapper.find( '.caldera-components-error').length ).toBe(1);
		});
	});


});