import React, { Component } from 'react';
import logo from '../globe.svg';
import './App.css';
import {FieldGroup} from "./components/fields/FieldGroup";
import {SelectField} from "./components/fields/select/SelectField";

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
				</div>
				<div>
					<h2>Selects</h2>
					<SelectField
						id={'r'}
						fieldClassName={'rs'}
						onValueChange={() => {}}
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
						isOpen={true}
					/>
				</div>
			</div>
		);
	}
}

export default App;
