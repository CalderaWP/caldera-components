# Included Component
These components are used by the factories and follow their schema, [defined here](https://calderalabs.org/caldera-components/manual/factories.html#configfield-schema).
In general, use the `RenderGroup` component, do not use the low-level components. Use the factories or `RenderGroup`.

## `RenderGroup`
The `RenderGroup` component takes an array of field configs and generates UI for them. 

* [Reference](https://calderalabs.org/caldera-components/class/src/components/RenderGroup.js~RenderGroup.html)

### Example Of `RenderGroup` Component Usage

```jsx 
const textFieldConfig = {
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false,
	value: 'Roy,Mike',
	onValueChange: (newValue) =>{
		console.log(newValue)
	}
};

const hiddenFieldConfig = {
	'id': 'cf-something-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false,
	value: '42',
    	onValueChange: (newValue) =>{
    		console.log(newValue)
    	}
};

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
	value: 'html',
    onValueChange: (newValue) =>{
        console.log(newValue)
    }
};

const configFields = [
	textFieldConfig,
	hiddenFieldConfig,
	selectFieldConfig
];

<RenderGroup
    configFields={configFields}
    className={'cf-something-config'}
 /> 
```


## Field Groups
If you have to use a component, please use `FieldGroup` not its inner components.

* [Reference](https://calderalabs.org/caldera-components/function/index.html#static-function-Input)

### Text field that is required
```jsx
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

```

### Text field that is not required
```jsx
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
```

### Text field with help text
* Adding help text automatically ads `aria-describedby`

```jsx
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
```


### Number Field

```jsx
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

```
## Select Fields
* [Reference](https://calderalabs.org/caldera-components/function/index.html#static-function-SelectField)

```jsx 
import {SelectField} from '@caldera-labs/components/src/components/fields/select/SelectField.js'

<SelectField
    id={'number-of-things'} //ID attribute for input
    fieldClassName={'thing-select'} //Field className prop
    onValueChange={(newValue) => {
        console.log(newValue)
    }} //Update callback
    options={[
        {
            value: '1,
            label: 'One'
        },
        {
            value: '2',
            label: 'Two'
        }
    ]}
    value={'2'} //The current value
/>
    
```