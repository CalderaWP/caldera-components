import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Button} from "./Button";

Enzyme.configure({adapter: new Adapter()});

describe('Button component', () => {
	function genericChangeHandler() {
	}

	describe( 'props', () => {
		it('snapshot for submit', () => {
			const component = renderer.create(
				<Button
					onClick={genericChangeHandler}
					id={'button-1'}
					fieldClassName={'foo'}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();

		});

		it('snapshot for button', () => {
			const component = renderer.create(
				<Button
					onClick={genericChangeHandler}
					inputType={'button'}
					id={'button-2'}
					fieldClassName={'foo'}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();

		});
	});

	describe( 'clicks', () => {

		it('Has a submit button by default', () => {
			const component = shallow(
				<Button
					onClick={genericChangeHandler}
					id={'button-3'}
					fieldClassName={'foo'}
				/>
			);
			expect(component.find('input').length).toEqual(1);
		});


		it('Handler called when submit click', () => {
			let clicked = false;
			const component = shallow(
				<Button
					onClick={() => {
						clicked = true;
					}}
					id={'button-4'}
					fieldClassName={'foo'}
				/>
			);

			component.find('input').simulate('click');
			expect(clicked).toEqual(true);

		});

		it('Has a button when inputType is button', () => {
			const component = shallow(
				<Button
					onClick={genericChangeHandler}
					id={'button-5'}
					fieldClassName={'foo'}
					inputType={'button'}
				/>
			);

			expect(component.find('button').length).toEqual(1);
		});


		it('Handler called when submit click', () => {
			let clicked = false;
			const component = shallow(
				<Button
					onClick={() => {
						clicked = true;
					}}
					id={'button-4'}
					fieldClassName={'foo'}
					inputType={'button'}

				/>
			);
			component.find('button').simulate('click');
			expect(clicked).toEqual(true);


		});

	});


});