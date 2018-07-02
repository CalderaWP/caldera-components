import isValid from './isValid';

describe('Is valid utilities', () => {
	it('checks a valid email', () => {
		expect(isValid.email('roy@hiroy.club')).toBe(true);
	});

	it('checks an invalid email', () => {
		expect(isValid.email('roy.com')).toBe(false);
	});


	it('checks a valid url', () => {
		expect(isValid.url('https://hiroy.club')).toBe(true);
	});

	it('checks an invalid url', () => {
		expect(isValid.url('//pants')).toBe(false);
	});

	const date = new Date('13 October 1982 00:00 UTC');
	it('checks a valid date string', () => {
		expect(isValid.date(date.toISOString())).toBe(true);
	});

	it('checks a valid date object', () => {
		expect(isValid.date(date)).toBe(true);
	});

	it('checks an invalid date string', () => {
		expect(isValid.date('roy.com')).toBe(false);
	});

	it('Considers integers numeric', () => {
		expect(isValid.number(4)).toBe(true);
	});
	it('Considers numbers in strings numeric', () => {
		expect(isValid.number('4')).toBe(true);
	});
	it('Considers floats in strings numeric', () => {
		expect(isValid.number('4.01')).toBe(true);
	});
	it('Considers floats numeric', () => {
		expect(isValid.number(4.01)).toBe(true);
	});

	it('Considers strings not representing numbers to not  be numeric', () => {
		expect(isValid.number('Hi Roy.')).toBe(false);
	});
	it('Considers arrays not numeric', () => {
		expect(isValid.number([])).toBe(false);
	});

	it('Considers empty strings not numeric', () => {
		expect(isValid.number('')).toBe(false);
	});

	it('Considers object literals not numeric', () => {
		expect(isValid.number({
			hi: 'Roy'
		})).toBe(false);
	});

	it('Considers a valid string a valid string ', () => {
		expect(isValid.string(' Thanks!')).toBe(true);
	});

	it('Considers an empty string not a valid string ', () => {
		expect(isValid.string('')).toBe(false);
	});

	it('Considers a string a valid stringOrNumber ', () => {
		expect(isValid.stringOrNumber(' Thanks!')).toBe(true);
	});

	it('Considers an number a valid stringOrNumber ', () => {
		expect(isValid.stringOrNumber(111)).toBe(true);
	});
	it('Considers null not a valid stringOrNumber ', () => {
		expect(isValid.stringOrNumber(null)).toBe(false);
	});

	it('Considers an empty string not a valid stringOrNumber ', () => {
		expect(isValid.stringOrNumber('')).toBe(false);
	});


	it('Considers a string a string or number', () => {
		expect(isValid.stringOrNumber(' Thanks!')).toBe(true);
	});
});