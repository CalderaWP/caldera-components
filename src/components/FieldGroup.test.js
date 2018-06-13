import {FieldGroup} from "./FieldGroup";
import renderer from 'react-test-renderer';
import React from 'react';

describe( 'Field group component', () => {
	it('Works with help text',() => {
		const fieldGroup = renderer.create(
			<FieldGroup
				id={'control-22'}
				label={'Who'}
				help={'Who to say hi to'}
			/>
		);
		expect( fieldGroup.toJSON() ).toMatchSnapshot();
	});

	it('Help text is optional',() => {
		const fieldGroup = renderer.create(
			<FieldGroup
				id={'control-22'}
				label={'Who'}
			/>
		);
		expect( fieldGroup.toJSON() ).toMatchSnapshot();
	});
});