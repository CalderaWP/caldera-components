import isValidOrEmpty from './isValidOrEmpty';
import isValid from './isValid';

describe('Is valid or empty utilities', () => {
	it('checks a valid email', () => {
		expect(isValidOrEmpty.email('roy@hiroy.club')).toBe(true);
	});

	it('checks an invalid email', () => {
		expect(isValidOrEmpty.email('roy.com')).toBe(false);
	});

	it('Lets an empty email be valid', () => {
		expect(isValidOrEmpty.email('')).toBe(true);
	});


	it('checks a valid url', () => {
		expect(isValidOrEmpty.url('https://hiroy.club')).toBe(true);
	});

	it('checks an invalid url', () => {
		expect(isValidOrEmpty.url('//pants')).toBe(false);
	});

	it('lets an empty value be a valid url', () => {
		expect(isValidOrEmpty.url('')).toBe(true);
	});

	const date = new Date('13 October 1982 00:00 UTC');
	it('checks a valid date string', () => {
		expect(isValidOrEmpty.date(date.toISOString())).toBe(true);
	});

	it('checks a valid date object', () => {
		expect(isValidOrEmpty.date(date)).toBe(true);
	});

	it('checks an invalid date string', () => {
		expect(isValidOrEmpty.date('roy.com')).toBe(false);
	});

	it('Considers an empty value a valid date', () => {
		expect(isValidOrEmpty.date(0)).toBe(false);
	});


	it('Considers an empty  string to be a valid number', () => {
		expect(isValidOrEmpty.number('')).toBe(true);
	});

	it('Considers a non-empty string a valid string ', () => {
		expect(isValidOrEmpty.string(' Thanks!')).toBe(true);
	});

	it('Considers an empty string a valid string ', () => {
		expect(isValidOrEmpty.string('')).toBe(true);
	});

	it('Considers an empty string a valid stringOrNumber ', () => {
		expect(isValidOrEmpty.stringOrNumber('')).toBe(true);
	});

	it('Considers 0 a valid stringOrNumber ', () => {
		expect(isValidOrEmpty.stringOrNumber(0)).toBe(true);
	});

	it('Considers floats a valid stringOrNumber ', () => {
		expect(isValidOrEmpty.stringOrNumber(11.22)).toBe(true);
	});

	it('Considers non-empty strings a valid stringOrNumber ', () => {
		expect(isValidOrEmpty.stringOrNumber('Mike Corkum')).toBe(true);
	});

	it('Considers arrays not a valid stringOrNumber ', () => {
		expect(isValidOrEmpty.stringOrNumber(['Mike Corkum'])).toBe(false);
	});







});