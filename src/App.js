import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FieldGroup} from "./components/fields/FieldGroup";
import {fieldSetFactory} from "./components/fields/factories/fieldSetFactory";
import {RenderGroup} from "./components/RenderGroup";
import {MagicFieldGroup} from "./components/fields/magic-select/MagicFieldGroup";
import {FileFieldGroup} from "./components/fields/file-field/FileFieldGroup";

let textFieldValue = 'Roy,Mike';
const textFieldConfig = {
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false,
	value: textFieldValue,
	onValueChange: function(newValue){
		textFieldValue = newValue;
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
	'type': 'file',
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

let magicFieldValue = '';

let fileFieldValue = '';

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
					<MagicFieldGroup
						id={'magic-5'}
						label={'Magic Group'}
						fieldClassName={'magic'}
						onValueChange={(newValue) => {
							magicFieldValue = newValue;
						} }
						fieldsList={[
							{
								label: 'Field One',
								value: '%fldOne%'
							},
							{
								label: 'Field Two',
								value: '%fldTwo%'
							},
							{
								label: 'Field Three',
								value: '%fldThree%'
							},
						]}
						systemTagsList={[
							{
								label: 'User First Name',
								value: '{user:first_name}'
							}
						]}
						isOpen={true}
						value={magicFieldValue}
					/>
				</div>

				<div>
					<h2>FileFieldGroup</h2>
					<FileFieldGroup
						id={'file-1'}
						label={'File Field'}
						className={'file'}
						onValueChange={(newValue) => {
							fileFieldValue = newValue;
						} }	
						value={fileFieldValue}
						account={'1'}
						entryId={'cf_e_2'}
						accept={'.jpg,.png'}
						inputProps={{
							'class': 'coolClassName', 
							'data-file-input': 'awesome-data'
						}}
					/>
				</div>
				

				<div>

					<h2>FieldGroup type='file'</h2>
					<FieldGroup
						id={'file-22'}
						label={'File field'}
						type={'file'}
						isRequired={false}
						value={fileFieldValue}
						onValueChange={(newValue) => {
							fileFieldValue = newValue;
						}}
					/>
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
						onValueChange={(newValue) => {
							selectFieldValue = newValue;
						}}
					/>

					<FieldGroup
						type={'select'}
						label={'Required select field'}
						value={selectFieldValue}
						isRequired={true}
						id={'r'}
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
						onValueChange={(newValue) => {
							selectFieldValue = newValue;
						}}
					/>

					<FieldGroup
						type={'select'}
						label={'Required select field'}
						disabled={true}
						id={'r'}
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
						onValueChange={(newValue) => {  //Added after test response, ask Josh if this was on purpose
							selectFieldValue = newValue;
						}}
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
