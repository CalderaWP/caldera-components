# Testing

## Unit Testing
Tests use [Jest](https://facebook.github.io/jest/docs/en/expect.html). Unit tests are primarily snapshots of components or tests of function results


### Example: Snapshot Testing A Component
```
it( 'Passes its props', () => {
    const component = renderer.create(
        <Input
            id={'bags'}
            fieldClassName={'foo'}
            onValueChange={() => {}}
        />
    );
    expect( component.toJSON() ).toMatchSnapshot();
});
```

### Example: Testing a function result
```
it('Returns properly when passed help text', () => {
    expect(ariaDescribedbyAttr('foo', 'help me Obi-won Kenobi')).toEqual('foo-description');
});

```
## DOM Testing
DOM testing uses Jest and [Enzyme](http://airbnb.io/enzyme).

### Example

```js

import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it( 'Has the right wrapper class', () => {
    const wrapper = shallow(<FieldGroup
        id={'whatever'}
        label={'does not matter'}
        type={'input'}
    />);
    expect(wrapper.find('div.caldera-config-group').length).toBe(1);
});
```

### Important Notes

### What To Test
EVERYTHING! LOL.

[Don't test React, test our components.](https://github.com/airbnb/enzyme/issues/952#issuecomment-303238446) 

### shallow vs full rendering
Shallow rendering is preferred. Full rendering with `mount` should be used for containers or testing decedents of a component.

* http://airbnb.io/enzyme/docs/api/shallow.html
* http://airbnb.io/enzyme/docs/api/mount.html

### Be careful about copying from Enzyme's docs
Enzyme's docs use a different assertion library than we do. Therefore examples like this:

```
it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
});
```

[see original](http://airbnb.io/enzyme/docs/api/mount.html)

Would be rewritten as this:

```js
it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).toEqual('baz');
});
```

