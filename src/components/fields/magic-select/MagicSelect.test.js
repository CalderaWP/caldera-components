
import renderer from 'react-test-renderer';
import React from 'react';
import {mount,shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MagicSelect } from "./MagicSelect";

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {};
describe( 'MagicSelect component', () => {

	it( 'Matches snapshot', () => {
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
		expect( component.toJSON() ).toMatchSnapshot();
	});

	it( 'Has inner input', () => {
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
		expect( component.find( 'input' ).length ).toBe(1);
	});

	it( 'puts the right id attribute on inner input', () => {
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
		expect( component.find( 'input' ).prop( 'id') ).toBe('magic-2');
	});

	describe( 'Options', () => {
		it( 'shows none if closed', () => {
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
			expect( component.find( '.magic-input-option' ).length ).toBe(0);
		});
		it( 'Uses options prop by default - right number of options', () => {
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
			expect( component.find( '.magic-input-option' ).length ).toBe(2);
		});
	});
});