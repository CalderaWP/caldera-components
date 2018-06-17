# Included Components

## Factories
In general, do not use the components, use the factories.


## Field Groups
If you have to use a component, please use `FieldGroup` not its inner components.

### Text field that is required
```jsx harmony
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
```jsx harmony
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

```jsx harmony
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

```jsx harmony
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