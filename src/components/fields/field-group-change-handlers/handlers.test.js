import {fieldsetCheckboxHandler} from './fieldsetCheckboxHandler';

describe('checkbox handler', () => {
	let udpateValue = null;
	beforeEach(() => {
		udpateValue = null;
	});

	function handler(newValue) {
		udpateValue = newValue;
	}
	it('Adds value to array of values', () => {
		fieldsetCheckboxHandler({
			value: '2',
			label: 'Two'
		}, [5, 'pants'], handler);
		expect(udpateValue).toEqual([5, 'pants', '2']);
	});

	it('Removes value from array of values', () => {
		fieldsetCheckboxHandler({
			value: 1,
			label: 'One'
		}, [1, 2], handler);
		expect(udpateValue).toEqual([2]);
	});

	it('Adds value to when values is a string', () => {
		fieldsetCheckboxHandler({
			value: 1,
			label: 'One'
		}, '2', handler);
		expect(udpateValue).toEqual(['2',1]);
	});


	it('Adds value to when values is a number', () => {
		fieldsetCheckboxHandler({
			value: 1,
			label: 'One'
		}, 2, handler);
		expect(udpateValue).toEqual([2,1]);
	});
});