import renderer from 'react-test-renderer';
import React from  'react';

import {CalderaHeader} from './CalderaHeader';
import {PageBody} from './PageBody';
import {StatusIndicator} from './StatusIndicator';
describe( 'admin components', () => {
	it( 'CalderaHeader Matching Snapshot ', () => {
		const component = renderer.create(
			<CalderaHeader />
		);
		expect(component.toJSON()).toMatchSnapshot();

	});
	it( 'CalderaHeader Matching Snapshot with child li', () => {
		const component = renderer.create(
			<CalderaHeader

			>
				<li>Hi Roy</li>
			</CalderaHeader>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'PageBody Matching Snapshot ', () => {
		const component = renderer.create(
			<PageBody />
		);
		expect(component.toJSON()).toMatchSnapshot();

	});
	it( 'PageBody Matching Snapshot with child ', () => {
		const component = renderer.create(
			<PageBody

			>
				<div>Hi Roy</div>
			</PageBody>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'StatusIndicator Matching Snapshot ', () => {
		const component = renderer.create(
			<StatusIndicator />
		);
		expect(component.toJSON()).toMatchSnapshot();

	});
	it( 'StatusIndicator Matching Snapshot with a message to show ', () => {
		const component = renderer.create(
			<StatusIndicator
				message={'Hi Roy'}
				success={true}
				show={true}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	it( 'StatusIndicator Matching Snapshot with an error message to show ', () => {
		const component = renderer.create(
			<StatusIndicator
				message={'False Roy'}
				success={false}
				show={true}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
