import renderer from 'react-test-renderer';
import React from 'react';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FileSelect} from './FileSelect';

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {
};
describe('FileSelect component', () => {

	it('Matches snapshot', () => {
		const component = renderer.create(
			<FileSelect
				id={'file-1'}
				fieldClassName={'file'}
				onValueChange={genericChangeHandler}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});




});