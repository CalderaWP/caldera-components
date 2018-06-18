import {FieldGroup} from './FieldGroup';
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount } from 'enzyme';
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
					onValueChange={() => {}}
				/>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Help text is optional', () => {
			const component = renderer.create(
				<FieldGroup
					id={'control-22'}
					label={'Who'}
					onValueChange={() => {}}
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
					onValueChange={() => {}}
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
					onValueChange={() => {}}
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
				onValueChange={() => {}}
			/>);
			expect(wrapper.find('div.caldera-config-group')).toHaveLength(1);
		});

		describe( 'inner input', () => {
			it('Has inner input', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
					onValueChange={() => {}}
				/>);

				expect(wrapper.find('#test-control input').length).toBeTruthy();
			});

			it('controls inner input  html5 type', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
					onValueChange={() => {}}
					value={'Sivans'}
					inputType={'hidden'}
				/>);

				expect( wrapper.find('#test-control input').prop( 'type') ).toEqual('hidden');
			});

			it( 'Can change inner input', () => {
				let setValue = '';

				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'Who'}
					type={'input'}
					onValueChange={(newValue) => {
						setValue = newValue;
					}}
					value={'Sivans'}
				/>);

				wrapper.find('#test-control input').simulate('change', { target: { value: 'r3s' } });
				expect( setValue ).toEqual('r3s');

			});
		});

		describe( 'Label of Input', () => {
			it( 'Has no label for hidden fields ', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'I will not be outputeed'}
					type={'input'}
					inputType={'hidden'}
					onValueChange={() => {}}
					value={'Sivans'}
				/>);
				expect( wrapper.find( 'input') ).toHaveLength(1);
				expect( wrapper.find( 'label') ).toHaveLength(0);
			});

			it( 'Has has label for other input fields ', () => {
				const wrapper = mount(<FieldGroup
					id={'test-control'}
					label={'I will not be outputeed'}
					type={'input'}
					onValueChange={() => {}}
					value={'Sivans'}
				/>);
				expect( wrapper.find( 'input') ).toHaveLength(1);
				expect( wrapper.find( 'label') ).toHaveLength(1);
			});

		});

	});
});