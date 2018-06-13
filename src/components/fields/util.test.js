import {ariaDescribedbyAttr} from "./util";

describe('aria described by attr', () => {
	it('Returns null with no help text', () => {
		expect(ariaDescribedbyAttr('foo')).toEqual(null);
	});

	it('Returns properly when passed help text', () => {
		expect(ariaDescribedbyAttr('foo', 'help me Obi-won Kenobi')).toEqual('foo-description');
	});
});