import renderer from 'react-test-renderer';
import React from 'react';
import {MagicItem} from './MagicItem';


describe('MagicSelect component', () => {

	it('Matches snapshot', () => {
		const component = renderer.create(
			<MagicItem
				item={{
					label: 'HTML',
					value: 'html'
				}}
				highlightColor={'#fff00'}
				notHighlighterColor={'white'}
				isHighlighted={true}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Can render as span', () => {
		const component = renderer.create(
			<MagicItem
				item={{
					label: 'HTML',
					value: 'html'
				}}
				highlightColor={'#fff00'}
				notHighlighterColor={'white'}
				isHighlighted={true}
				elementType={'span'}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});