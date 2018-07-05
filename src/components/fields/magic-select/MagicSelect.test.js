
import renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MagicSelect } from "./MagicSelect";

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {};
describe( 'MagicSelect component', () => {
	let selectFieldValue = 'html';


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
	})
});