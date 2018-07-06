import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FieldGroup} from "./components/fields/FieldGroup";
import {fieldSetFactory} from "./components/fields/factories/fieldSetFactory";
import {RenderGroup} from "./components/RenderGroup";
import {MagicSelect} from "./components/fields/magic-select/MagicSelect";

let textFieldValue = 'Roy,Mike';
const textFieldConfig = {
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false,
	value: textFieldValue,
	onValueChange: function(newValue){
		textFieldValue = newValue
	},


};

const numberFieldConfig = {
	'id': 'cf--something-some-number',
	'label': 'The number of something',
	'desc': 'How many somethings?',
	'type': 'text',
	'inputType': 'number',
	attributes: {
		min: -1,
		max: 22,
		step: 0.1,
	},
	value: 42,
	onValueChange: (newNumberValue) =>{
		console.log(newNumberValue);
	},

};

let hiddenFieldValue = '42';
const hiddenFieldConfig = {
	'id': 'cf-something-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false,
	value: hiddenFieldValue,
	onValueChange: function(newValue){
		hiddenFieldValue = newValue
	},
};

let selectFieldValue = 'html';
const selectFieldConfig = {
	'id': 'cf-something-select-id',
	'type': 'dropdown',
	'label': 'Content type',
	'description': 'Choose content type, default is HTML',
	options: [
		{
			label: 'HTML',
			value: 'html'
		},
		{
			label: 'Plain Text',
			value: 'plain'
		}
	],
	value: selectFieldValue,
	onValueChange: function(newValue){
		selectFieldValue = newValue
	}
};

let fieldSetFieldValue = ['1'];
const fieldSetField = {
	id: 'fieldset-3',
	label: 'How many?',
	type: 'fieldset',
	options: [
		{
			value: '1',
			label: 'One'
		},
		{
			value: '2',
			label: 'Two'
		}

	],
	value:[],
	onValueChange:(newValue) => {
		fieldSetFieldValue=newValue;
	}
};

const configFields = [
	textFieldConfig,
	hiddenFieldConfig,
	selectFieldConfig,
	fieldSetField,
	numberFieldConfig
];
const configFieldEls = fieldSetFactory(configFields);



let values = {
	one: '',
	two: '',
	three: ''
};

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>


				<div>
					<h2>Created With RenderGroup Component</h2>
					<RenderGroup
						configFields={configFields}
						onBlur={(fI) => {console.log(fI)}}
					/>
				</div>

				<div>
					<h2>Created With Factory</h2>
					{Array.from(configFieldEls).map((field,i) => {
						return React.createElement(
							React.Fragment, {
								key: i,
							},
							field
						);
					})}
				</div>

				<div>
					<h2>Magic Select</h2>
					<MagicSelect
						id={'magic-3'}
						fieldClassName={'magic'}
						onValueChange={() => {}}
						options={[
							{
								label: 'HTML',
								value: 'html'
							},
							{
								label: 'Plain Text',
								value: 'plain'
							}
						]}
					/>
					<MagicSelect
						id={'magic-4'}
						fieldClassName={'magic'}
						onValueChange={() => {}}
						options={[

						]}
					/>
				</div>

				<div>
					<h2>Inputs</h2>
					<FieldGroup
						id={'control-22'}
						label={'Required Text input'}
						type={'input'}
						isRequired={true}
						value={values.one}
						onValueChange={(newValue) => {
							values.one=newValue;
						}}
					/>

					<FieldGroup
						id={'control-23'}
						label={'Non Required Text input'}
						type={'input'}
						isRequired={true}
						value={values.two}
						onValueChange={(newValue) => {
							values.two=newValue;
						}}
					/>

					<FieldGroup
						id={'control-23'}
						label={'With Help Text'}
						type={'input'}
						isRequired={true}
						help={'Adding help text sets aria-describedy'}
						value={values.thre}
						onValueChange={(newValue) => {
							values.three=newValue;
						}}
					/>

					<FieldGroup
						id={'control-24'}
						label={'Non Required Numeric input'}
						type={'input'}
						innertype={'number'}
						isRequired={true}
						value={values.two}
						onValueChange={(newValue) => {
							values.two=newValue;
						}}
					/>

					<FieldGroup
						id={'control-25'}
						label={'Non Required input disabled with error'}
						type={'input'}
						innertype={'text'}
						isRequired={true}
						value={values.two}
						onValueChange={(newValue) => {
							values.two=newValue;
						}}
						message={{
							message:'Failures happened',
							error: true
						}}
						disabled={true}
					/>

					<FieldGroup
						id={'control-25'}
						label={'Non Required input with non-error message'}
						type={'input'}
						innertype={'text'}
						isRequired={true}
						value={values.two}
						onValueChange={(newValue) => {
							values.two=newValue;
						}}
						message={{
							message:'Failures did not happened',
							error: false
						}}
					/>
				</div>
				<div>
					<h2>Selects</h2>
					<FieldGroup
						type={'select'}
						label={'Basic select field'}
						value={selectFieldValue}
						id={'r'}
						onValueChange={(newValue) => {
							selectFieldValue = newValue;
						}}
						options={[
							{
								value: 1,
								label: 'One'
							},
							{
								value: 2,
								label: 'Two'
							}
						]}
					/>

				</div>

				<div>
					<h2>fieldsets</h2>
					<FieldGroup
						type={'fieldset'}
						label={'Checkbox group'}
						value={fieldSetFieldValue}
						id={'Checkbox1'}
						onValueChange={(newValue) => {
							fieldSetFieldValue = newValue;
						}}
						options={[
							{
								value: '1',
								label: 'One'
							},
							{
								value: '2',
								label: 'Two'
							}
						]}
					/>
				</div>

			</div>
		);
	}
}

export default App;
