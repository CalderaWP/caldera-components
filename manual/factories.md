# Component Factories
In general, if not using `RenderGroup` component, do not use the components, use the factories. 

## `fieldSetFactory`
You can use the `fieldSetFactory` to generate an array of React components for each config field.

```js
import React from 'react';
import * as Components from '@caldera-labs/components';

/**
* Create array of React components
*/
const fields = Components.factories.fieldSetFactory([
	{
    	'id': 'post-tags',
    	'label': 'Tags',
    	'desc': 'Comma separated list of tags.',
    	'type': 'text',
    },
	{
    	'id': 'seq-field',
    	'type': 'hidden',
    	'label': 'Sequence ID',
    }
]);

//Output each component.
//Fragment is used to avoid extra HTML elements being created around the configField. You could use `'div'` here if you wanted. 
{Array.from(fields).map((field,i) => {
    return React.createElement(
        React.Fragment, //could use `'div'` to add an extra wrapping `div` element.
        {
            key: i,//Key must be unique. Should only change to indicate that a complete re-render is needed. `field.ID` is probably a better option.
        },
        field // The component.
    );
})}
```
BTW ^^ This is basically what `RenderGroup` does, so have a really good reason to copypaste this example instead of using `RenderGroup`

## configField Schema

* ID (or id) `String`. Required.
    - The field's identifier 
    - Is not the HTML id attribute.
* label `String`. Required.
    - The field's label text
    - Association of label's html attribute `for` and field element's html `id` attribute is handled automatically.
* type `String`. Required.
    - The kind of input
* inputType `String`. Optional.
    - The type of input.
    - Any valid option for an HTML5 input is accepted. For example, `checkbox` or `url` or `email` or `number`.
    - Does not apply to select fields.
* description `String|Boolean`. Optional.
    - Extra help text for a form field inside of a `p` element.
    - Association of `p` element's html `id` attribute and the `aria-describedby` attribute of the form field is handled automatically.
    - Default value is `false`, which shows no description/ help text.
* options `Array`. Optional.
    - Select field options
    - Shape for options is `[{label: String, value: String|number|Array}]`
    - Does not apply to input fields. 
* disabled `Boolean` Optional.
    - Should form field be disbaled?
    - Default is false.


###Field types
### Select Fields

#### Example Of Select Fields
#### Basic Select Field
```js
const selectFieldConfig = {
	'id': 'cf-something-select-id',
	'type': 'select',
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
		console.log(newValue)
	}
};
```

### Input
Supports any valid HTML5 input type.

#### Examples Of Inputs

#### Text Field

```js
const textFieldConfig = {
	'id': 'post-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};
```
#### Hidden Field

```js
const hiddenFieldConfig = {
	'id': 'seq-field', //Unique ID
	'type': 'hidden', //type is set to hidden
	'label': 'Sequence ID', //label is still required. Make it descriptive.
};
```