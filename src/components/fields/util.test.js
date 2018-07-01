import {
	ariaDescribedbyAttr,
	isValidHtml5type,
	addOrRemoveFromArray, toBoolean
} from './util';

describe('aria described by attr', () => {
	it('Returns null with no help text', () => {
		expect(ariaDescribedbyAttr('foo')).toEqual(null);
	});

	it('Returns properly when passed help text', () => {
		expect(ariaDescribedbyAttr('foo', 'help me Obi-won Kenobi')).toEqual('foo-description');
	});
});

describe('HTML5 checks', () => {
	it('allows email', () => {
		expect(isValidHtml5type('email')).toBe(true);
	});

	it('allows text ', () => {
		expect(isValidHtml5type('text')).toBe(true);
	});
	it('allows number ', () => {
		expect(isValidHtml5type('number')).toBe(true);
	});
	it('allows date ', () => {
		expect(isValidHtml5type('date')).toBe(true);
	});
	it('allows datetime ', () => {
		expect(isValidHtml5type('datetime')).toBe(true);
	});
	it('allows password ', () => {
		expect(isValidHtml5type('password')).toBe(true);
	});
	it('allows submit ', () => {
		expect(isValidHtml5type('submit')).toBe(true);
	});
	it('allows reset ', () => {
		expect(isValidHtml5type('reset')).toBe(true);
	});
	it('allows checkbox ', () => {
		expect(isValidHtml5type('checkbox')).toBe(true);
	});
	it('allows hidden ', () => {
		expect(isValidHtml5type('hidden')).toBe(true);
	});

	it('does not allow select ', () => {
		expect(isValidHtml5type('select')).toBe(false);
	});

	it('does not allow video ', () => {
		expect(isValidHtml5type('video')).toBe(false);
	});
});

describe('addOrRemoveFromArray', () => {
	it('Add a string to an array', () => {
		let array = [];
		array = addOrRemoveFromArray('one', array);
		expect(array).toEqual(['one']);
	});
	it('Add an integer to an array', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array);
		expect(array).toEqual([2]);
	});


	it('Removes from an array', () => {
		let array = [];
		array = addOrRemoveFromArray('two', array);
		array = addOrRemoveFromArray('two', array);
		expect(array).toEqual([]);
	});

	it('Add multiple values to an array', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array);
		array = addOrRemoveFromArray(3, array);
		expect(array).toEqual([2, 3]);
	});

	it('Add multiple values to an array and removes one of them', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array);
		array = addOrRemoveFromArray(3, array);
		array = addOrRemoveFromArray(5, array);
		array = addOrRemoveFromArray(3, array);
		expect(array).toEqual([2, 5]);
	});

});

describe('Boolean casting', () => {
	it('casts 1 to true', () => {
		expect(toBoolean(1)).toBe(true);
	});

	it('casts string 1 to true', () => {
		expect(toBoolean('1')).toBe(true);
	});

	it('keeps true  true', () => {
		expect(toBoolean(true)).toBe(true);
	});

	it('casts string "true" to true', () => {
		expect(toBoolean('true')).toBe(true);
	});
	it('casts string "on" to true', () => {
		expect(toBoolean('true')).toBe(true);
	});
	it('casts string "yes" to true', () => {
		expect(toBoolean('true')).toBe(true);
	});
	it('casts string "hiRoy" to false', () => {
		expect(toBoolean('hiRoy')).toBe(false);
	});
	it('casts undefined to false', () => {
		expect(toBoolean(undefined)).toBe(false);
	});
});