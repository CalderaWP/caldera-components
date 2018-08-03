import renderer from 'react-test-renderer';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FileFieldGroup} from './FileFieldGroup';

Enzyme.configure({adapter: new Adapter()});

const genericChangeHandler = () => {
};
describe('FileFieldGroup component', () => {


	it('matches snapshot with no message', () => {
		const component = renderer.create(
			<FileFieldGroup
				id={'file-3'}
				label={'Upload file'}
				fieldClassName={'file'}
				onValueChange={genericChangeHandler}
				isOpen={false}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe('Inner input', () => {
		it('Has inner input', () => {
			const component = mount(
				<FileFieldGroup
					id={'file-1'}
					fieldClassName={'file'}
					label={'Upload file'}
					onValueChange={genericChangeHandler}
					isOpen={false}
				/>
			);
			expect(component.find('input')).toHaveLength(1);
		});
	});

	it('Receives updated value', () => {
		let value = 'Fotolia_65093732_femme-mains-rites-automne-2.jpg';
		const component = mount(
			<FileFieldGroup
				id={'file-5'}
				fieldClassName={'file'}
				label={'Upload file'}
				onValueChange={(newValue) => {
					value = newValue;
				}}
				
				value={value}
				isOpen={true}
			/>
		);
		component.find('input').simulate('focus');
		component.find('input').simulate('change', {target: {value: 'Fotolia_65093732_femme-mains-rites-automne.jpg'}});
		expect(value).toEqual('Fotolia_65093732_femme-mains-rites-automne.jpg');
	});

});