import Admin from './index';
import {CalderaHeader} from './CalderaHeader';
import {PageBody} from './PageBody';
import {StatusIndicator} from './StatusIndicator';
describe( 'Admin components export', () => {

	it( 'Exports CalderaHeader',() => {
		expect( typeof  Admin.CalderaHeader ).toBe( typeof  CalderaHeader );
	});

	it( 'Exports PageBody',() => {
		expect( typeof  Admin.PageBody ).toBe( typeof  PageBody );
	});

	it( 'Exports StatusIndicator',() => {
		expect( typeof  Admin.StatusIndicator ).toBe( typeof  StatusIndicator );
	});
});
