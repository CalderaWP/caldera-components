'use strict';

var _fieldsetCheckboxHandler = require('./fieldsetCheckboxHandler');

describe('checkbox handler', function () {
	var udpateValue = null;
	beforeEach(function () {
		udpateValue = null;
	});

	function handler(newValue) {
		udpateValue = newValue;
	}
	it('Adds value to array of values', function () {
		(0, _fieldsetCheckboxHandler.fieldsetCheckboxHandler)({
			value: '2',
			label: 'Two'
		}, [5, 'pants'], handler);
		expect(udpateValue).toEqual([5, 'pants', '2']);
	});

	it('Removes value from array of values', function () {
		(0, _fieldsetCheckboxHandler.fieldsetCheckboxHandler)({
			value: 1,
			label: 'One'
		}, [1, 2], handler);
		expect(udpateValue).toEqual([2]);
	});

	it('Adds value to when values is a string', function () {
		(0, _fieldsetCheckboxHandler.fieldsetCheckboxHandler)({
			value: 1,
			label: 'One'
		}, '2', handler);
		expect(udpateValue).toEqual(['2', 1]);
	});

	it('Adds value to when values is a number', function () {
		(0, _fieldsetCheckboxHandler.fieldsetCheckboxHandler)({
			value: 1,
			label: 'One'
		}, 2, handler);
		expect(udpateValue).toEqual([2, 1]);
	});
});