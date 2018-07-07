import {ButtonGroup} from './ButtonGroup';
import renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Button Group component', () => {
	function genericChangeHandler() {

	}

	describe( 'options', () =>{
		it('Creates with one option', () => {
			const component = renderer.create(
				<ButtonGroup
					onChange={genericChangeHandler}
					options={[
						{
							value: 'Tags',
							label: 'Tags'
						}
					]}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});
		it('Renders two buttons', () => {
			let updateValue = null;
			const component = mount(
				<ButtonGroup
					onChange={(newValue) => {
						updateValue = newValue;
					}}
					options={[
						{
							value: 'tags',
							label: 'Tags'
						},
						{
							value: 'categories',
							label: 'Categories'
						}
					]}
				/>
			);
			expect(component.find('button')).toHaveLength(2);
		});

		it('Sends the right update value when clicked', () => {
			let updateValue = null;
			const component = mount(
				<ButtonGroup
					onChange={(newValue) => {
						updateValue = newValue;
					}}
					options={[
						{
							value: 'Tags',
							label: 'Tags'
						}
					]}
				/>
			);
			component.find('button').simulate('click');
			expect(updateValue).toBe('Tags');
		});

		it('Marks the value as selected if it should on initial load', () => {
			const component = mount(
				<ButtonGroup
					onChange={() => {

					}}
					options={[
						{
							value: 'a1',
							label: 'Tags'
						}
					]}
					value={'a1'}
				/>
			);

			expect(component.find('button').hasClass('selected')).toBe(true);
		});

		it('Sets aria-label to label  when ariaLabel not provided', () => {
			const component = mount(
				<ButtonGroup
					onChange={genericChangeHandler}
					options={[
						{
							value: 'a1',
							label: 'Tags',
						}
					]}
				/>
			);

			expect(component.find('button').prop('aria-label')).toBe('Tags');
		});

		it('Sets aria-label to explicit value when passed', () => {
			const component = mount(
				<ButtonGroup
					onChange={genericChangeHandler}
					options={[
						{
							value: 'a1',
							label: 'Tags',
							ariaLabel:'Select field values'
						}
					]}
				/>
			);

			expect(component.find('button').prop('aria-label')).toBe('Select field values');
		});
	});

	describe( 'icon buttons', ()=> {
		it('Creates with an icon option', () => {
			const component = renderer.create(
				<ButtonGroup
					onChange={genericChangeHandler}
					options={[
						{
							value: 'Tags',
							label: 'Tags',
							icon: 'fa-envelope'
						}
					]}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});
	});


});