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
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('matches snapshot with message', () => {
		const component = renderer.create(
			<FileFieldGroup
				id={'file-3'}
				label={'Upload file'}
				fieldClassName={'file'}
				onValueChange={genericChangeHandler}
				message={{
					message: 'Hi Roy',
					error: false,
				}}
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

	describe('Value', () => {
		it('Passes updated value properly through the onChange handler', () => {
			let updatedValue = null;
			const component = mount(
				<FileFieldGroup
					id={'file-9'}
					fieldClassName={'file'}
					label={'Upload file'}
					onValueChange={(newValue) => {
						updatedValue = newValue;
					}}
					value={'file1.jpg'}
				/>
			);

			component.instance().onChange('file2.jpg');
			expect(updatedValue).toEqual('file2.jpg');
		});	
		
		it('Passes updated value to value properly through the onChange handler', () => {
			let value = 'file-10.jpg';
			const component = mount(
				<FileFieldGroup
					id={'file-10'}
					fieldClassName={'file'}
					label={'Upload file'}
					onValueChange={(newValue) => {
						value = newValue;
					}}
					value={value}
				/>
			);

			component.instance().onChange('file-11.jpg');
			expect(value).toBe('file-11.jpg');
		});	
		
	});

	describe('File Select Props', () => {

		it('Don\'t change value when autoUpload is set to false', () => {

			const FileFiledGroupValue = 'file-10.jpg';
			
			const component = mount(
				<FileFieldGroup
					id={'file-10'}
					fieldClassName={'file'}
					label={'Upload file'}
					onValueChange={(newValue) => {
						FileFiledGroupValue = newValue;
					}}
					value={FileFiledGroupValue}
					autoUpload={false}
				/>
			);

			component.instance().onChange('file-11.jpg');
			expect(FileFiledGroupValue).toBe('file-10.jpg');
		});

		it('Don\'t change value when autoUpload is set to false', () => {

			const FileFiledGroupValue = 'file-14.jpg';
			
			const component = mount(
				<FileFieldGroup
					id={'file-14'}
					fieldClassName={'file'}
					label={'Upload file'}
					value={FileFiledGroupValue}
					autoUpload={false}
				/>
			);

			component.instance().onChange('file-15.jpg');
			expect(FileFiledGroupValue).toBe('file-14.jpg');
		});

		it('Check the File Object during preprocess', () => {

			const FileFiledGroupValue = 'file-14.jpg';
			
			const component = mount(
				<FileFieldGroup
					id={'file-14'}
					fieldClassName={'file'}
					label={'Upload file'}
					value={FileFiledGroupValue}
					preprocess={(file, next) => {
						console.log(file);
						next(file);
					}}
				/>
			);

			expect(component.find('input')
			  .prop('preprocess')).toBe(component.instance().preprocess);

		});

	});



});