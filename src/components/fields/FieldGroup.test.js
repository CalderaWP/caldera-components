import {FieldGroup} from './FieldGroup';
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe( 'Field Group component', () => {
	describe('Field group component props', () => {
		it('Works with help text', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-22'}
					label={'Who'}
					help={'Who to say hi to'}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Help text is optional', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-22'}
					label={'Who'}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can show an input ', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-22'}
					label={'Who'}
					type={'input'}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can mark inner input as required', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-22'}
					label={'Who'}
					type={'input'}
					isRequired={true}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Field group component rendering', () => {
		it('Has the right wrapper class', () => {
			const wrapper = shallow(<FieldGroup
				id={'xpadasfsad'}
				label={'Who'}
				type={'input'}
			/>);
			expect(wrapper.find('div.caldera-config-group').length).toBe(1);
		});

		describe(  'inner input', () => {
			it('Has inner input', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
				/>);

				expect(wrapper.find('#test-control input').length).toBeTruthy();
			});
		});

	});
});