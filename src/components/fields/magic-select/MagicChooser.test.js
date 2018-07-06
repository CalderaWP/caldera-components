import {MagicChooser} from './MagicChooser';
import renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Select field component', () => {
	function genericChangeHandler() {

	}

	it('Creates with one option', () => {
		const component = renderer.create(
			<MagicChooser
				onMagicChange={genericChangeHandler}
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

	it('Sends the right update value when clicked', () => {
		let updateValue = null;
		const component = mount(
			<MagicChooser
				onMagicChange={(newValue) => {
					updateValue = newValue
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
		expect(updateValue).toBe('Tags')
	});


});