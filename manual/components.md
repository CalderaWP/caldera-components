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

### Add onFocus Event For All Fields Of Render Group
You can add an onFocus event that fires when ever any field is focused. The callback function gets the config field's ID as its only parameter.
```js
<RenderGroup
    configFields={[
    	//add your fields
    ]}
    className={'cf-something-config'}
    onFocus={(fieldId) => console.log(fieldId)}
 /> 

```

### Add onBlur Event For All Fields Of Render Group
You can add an `onBlur` event that fires when ever any field is blurred. The callback function gets the config field's ID as its only parameter.

```js
<RenderGroup
    configFields={[
    	//add your fields
    ]}
    className={'cf-something-config'}
    onBlur={(fieldId) => console.log(fieldId)}
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
import {SelectFieldFancy} from '@caldera-labs/components/src/components/fields/select/SelectFieldFancyFancy.js'

<SelectFieldFancy
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

## Fieldsets
For a `<fieldset>` element containing checkboxes, pass the value `fieldset` to the `type


```js
//Value is an array.
let checkBoxValue = ['1'];

<FieldGroup
    type={'fieldset'} //Create a ground of checkboxes wrapped in a field set
    label={'Checkbox group'} //Used for the <legend>
    value={checkBoxValue} //value(s)
    id={'Checkbox1'} //id attribute for <fieldset>
    onValueChange={(newValue) => {
    	//logic of removing/adding from array is handled internally
        checkBoxValue = newValue;
    }}
    options={[
        {
            value: '1', //this value is in array so box will be checked by default
            label: 'One'// Used for this checkbox's <label>
        },
        {
            value: '2', //this value is NOT in array so box will NOT be checked by default
            label: 'Two'// Used for this checkbox's <label>
        }
    ]}
/>
```

## Button Group

### Examples
### Button Group With Two Options
```js
<ButtonGroup
    onChange={(selectedValue) => {
    	console.log(selectedValue);
    }}
    options={[
        {
            value: 1,
            label: 'Option One',
        },
        {
            value: 2,
            label: 'Option Two',
        }
    ]}
    value={1}
/>
```

#### Button Group With Icon
If options have `icon`, the rendered markup for the button will be like this:

```html
<button ...><span class="fa-envelope"></span></button>

```

That's the markup you need if font awesome is loaded on the page. In the future this component should supply font awesome or dashicons or emoji icons. For now, it does not.

```js
<ButtonGroup
    onChange={(selectedValue) => {
    	console.log(selectedValue);
    }}
    options={[
        {
            value: 1,
            label: 'Option One',
            icon: 'fa-envelop'
        },
        {
            value: 2,
            label: 'Option Two',
            icon: 'fa-twitter'

        }
    ]}
    value={1}
/>
```

#### Explicitly set `aria-label` Attribute
By default, the visual representation fo the option is `option.label`. That makes sense, if you're representing the option with words. Allowing the component to use `option.label` for the `aria-label` attribute, which is its default value, I think makes sense.

But, if the visual representation of the option is an emoji or image, then `aria-label` can not be an image, it has to be text that gives meaning to the image for users who can not see the image.

```js
<ButtonGroup
    onChange={(selectedValue) => {
    	console.log(selectedValue);
    }}
    options={[
        {
            value: 'fields',
            label: '%',
            ariaLabel: 'Select from field values'
        },
        {
            value: 'system',
            label: '{}',
            ariaLabel: 'Select from system values'
        },
    ]}
/>
```

## Message component
The `Message` component is used to display validation messages in a `FieldGroup` component. Messages have a shape defined in the `messagePropShape` object. This component, by design, returns nothing if `props.message.message` is not supplied, or is an empty string.
### An error message
```js
<Message
    message={{
        message:'Something bad has happened.',
        error: true,
    }}
/>
```

### A non-error message
```js
<Message
    message={{
        message:'Something has happened.',
        error: false,
    }}
/>
```

### Render nothing
Message components only render when needed.

This will not render anything
 ```js
 <Message
     message={{
         error: false,
     }}
 />
 ```
 
 This will also render nothing:
  ```js
  <Message
      message={{
          message: '',
      }}
  />
  ```

### Adding additional classes to the message's outer element
This example adds the class `cf-whatever-error` to the element with the message.
 
```js
<Message
    message={{
        message:'Hi Roy'
    }}
    className={'cf-whatever-error'}
/>
```